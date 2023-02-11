
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';

import { Center, VStack, Link, Box } from '@chakra-ui/react';
import { Head } from "../pages/Home"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Home2 } from "../pages/dashboard"



const App = (): JSX.Element => (
  <Router>
    <Routes>
      <Route path="/" element={<Head />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home2 />} />
    </Routes>
  </Router >
);

export default App;