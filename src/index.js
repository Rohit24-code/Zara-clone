import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Appcontextprovider } from './Context/AppContext';
import { SingleContextProvider } from './Context/singleContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SingleContextProvider>
      <Appcontextprovider>
        <BrowserRouter>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </Appcontextprovider>
    </SingleContextProvider>
  </React.StrictMode>
);


reportWebVitals();
