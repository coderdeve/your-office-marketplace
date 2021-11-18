import React, { useState } from "react";
import Logo from "../images/your-office-logo.png";

import {
    NavLink,
} from "react-router-dom";

function Sidebar() {

    const [nav, setNav] = useState([
        {Lable: "الرئيسية", slug: "/", icon: "icon-home1"},
        {Lable: "اكتشف", slug: "discover", icon: "icon-th-list"},
        {Lable: "الاقسام", slug: "categories", icon: "icon-price-tag"},
        {Lable: "مشاريعي", slug: "my-projects", icon: "icon-briefcase"}
    ])

    const [currentPage, setCurrentPage] = useState("/");

    var navigation = [];
    for(let i = 0; i < nav.length; i++){
        navigation.push(
            <li key={"nav-" + i + "-" + nav[i].slug}>
                <NavLink to={nav[i].slug} className={"aic link no_ul flex color333"}>
                    <div className={"ico fonts20 " + nav[i].icon} />
                    <h2 className="label fonts20">{nav[i].Lable}</h2>
                </NavLink>
            </li>
        );
    }

    return (
        <div className="sidebar rel">
            <a href="#" className="logo block">
                <img src={Logo} className="block" />
            </a>

            <ul className="nav">
                {navigation}
            </ul>

            <div className="updated-project flex aic">
                <div className="icon-feed1 colorfff fonts24 ico" />
                <div className="label fonts15 fontb color333">
                    مشاريع محدثة
                    <h2 className="freelancer fonts13 color777">بواسطة جلال النهاري</h2>
                </div>
            </div>

            <div className="stats aic flex">
                
                <div className="stats-box flex">
                    <div className="ico ico-shield fonts24 icon-shield1" />
                    <h2 className="value fonts15 color333">30</h2>
                    <h2 className="label fonts13 color777">المشاريع المنجزة</h2>
                </div>

                <div className="stats-box flex">
                    <div className="ico ico-battery fonts24 icon-battery-3" />
                    <h2 className="value fonts15 color333">63.3%</h2>
                    <h2 className="label fonts13 color777">مشاريع قيد التنفيذ</h2>
                </div>

            </div>

            <div className="me flex aic">
                <div className="photo colorfff fonts24">
                    <img src="http://placeimg.com/100/100/people" className="block"/>
                </div>
                <div className="label fonts15 fontb color333">
                    م.عبد الرحمن علاء
                    <h2 className="yourname fonts13 color777">@AbdulrahmanAlaa</h2>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;