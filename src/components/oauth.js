import React, {useState, useEffect} from "react";
import countriesList from "./countries";

function Account(props){

    const [view, setView] = useState("numview");

    return (
        <div className="oauth-view rel">
            <h1 className="fonts18 fontb">تسجيل الدخول</h1>
            <h1 className="fonts15 fontn">ادخل رقم جوالك وسوف نرسل لك رمز التحقق لمرة واحدة</h1>

            <select className="input-dial fonts15 fontb">
                {
                    countriesList.map(e => {
                        return (
                            <option value={e.dial_code}>{e.name}</option>
                        )
                    })
                }
            </select>
        </div>

    )
}