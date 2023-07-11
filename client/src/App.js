import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


import Header from "./components/templates/Header"
import Home from "./components/pages/HomePage";
import Map from "./components/pages/MapPage";
import Profile from "./components/pages/ProfilePage";
import EditProfile from "./components/pages/EditProfilePage";
import Contacts from "./components/pages/ContactsPage";

import SkylineWrapper from './components/svg/SkylineWrapper';

const httpLink = createHttpLink({
  uri: "/graphql",
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
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Header></Header>
        <SkylineWrapper></SkylineWrapper>
          <Routes>
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/header" element={<Header />} />
            <Route path="/map" element={<Map />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
