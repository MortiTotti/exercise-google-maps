import React from 'react';
import { ToastContainer } from 'react-toastify';
import Home from "./home";
import 'Assets/styles';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
    <React.Fragment>
        <ToastContainer />
        <Home />
    </React.Fragment>
);

export default App;