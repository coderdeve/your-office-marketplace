import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";
import Logo from "./images/your-office-logo.png";

import "./css/fonts.css";
import "./css/props.css";
import "./css/App.css";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

//Components
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import HomePage from "./pages/home";
import Leftbar from "./components/leftbar";
import ProjectPage from "./pages/project";
import DiscoverPage from './pages/discover';
import CategoriesPage from './pages/categories';
import MyProjectsPage from './pages/myprojects';
import AccountPage from './pages/oauth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
global.fire = {
    ID: null
};
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMmgYArLySghpJDfknGE4q0DI_-20PWJE",
    authDomain: "your-office-project.firebaseapp.com",
    projectId: "your-office-project",
    storageBucket: "your-office-project.appspot.com",
    messagingSenderId: "948045103656",
    appId: "1:948045103656:web:44406ccc82048abdbe6b1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function AppLoader() {

    const [isFirebaseUser, setIsFirebaseUser] = useState(false);

    const initFirebase = async (context) => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("تم تسجيل دخولك ...")
                setIsFirebaseUser(true);
            } else {
                console.log("انت زائر");
                setIsFirebaseUser(false);
                setTimeout(() => {
                    context.setAppLoaded(true);
                }, 1000);
            }
        });
    }

    const splash = (context) => {
        return (
            <div className="App flex">
                <div className="splash abs abc">
                    <img src={Logo} className="block" />
                </div>
            </div>
        )
    }

    const loadApp = async (context) => {
        await initFirebase(context);
    }

    return (
        <AppContext.Consumer>
            {
                context => {
                    return (
                        context.appLoaded() ?
                            <div className="App flex">
                                <HashRouter>
                                    <Sidebar />
                                    <div className="app-content">
                                        <Route exact path="/" component={HomePage} />
                                        <Route path="/project/:projectid" component={ProjectPage} />
                                        <Route path="/discover" component={DiscoverPage} />
                                        <Route path="/categories" component={CategoriesPage} />
                                        <Route path="/my-projects" component={MyProjectsPage} />
                                        <Route path="/oauth" component={AccountPage} />
                                    </div>
                                    <Leftbar />
                                </HashRouter>
                            </div>
                            :
                            <AppContext.Consumer>
                                {
                                    context => {
                                        loadApp(context);
                                        return (splash(context))
                                    }
                                }
                            </AppContext.Consumer>
                    )
                }
            }
        </AppContext.Consumer>
    )
}