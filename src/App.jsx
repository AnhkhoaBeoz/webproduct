import React from 'react';
import './App.scss'
import Navbar from "./components/Navbar/Navbar.jsx";
import Routing from "./Router/Routing.jsx";
import Loading from "./components/Loading/Loading.jsx";


function App() {

    return (
        <div className="app">
            <Navbar/>
            <main>
                <Routing/>
            </main>

        </div>
    );
}

export default App;