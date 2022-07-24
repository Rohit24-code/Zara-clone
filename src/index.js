import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Appcontextprovider } from './Context/AppContext';
import { SingleContextProvider } from './Context/singleContext';
import { AuthContextProvider } from './Context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <AuthContextProvider>
    <SingleContextProvider>
      <Appcontextprovider>
        <BrowserRouter>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </Appcontextprovider>
    </SingleContextProvider>
  </AuthContextProvider>
  // {/* </React.StrictMode> */}
);


reportWebVitals();
