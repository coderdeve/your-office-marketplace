import React, { useState, useEffect } from "react";
import countriesList from "../components/countries";
import Numericinput from "../components/Numericinput";
import Cover from "../components/cover";
import Hoopoe from "../hoopoe/functions";
import firebase from "../firebase";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const auth = getAuth();

function AccountPage() {

    const [view, setView] = useState("numview");
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState("sendcode");
    const [dialCode, setDialCode] = useState("+966");
    const [phone, setPhone] = useState(null);
    const [verificationCode, setVerificationCode] = useState(null);
    const [confirmationResult, setConfirmationResult] = useState(null);

    useEffect(()=>{
        window.recaptcha = new RecaptchaVerifier("captcha", {}, auth);
        window.recaptcha.render().then(widget => {
            window.authWidget = widget;
        });
    }, [])

    const signin = () => {
        if (phone == null) {
            Hoopoe.Toast.show({ html: "الرجاء ادخال رقم الجوال" });
        } else {
            setLoading(true);
            // Hoopoe.Toast.dismisAll();
            var appverifier = window.recaptcha,
                phoneNumber = dialCode + phone;
            signInWithPhoneNumber(auth, phoneNumber, appverifier)
                .then(confirmation => {
                    setConfirmationResult(confirmation);
                    setVerificationCode(null);
                    setOtp("verifyCode");
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                    switch (err.code) {
                        case "auth/invalid-phone-number":
                            Hoopoe.Toast.show({ html: "هذا الرقم غير صالح. الرجاء ادخال رقم جوال صالح..." });
                            break;
                        default:
                            Hoopoe.Toast.show({ html: "نحن غير قادرين على معالجة طلبك في هذا الوقت!" });
                    }
                });
        }
    }

    const verify = () => {
        if (verificationCode == null) {
            Hoopoe.Toast.show({ html: "الرجاء ادخال رمز التحقق" });
        } else {
            setLoading(true);
            confirmationResult.confirm(verificationCode)
                .then(result => {
                    console.log(("تم تسجيل الدخول..."));
                    setView("numview");
                    setLoading(false);
                    Hoopoe.Toast.show({ html: "تم تسجيل الدخول..." });
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                    Hoopoe.Toast.show({ html: "رمز التحقق غير صالح..." });
                });
        }
    }

    const sendCodeView = () => {
        return (
            <div className="oauth-view rel">

                {loading == true && <Cover />}

                <h1 className="fonts40 oauth-title fontb">تسجيل الدخول</h1>
                <h1 className="fonts18 oauth-line fontn">ادخل رقم جوالك وسوف نرسل لك رمز التحقق لمرة واحدة</h1>

                <select defaultValue={dialCode} onChange={e =>setDialCode(e.target.value == "" ? null : e.target.value)} className="input-dial fonts24 fontb">
                    {
                        countriesList.map(e => <option value={e.dial_code}>{e.name} ({e.dial_code})</option>)
                    }
                </select>

                <Numericinput defaultValue={phone} onChange={e =>setPhone(e.target.value == "" ? null : e.target.value)} placeholder="57 004 2580" className="input-dial fonts24 fontb" />

                <div className="phonesigner" id="captcha" />

                <button onClick={e=>signin()} className="button fonts24 fontb colorfff">استمر</button>

            </div>

        )
    }

    const verifyCodeView = () => {
        return (
            <div className="oauth-view oauth-view-verify rel">

                {loading == true && <Cover />}

                <h1 className="fonts40 oauth-title fontb">تحقق من رقم الجوال</h1>
                <h1 className="fonts18 oauth-line fontn">أدخل رمز التحقق المرسل إلى <span className="oauth-line-phone fontb">{dialCode + phone}</span></h1>

                <Numericinput defaultValue={verificationCode} onChange={e =>setVerificationCode(e.target.value == "" ? null : e.target.value)} placeholder="XXXXXX" className="input-dial fonts24 fontb" />

                <button onClick={e=>verify()} className="button fonts24 fontb colorfff">استمر</button>

            </div>
        )
    }

    return (
        otp == "sendcode" ? sendCodeView() : verifyCodeView()
    )

}

export default AccountPage;