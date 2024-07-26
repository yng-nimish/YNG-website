import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

//Header and Footer Partials
//import Header from "./components/partial/Header";
//import Footer from './components/partial/Footer';

//Content Pages
//import Book from "./components/Book";
import About from "./Components/pages/about";
//import ContactUs from './components/ContactUs';
import Home from "./Components/pages/home";
//import Purchase from './components/Purchase';
//import ApplicationDownloads from "./components/ApplicationDownloads";
//import TechnicalPapers from './components/TechnicalPapers';
//import Partners from './components/Partners';

export default class ReactRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
