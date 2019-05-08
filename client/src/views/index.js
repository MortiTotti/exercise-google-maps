import React from 'react';
import { ToastContainer } from 'react-toastify';
import MainRoutes from "Routes/Main-Routes";
import 'Assets/styles';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
    <React.Fragment>
        <ToastContainer />
        <MainRoutes />
    </React.Fragment>
);

export default App;