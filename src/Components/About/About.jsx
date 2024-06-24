import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="about_img" className="about_img" />
                <img src={play_icon} alt="play_icon" className="play_icon" />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing tomarow's Leaders Today</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae tempore! Placeat, quidem, aliquam
                    repellat maiores enim recusandae ullam tempore sint veniam impedit, porro eveniet.
                </p>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, cumque ut? Suscipit, atque totam.
                    Ullam saepe, ducimus similique perferendis animi possimus totam est impedit ut.
                </p>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur pariatur quasi impedit nostrum sed
                    provident, voluptates ullam deserunt a molestias quod cum nisi dignissimos voluptatibus?
                </p>
            </div>
        </div>
    );
};

export default About;
