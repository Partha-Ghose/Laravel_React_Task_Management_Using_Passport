import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Footer from './pages/Footer';
import Header from './pages/Header';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProjectLists from './pages/projects/ProjectLists';
import ProjectCreate from './pages/projects/ProjectCreate';
import ProjectView from './pages/projects/ProjectView';
import { publicUrl } from './constant';
import Register from './Auth/Register';
import Login from './Auth/Login';
import { checkIfAuthenticate } from './services/AuthService';
import { AuthenticatedRoutes } from './AuthenticatedRoutes';

function App() {
    const [user, setUser] = useState({});
    const [isLoggIn, setIsLoggIn] = useState(false);
    useEffect(()=>{
        // checkIfAuthenticate();
        const checkAuth = checkIfAuthenticate();
        console.log('checkAuth ', checkAuth);
        if(checkAuth){
            console.log('vvvvvvvv');
            setUser(checkAuth);
            setIsLoggIn(true);
            // return true;
            // console.log('auth data is ', checkAuth);
        }
        // console.log('no data', user);
    }, [])
    return (
        <>
            <BrowserRouter>
                <Header user={user} isLoggIn={isLoggIn} />
                <div className="container p-4">
                    <Routes>
                        <Route exact path={`${publicUrl}`} element={<Home/>} />
                        <Route exact path={`${publicUrl}about`} element={<About/>} />
                        <Route exact path={`${publicUrl}contact`} element={<Contact/>} />
                        <Route exact path={`${publicUrl}register`} element={<Register/>} />
                        <Route exact path={`${publicUrl}login`} element={<Login/>} />

                        
                        <Route exact path={`${publicUrl}projects`} element={<AuthenticatedRoutes isLoggIn={isLoggIn}><ProjectLists/></AuthenticatedRoutes>} />
                        <Route exact path={`${publicUrl}projects/view/:id`} element={<ProjectView/>} />
                        <Route exact path={`${publicUrl}projects/create`} element={<ProjectCreate/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        <Footer />
        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
