import { useEffect, useState } from "react";
import { app } from "../../Firebase";
import LandingPage from "./LandingPage";
import Auth from "../../utils/auth";
import { useApolloClient } from "@apollo/client";
import { useQuery, useMutation } from "@apollo/client";
import { NavLink, useNavigate } from "react-router-dom";
import "@firebase/storage";
import EdProContainer from "../templates/EdProContainer";
import EdProDropdown from "../templates/EdProDropdown";
import EdProForm from "../templates/EdProForm";
import EdProSwitch from "../templates/EdProSwitch";
import { getUserType } from "../../utils/helpers";
import ProfilePicture from "../templates/profilePicture";
import { QUERY_MY_PROFILE_BABYSITTER, QUERY_MY_PROFILE_PARENT } from "../../utils/queries";
import { CREATE_BABYSITTER, CREATE_PARENT } from "../../utils/mutations";
import { Button } from "flowbite-react";

function CreateProfile() {
  const userType = getUserType();
  const [temp, setTemp] = useState({});
  const [createParent] = useMutation(CREATE_PARENT, {
    context: {
      headers: {
        authorization: `${Auth.getToken() || ""}`,
      },
    },
  });
  const [createBabysitter] = useMutation(CREATE_BABYSITTER, {
    context: {
      headers: {
        authorization: `${Auth.getToken() || ""}`,
      },
    },
  });

  const { data, loading } = useQuery(
    userType === "Parent" ? QUERY_MY_PROFILE_PARENT : QUERY_MY_PROFILE_BABYSITTER,
    {
      context: {
        headers: {
          authorization: `${Auth.getToken() || ""}`,
        },
      },
    }
  );

  const navigate = useNavigate();
  const client = useApolloClient(); // Use the useApolloClient hook here

  useEffect(() => {
    if (data && data.myProfileDetailParent?.zone) {
      // Redirect to a different page if the profile is already created
      navigate("/");
    }
  }, [navigate]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const handleChange = (value) => {
    setTemp((prev) => ({ ...prev, zone: value }));
  };

  const handleToggle = (name, value) => {
    setTemp((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      if (userType === "Parent") {
        await createParent({
          variables: {
            ...temp,
          },
        });
      } else {
        await createBabysitter({
          variables: {
            ...temp,
          },
        });
      }
      navigate("/");
    } catch (error) {
      console.log(error);
      // If the error is related to a 400 status code, you can also access the specific error message
      if (error.graphQLErrors.length > 0) {
        console.log("Error Message:", error.graphQLErrors[0].message);
      }
    }
  };

  if (Auth.loggedIn()) {
    return (
      <div className="bg-slate-300 min-h-screen pt-16 sm:pt-20 md:pt-24 font-cool">
        <div className="justify-between z-10">
          <div className="flex sm:flex-row flex-col rounded-lg align-center md:mt-5 mt-2 justify-center items-center md:py-5 py-2 font-neat">
           
            
              <h1 className="  lg:text-4xl px-2 text-2xl text-center font-medium animate-fade-in-word">
              Before you start using CubCare, select a location.
              </h1>
           
          </div>
        </div>
        <div className="justify-center z-10">
          <div className="flex flex-wrap justify-center 2xl:mx-60 z-10 animate-fade-in-word">
         
          <EdProContainer title="Location">
              <EdProDropdown onChange={handleChange} zone={temp?.zone ||(data.myProfileDetailBabysitter?.zone||data.myProfileDetailParent?.zone)}  />
            </EdProContainer>
           
          </div>
        </div>
        <div className="flex flex-wrap justify-center 2xl:mx-72 z-20">
          <div className="flex flex-wrap justify-center sm:w-80 w-72 bg-white rounded-lg py-1 z-20">
          <Button
              onClick={handleCreate}
              type="button"
              disabled={!temp.zone} // Disable the button if zone is not selected
              className="flex-col rounded bg-red-700 px-12 pb-2 pt-2.5 m-1 leading-normal font-medium text-white transition duration-150 ease-in-out hover:bg-red-800 focus:outline-none focus:ring-0 active:bg-red-950 text-xl xs:text-sm z-20"
            >
              Create Profile
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return <LandingPage />;
  }
}

export default CreateProfile;
