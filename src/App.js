import React from "react";
import "./App.css";

import { initializeApp } from "firebase/app";


const firebaseConfig = {

  apiKey: "AIzaSyBsQBdPAsSs5zqS4fZLj3FQtRn5RBoyfVQ",

  authDomain: "netflix-clone-acb27.firebaseapp.com",

  projectId: "netflix-clone-acb27",

  storageBucket: "netflix-clone-acb27.appspot.com",

  messagingSenderId: "878353457832",

  appId: "1:878353457832:web:3bbb4dabfc629e61a8989d"

};


const app = initializeApp(firebaseConfig);


// Components
import Row from "./components/Row/Row";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";

import requests from "./requests";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Raterd" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
