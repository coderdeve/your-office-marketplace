import React, {useState, useEffect} from "react";
import countriesList from "../components/countries";
import Numericinput from "../components/Numericinput";
import Cover from "../components/cover";

function AccountPage(props){

    const [view, setView] = useState("numview");
    const [loading, setLoading] = useState(false);

    return (
        <div className="oauth-view rel">

            {loading == true && <Cover />}

            <h1 className="fonts50 oauth-title fontb">تسجيل الدخول</h1>
            <h1 className="fonts24 oauth-line fontn">ادخل رقم جوالك وسوف نرسل لك رمز التحقق لمرة واحدة</h1>

            <select defaultValue={"+966"} className="input-dial fonts24 fontb">
                {
                    countriesList.map(e => {
                        return (
                            <option value={e.dial_code}>{e.name} ({e.dial_code})</option>
                        )
                    })
                }
            </select>

            <Numericinput placeholder="57 004 2580" className="input-dial fonts24 fontb" />

            <button className="button fonts24 fontb colorfff">استمر</button>

        </div>

    )
}

export default AccountPage;