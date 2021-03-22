import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className="s.app-wrapper-content">
                    <Route path="/profile" render={ () => <Profile state={props.state.profilePage}
                                                                   store={props.store}
                                                                   dispatch={props.dispatch}/>}  />
                    <Route path="/dialogs" render={ () => <Dialogs state={props.state.messagesPage}
                                                                   store={props.store}
                                                                   dispatch={props.dispatch}/>}/>
                    <Route path="/news" render={ () => <News />}/>
                    <Route path="/music" render={ () => <Music />}/>
                    <Route path="/settings" render={ () => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;