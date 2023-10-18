import React from "react";
import './style/main.scss';
import RoutesPath from "../src/routes/RoutesPath";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";


function App() {
    return (
       <BrowserRouter> 
       <Layout> <div className="App"><RoutesPath/></div> </Layout>
    
             
        </BrowserRouter> 

    );
}

export default App;
