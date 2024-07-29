// App.js
import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/navbar";
import home from "./Components/pages/home";
import about from "./Components/pages/about";
import partners from "./Components/pages/partners";
import technical_papers from "./Components/pages/technical_papers";
import book from "./Components/pages/book";
import login from "./Components/pages/login";
import contact from "./Components/pages/contact";
import applications from "./Components/pages/applications";
import Footer from "./Components/footer";
import career from "./Components/pages/career";
import guarantee from "./Components/pages/guarantee";
import purchase from "./Components/pages/purchase";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/home" exact component={home} />
            <Route path="/about" component={about} />
            <Route path="/partners" exact component={partners} />
            <Route path="/technical_papers" component={technical_papers} />
            <Route path="/applications" exact component={applications} />
            <Route path="/book" component={book} />
            <Route path="/contact" exact component={contact} />
            <Route path="/login" component={login} />
            <Route path="/career" component={career} />
            <Route path="/guarantee" component={guarantee} />
            <Route path="/purchase" component={purchase} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
