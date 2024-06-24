import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="container">
                <Title subTitle="Our PROGRAM" title="What We offer" />
                <Programs />
                <About />
                <Title subTitle="Galary" title="Campus photos" />
                <Campus />
                <Title subTitle="TESTIMONIALS" title="What Student Says" />
                <Testimonials />
            </div>
        </div>
    );
};

export default App;
