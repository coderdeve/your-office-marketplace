import React, { useState } from "react";
import Project2 from "../images/project-2.png";
import Project3 from "../images/project-3.png";
import Project4 from "../images/project-4.png";
import Offer from "../images/offer.png";

function Leftbar() {

    const [popularProject, setPopularProject] = useState([
        {
            ID: 1,
            title: "برمجة واجهات ويب بتقنية الرياكت",
            freelancer: {
                ID: 1,
                name: "م.علاء عبد الرحمن",
                username: "@AbdulrahmanAlaa",
                dp: "http://placeimg.com/100/100/people?freelancer-" + 1,
            },
            duration: "15 يوم",
            poster: Project2
        },
        {
            ID: 2,
            title: "برمجة تطبيقات بفلاتر",
            freelancer: {
                ID: 2,
                name: "عبد الرحمن السري",
                username: "@Alserri",
                dp: "http://placeimg.com/100/100/people?freelancer-" + 2,
            },
            duration: "10 ايام",
            poster: Project3
        },
        {
            ID: 3,
            title: "برمجة نظام اودو",
            freelancer: {
                ID: 3,
                name: "ياسر غلام",
                username: "@ValorYasir",
                dp: "http://placeimg.com/100/100/people?freelancer-" + 3,
            },
            duration: "15 يوم",
            poster: Project4
        }
    ]);

    // Popular Projects List
    var projectList = [];
    for (let i = 0; i < popularProject.length; i++) {
        projectList.push(
            <a href="#" className="project rel" key={"popular-project-" + i}>
                <div className="block rel" style={{
                    background: "#e2e2e2 url(" + popularProject[i].poster +") no-repeat center"
                }}>

                    <div className="user abs aic flex">
                        <div className="pic">
                            <img src={popularProject[i].freelancer.dp} className="block" />
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
            </a>
        );
    }

    return (
        <div className="leftbar rel">

            <div className="section rel">
                <h2 className="title fonts24 fontb">بحث <span className="fontn">متقدم</span></h2>
                <div className="search-box rel flex">
                    <input type="text" placeholder="اكتب ما تريد ان تبحث عنه..." className="query fonts15 fontb"/>
                    <button className="find colorfff fonts15 fontb">ابحث</button>
                </div>
            </div>

            <div className="section section-b rel">
                <div className="projects rel flex">
                    <div className="project-a">
                        {projectList[0]}
                    </div>
                    <div className="flex columns">
                        {projectList[1]}
                        {projectList[2]}
                    </div>
                </div>
            </div>

            <div className="section section-b rel">
                <h2 className="title fonts24 fontb">عرض <span className="fontn">خاص</span></h2>
                <div className="special-offer rel flex">
                    <div className="meta rel">
                        <h2 className="h1 fonts20 fontb">خصم على الاشتراك الذهبي</h2>
                        <h2 className="h2 fonts14 fontb">احصل عليه قبل نهاية 11/2021</h2>
                        <button className="fonts15 fontb">لمعرفة المزيد</button>
                    </div>
                    <div className="vector rel">
                        <img src={Offer} />
                    </div>
                    <div className="ring abs" />
                </div>
            </div>

        </div>
    )
}

export default Leftbar;