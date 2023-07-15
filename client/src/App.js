import "./App.css";

import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import MapResultsPage from "./components/pages/MapResultsPage";
import Header from "./components/templates/Header"
import Home from "./components/pages/HomePage";
import Map from "./components/pages/MapPage";
import Profile from "./components/pages/ProfilePage";
import EditProfile from "./components/pages/EditProfilePage";
import Contacts from "./components/pages/ContactsPage";
import Context from "./context";
import SkylineWrapper from './components/svg/SkylineWrapper';
import CreateProfile from "./components/pages/CreateProfile";

const httpLink = createHttpLink({
  uri:process.env.NODE_ENV=='production'?"/graphql":'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [zone,setZone]=useState(null);
  return (
    <Context.Provider value={{zone,setZone}}>
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Header></Header>
        <SkylineWrapper></SkylineWrapper>
          <Routes>
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-profile" element={<CreateProfile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route exact path="/results/:zone" element={<MapResultsPage />} />
            <Route path="/map" element={<Map />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
    </Context.Provider>
  );
}

export default App;
