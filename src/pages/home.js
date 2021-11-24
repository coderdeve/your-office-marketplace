import React, { useEffect, useState } from "react";
import Project1 from "../images/project-1.jpg";
import Project5 from "../images/project-5.jpg";

import {
    NavLink,
} from "react-router-dom";

function HomePage() {

    useEffect(() => {
        document.title = "مكتبك - دع العالم يشاهد ابداعك";
    })

    const [popularProject, setPopularProject] = useState([
        {
            ID: 1,
            title: "تجهيز و تهيئة سيرفرات سحابية على امازون",
            freelancer: {
                ID: 1,
                name: "ياسر غلام",
                username: "@ValorYasir",
                dp: "http://placeimg.com/100/100/people?freelancer-" + 1,
            },
            duration: "3 ايام",
            poster: Project1
        },
        {
            ID: 2,
            title: "برمجة واجهات ويب بتقنية البوتستراب",
            freelancer: {
                ID: 2,
                name: "م.علاء عبد الرحمن",
                username: "@AbdulrahmanAlaa",
                dp: "http://placeimg.com/100/100/people?freelancer-" + 2,
            },
            duration: "4 ايام",
            poster: Project5
        }
    ]);

    const [topFreelanceres, setTopFreelanceres] = useState([
        {
            ID: 1,
            name: "م.عبد الرحمن علاء",
            username: "@AbdulrahmanAlaa",
            dp: "http://placeimg.com/100/100/people?freelanceres-" + 1,
        },
        {
            ID: 2,
            name: "م.احمد حاتم",
            username: "@AhmedHatem",
            dp: "http://placeimg.com/100/100/people?freelanceres-" + 2,
        },
        {
            ID: 3,
            name: "م.بيتر",
            username: "@Petter",
            dp: "http://placeimg.com/100/100/people?freelanceres-" + 3,
        },
        {
            ID: 4,
            name: "م.عائشة",
            username: "@Aisha",
            dp: "http://placeimg.com/100/100/people?freelanceres-" + 4,
        },
        {
            ID: 5,
            name: "ياسر غلام",
            username: "@ValorYasir",
            dp: "http://placeimg.com/100/100/people?freelanceres-" + 5,
        },
        {
            ID: 6,
            name: "عبد الرحمن السري",
            username: "@Alserri",
            dp: "http://placeimg.com/100/100/people?freelanceres-" + 6,
        }
    ]);

    // Live Freelancers List
    var freelancerList = [];
    for (let i = 0; i < 8; i++) {
        freelancerList.push(
            <button className="freelancer rel" key={"freelancer-live-" + i}>
                <img src={"http://placeimg.com/100/100/people?" + i} className="block" />
            </button>
        );
    }

    // Popular Projects List in week
    var projectList = [];
    for (let i = 0; i < popularProject.length; i++) {
        projectList.push(
            <NavLink to={"/project/" + popularProject[i].ID} className="project rel" key={"popular-project-" + i}>
                <div className="block rel" style={{
                    background: "#e2e2e2 url(" + popularProject[i].poster + ") no-repeat center"
                }}>

                    <div className="user abs aic flex">
                        <div className="pic">
                            <img src={popularProject[i].freelancer.dp} className="bl" />
                        </div>
                        <div className="meta rel">
                            <h2 className="fonts15 name fontb colorfff">{popularProject[i].freelancer.name}</h2>
                            <h2 className="fonts13 username fontn colorfff">{popularProject[i].freelancer.username}</h2>
                        </div>
                    </div>

                    <div className="duration abs">
                        <h2 className="fonts13 name fontb colorfff">{popularProject[i].duration}</h2>
                    </div>

                    <div className="project-title abs">
                        <h2 className="fonts15 name fontb colorfff">{popularProject[i].title}</h2>
                    </div>

                </div>
            </NavLink>
        );
    }

    // Top Freelanceres List
    var topFreelanceresList = [];
    for (let i = 0; i < topFreelanceres.length; i++) {
        topFreelanceresList.push(
            <a href="#" className="user-block rel no_ul" key={"top-freelanceres-" + i}>
                <div className="user aic flex">
                    <div className="pic">
                        <img src={topFreelanceres[i].dp} className="bl" />
                    </div>
                    <div className="meta rel">
                        <h2 className="fonts15 name fontb color333">{topFreelanceres[i].name}</h2>
                        <h2 className="fonts13 username fontn color333">{topFreelanceres[i].username}</h2>
                    </div>
                </div>
            </a>
        );
    }

    return (
        <div className="home-page rel">

            {/* Freelanceres Live Now */}
            <div className="section rel">
                <h2 className="title fonts24 fontb">المتواجدون <span className="fontn">الآن</span></h2>
                <div className="freelanceres rel flex">
                    {freelancerList}
                </div>
            </div>

            {/* Popular Projects */}
            <div className="section section-b rel">
                <h2 className="title fonts24 fontb">المشاريع الاكثر شعبية <span className="fontn">هذا الاسبوع</span></h2>
                <div className="projects rel flex">
                    {projectList}
                </div>
            </div>

            {/* Top Freelanceres */}
            <div className="section section-b rel">
                <h2 className="title fonts24 fontb">افضل <span className="fontn">منفذي المشاريع</span></h2>
                <div className="top-freelanceres rel flex">
                    {topFreelanceresList}
                </div>
            </div>

        </div>
    )
}

export default HomePage;