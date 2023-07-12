
import { useState } from "react";
import { app } from "../../Firebase";
import LandingPage from "./LandingPage";
import Auth from "../../utils/auth";

import { NavLink } from "react-router-dom";
import "@firebase/storage";
import EdProContainer from "../templates/EdProContainer";
import EdProDropdown from "../templates/EdProDropdown";
import EdProForm from "../templates/EdProForm";
import EdProSwitch from "../templates/EdProSwitch";
import { getUserType } from "../../utils/helpers";
import ProfilePicture from "../templates/profilePicture";


function EditProfile() {
    const userType = getUserType(); // Assuming you have a function to retrieve the user type

    if (Auth.loggedIn()) {
        return (
          <div className="bg-slate-300 min-h-screen pt-16 sm:pt-20 md:pt-24 font-cool">
            <div className="justify-between z-10">
              <div className="flex sm:flex-row flex-col rounded-lg align-center md:mt-5 mt-2 justify-center items-center md:py-5 py-2 font-neat">
                {userType === "Babysitter" && (
                  <h1 className="lg:text-5xl px-1 md:text-4xl text-3xl text-center font-medium">
                    Update your brand.
                  </h1>
                )}
                {userType === "Parent" && (
                  <h1 className="lg:text-5xl px-1 md:text-4xl text-3xl text-center font-medium">
                    Choose what to share with babysitters.
                  </h1>
                )}
              </div>
            </div>
            <div className="justify-center z-10">
          <div className="flex flex-wrap justify-center 2xl:mx-60 z-10 animate-fade-in-word">
            {userType === "Babysitter" && (
              <EdProContainer title="Upload Profile Picture">
                <ProfilePicture />
              </EdProContainer>
            )}
            <EdProContainer title="Location">
              <EdProDropdown />
            </EdProContainer>
            {userType === "Babysitter" && (
              <EdProContainer title="Babysitting Experience">
                <EdProForm placeholder="Work history specific to babysitting. Number of kids and their ages are good to include here." />
              </EdProContainer>
            )}
            {userType === "Babysitter" && (
              <EdProContainer title="Other Experience">
                <EdProForm placeholder="Nursing, teaching, coaching, or anything else related to child care goes here." />
              </EdProContainer>
            )}
            {userType === "Babysitter" && (
              <EdProContainer title="Transportation">
                <EdProForm placeholder="How do you get around the city? Having a driver's license is a plus, even if you don't have a car." />
              </EdProContainer>
            )}
            {userType === "Babysitter" && (
              <EdProContainer title="Activities and Games">
                <EdProForm placeholder="How do you engage with the kids?" />
              </EdProContainer>
            )}
            {userType === "Parent" && (
              <EdProContainer title="Number of Kids">
                <EdProForm placeholder="How many children will you need child care for? You can put genders here too if you like. (Eg: 1 boy and 1 girl)" />
              </EdProContainer>
            )}
            {userType === "Parent" && (
              <EdProContainer title="Age(s)">
                <EdProForm placeholder="How old are they?" />
              </EdProContainer>
            )}
            {userType === "Parent" && (
              <EdProContainer title="Activities and Games">
                <EdProForm placeholder="What kind of activities or games do your kids enjoy doing?" />
              </EdProContainer>
            )}
            {userType === "Parent" && (
              <EdProContainer title="Allergies/Medical">
                <EdProForm placeholder="Are there any allergies or medical conditions to be aware of?" />
              </EdProContainer>
            )}
            {userType === "Parent" && (
              <EdProContainer title="Special Requests">
                <EdProForm placeholder="Do you have any other special requests? Things related to scheduling or house rules are good to put here." />
              </EdProContainer>
            )}
            <EdProContainer title="Badges">
              <EdProSwitch />
            </EdProContainer>
            {userType === "Babysitter" && (
              <EdProContainer title="Rates">
                <EdProForm placeholder="How much will you be charging for your services? Average is about $20, with an extra dollar for each additional child. Charging below the average can give you an edge." />
              </EdProContainer>
            )}
            {userType === "Parent" && (
              <EdProContainer title="Contact Info">
                <EdProForm placeholder="How do you want babysitters to contact you? Phone number, email, or social media are all OK. If this field is blank, babysitters have no way to reply to you." />
              </EdProContainer>
            )}
          </div>
        </div>
        <div className="flex flex-wrap justify-center 2xl:mx-72 z-20">
          <div className="flex flex-wrap justify-center sm:w-80 w-72 bg-white rounded-lg py-1 z-20">
            <NavLink
              to="/Profile"
              type="button"
              className="flex-col rounded bg-red-700 px-12 pb-2 pt-2.5 m-1 leading-normal font-medium text-white transition duration-150 ease-in-out hover:bg-red-800 focus:outline-none focus:ring-0 active:bg-red-950 text-xl xs:text-sm z-20"
            >
              Save Changes
            </NavLink>
          </div>
        </div>
      </div>
    );
  } else {
    return <LandingPage />;
  }
}

export default EditProfile;
