import React from "react";
import * as ReactDomClient from 'react-dom/client';
import App from "./App";
import './main.css';

const app = ReactDomClient.createRoot(document.getElementById('app'));

app.render(<App />)