import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Home from "./home";

const App = () => (
    <ToastProvider
        autoDismissTimeout={6000}
        placement="bottom-center"
    >
        <Home />
    </ToastProvider>
);

export default App;