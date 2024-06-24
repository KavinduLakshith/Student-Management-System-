import React from "react";
import "./programs.css";
import progam_1 from "../../assets/program-1.png";
import progam_2 from "../../assets/program-2.png";
import progam_3 from "../../assets/program-3.png";
import progam_icon_1 from "../../assets/program-icon-1.png";
import progam_icon_2 from "../../assets/program-icon-2.png";
import progam_icon_3 from "../../assets/program-icon-3.png";

const programs = () => {
    return (
        <div className="programs">
            <div className="program">
                <img src={progam_1} alt="" />
                <div className="caption">
                    <img src={progam_icon_1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={progam_2} alt="" />
                <div className="caption">
                    <img src={progam_icon_2} alt="" />
                    <p>Master Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={progam_3} alt="" />
                <div className="caption">
                    <img src={progam_icon_3} alt="" />
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
    );
};

export default programs;
