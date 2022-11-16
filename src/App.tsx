import React from 'react';
import './App.scss';
import Header from "./Components/Header/Header";
import Musics from "./Components/Musics/Musics";
import Posts from "./Components/Posts/Posts";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <div className="App">
        {
          /*  <Header/>
            <Posts/>
            <Musics/>*/
        }
    <Menu/>
    </div>
  );
}

export default App;

