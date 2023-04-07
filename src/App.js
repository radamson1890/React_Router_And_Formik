import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Pages/Layout';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import NoPage from './Pages/NoPage/NoPage';
import Signup from './Pages/Signup/Signup';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                  <Route index element={<Home />} />
                  <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="signup" element={<Signup />} />
                  <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
        )
}

export default App;
