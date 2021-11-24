const countriesList = [
    {
        "name": "افغانستان",
        "dial_code": "+93",
        "code": "AF"
    },
    {
        "name": "جزر آلاند",
        "dial_code": "+358",
        "code": "AX"
    },
    {
        "name": "ألبانيا",
        "dial_code": "+355",
        "code": "AL"
    },
    {
        "name": "الجزائر",
        "dial_code": "+213",
        "code": "DZ"
    },
    {
        "name": "ساموا الامريكية",
        "dial_code": "+1684",
        "code": "AS"
    },
    {
        "name": "اندورا",
        "dial_code": "+376",
        "code": "AD"
    },
    {
        "name": "انغولا",
        "dial_code": "+244",
        "code": "AO"
    },
    {
        "name": "انغيلا",
        "dial_code": "+1264",
        "code": "AI"
    },
    {
        "name": "انتاركتيكا",
        "dial_code": "+672",
        "code": "AQ"
    },
    {
        "name": "انتيغوا وبربودا",
        "dial_code": "+1268",
        "code": "AG"
    },
    {
        "name": "الارجنتين",
        "dial_code": "+54",
        "code": "AR"
    },
    {
        "name": "ارمينا",
        "dial_code": "+374",
        "code": "AM"
    },
    {
        "name": "اروبا",
        "dial_code": "+297",
        "code": "AW"
    },
    {
        "name": "استراليا",
        "dial_code": "+61",
        "code": "AU"
    },
    {
        "name": "النمسا",
        "dial_code": "+43",
        "code": "AT"
    },
    {
        "name": "اذربيجان",
        "dial_code": "+994",
        "code": "AZ"
    },
    {
        "name": "جزر البهاما",
        "dial_code": "+1242",
        "code": "BS"
    },
    {
        "name": "البحرين",
        "dial_code": "+973",
        "code": "BH"
    },
    {
        "name": "نغلاديش",
        "dial_code": "+880",
        "code": "BD"
    },
    {
        "name": "بربادوس",
        "dial_code": "+1246",
        "code": "BB"
    },
    {
        "name": "بلاروسيا",
        "dial_code": "+375",
        "code": "BY"
    },
    {
        "name": "بلجيكا",
        "dial_code": "+32",
        "code": "BE"
    },
    {
        "name": "بليز",
        "dial_code": "+501",
        "code": "BZ"
    },
    {
        "name": "بنين",
        "dial_code": "+229",
        "code": "BJ"
    },
    {
        "name": "برمودا",
        "dial_code": "+1441",
        "code": "BM"
    },
    {
        "name": "بوتان",
        "dial_code": "+975",
        "code": "BT"
    },
    {
        "name": "بوليفيا",
        "dial_code": "+591",
        "code": "BO"
    },
    {
        "name": "البوسنة و الهرسك",
        "dial_code": "+387",
        "code": "BA"
    },
    {
        "name": "بوتسوانا",
        "dial_code": "+267",
        "code": "BW"
    },
    {
        "name": "البرازيل",
        "dial_code": "+55",
        "code": "BR"
    },
    {
        "name": "إقليم المحيط البريطاني الهندي",
        "dial_code": "+246",
        "code": "IO"
    },
    {
        "name": "بروناي دار السلام",
        "dial_code": "+673",
        "code": "BN"
    },
    {
        "name": "بلغاريا",
        "dial_code": "+359",
        "code": "BG"
    },
    {
        "name": "بوركينا فاسو",
        "dial_code": "+226",
        "code": "BF"
    },
    {
        "name": "بوروندي",
        "dial_code": "+257",
        "code": "BI"
    },
    {
        "name": "كمبوديا",
        "dial_code": "+855",
        "code": "KH"
    },
    {
        "name": "الكاميرون",
        "dial_code": "+237",
        "code": "CM"
    },
    {
        "name": "كندا",
        "dial_code": "+1",
        "code": "CA"
    },
    {
        "name": "الرأس الأخضر",
        "dial_code": "+238",
        "code": "CV"
    },
    {
        "name": "جزر كايمان",
        "dial_code": "+ 345",
        "code": "KY"
    },
    {
        "name": "جمهورية افريقيا الوسطى",
        "dial_code": "+236",
        "code": "CF"
    },
    {
        "name": "تشاد",
        "dial_code": "+235",
        "code": "TD"
    },
    {
        "name": "تشيلي",
        "dial_code": "+56",
        "code": "CL"
    },
    {
        "name": "الصين",
        "dial_code": "+86",
        "code": "CN"
    },
    {
        "name": "جزيرة الكريسماس",
        "dial_code": "+61",
        "code": "CX"
    },
    {
        "name": "جزر كوكوس (كيلينغ)",
        "dial_code": "+61",
        "code": "CC"
    },
    {
        "name": "كولومبيا",
        "dial_code": "+57",
        "code": "CO"
    },
    {
        "name": "جزر القمر",
        "dial_code": "+269",
        "code": "KM"
    },
    {
        "name": "الكونغو",
        "dial_code": "+242",
        "code": "CG"
    },
    {
        "name": "جمهورية الكونغو الديمقراطية",
        "dial_code": "+243",
        "code": "CD"
    },
    {
        "name": "جزر كوك",
        "dial_code": "+682",
        "code": "CK"
    },
    {
        "name": "كوستا ريكا",
        "dial_code": "+506",
        "code": "CR"
    },
    {
        "name": "ساحل العاج",
        "dial_code": "+225",
        "code": "CI"
    },
    {
        "name": "كرواتيا",
        "dial_code": "+385",
        "code": "HR"
    },
    {
        "name": "كوبا",
        "dial_code": "+53",
        "code": "CU"
    },
    {
        "name": "قبرص",
        "dial_code": "+357",
        "code": "CY"
    },
    {
        "name": "جمهورية التشيك",
        "dial_code": "+420",
        "code": "CZ"
    },
    {
        "name": "الدنمارك",
        "dial_code": "+45",
        "code": "DK"
    },
    {
        "name": "جيبوتي",
        "dial_code": "+253",
        "code": "DJ"
    },
    {
        "name": "دومينيكا",
        "dial_code": "+1767",
        "code": "DM"
    },
    {
        "name": "جمهورية الدومينيكان",
        "dial_code": "+1849",
        "code": "DO"
    },
    {
        "name": "الاكوادور",
        "dial_code": "+593",
        "code": "EC"
    },
    {
        "name": "مصر",
        "dial_code": "+20",
        "code": "EG"
    },
    {
        "name": "السلفادور",
        "dial_code": "+503",
        "code": "SV"
    },
    {
        "name": "غينيا الإستوائية",
        "dial_code": "+240",
        "code": "GQ"
    },
    {
        "name": "إريتريا",
        "dial_code": "+291",
        "code": "ER"
    },
    {
        "name": "إستونيا",
        "dial_code": "+372",
        "code": "EE"
    },
    {
        "name": "أثيوبيا",
        "dial_code": "+251",
        "code": "ET"
    },
    {
        "name": "جزر فوكلاند (مالفيناس)",
        "dial_code": "+500",
        "code": "FK"
    },
    {
        "name": "جزر فاروس",
        "dial_code": "+298",
        "code": "FO"
    },
    {
        "name": "فيجي",
        "dial_code": "+679",
        "code": "FJ"
    },
    {
        "name": "فنلندا",
        "dial_code": "+358",
        "code": "FI"
    },
    {
        "name": "فرنسا",
        "dial_code": "+33",
        "code": "FR"
    },
    {
        "name": "غيانا الفرنسية",
        "dial_code": "+594",
        "code": "GF"
    },
    {
        "name": "بولينيزيا الفرنسية",
        "dial_code": "+689",
        "code": "PF"
    },
    {
        "name": "الجابون",
        "dial_code": "+241",
        "code": "GA"
    },
    {
        "name": "غامبيا",
        "dial_code": "+220",
        "code": "GM"
    },
    {
        "name": "جورجيا",
        "dial_code": "+995",
        "code": "GE"
    },
    {
        "name": "ألمانيا",
        "dial_code": "+49",
        "code": "DE"
    },
    {
        "name": "غانا",
        "dial_code": "+233",
        "code": "GH"
    },
    {
        "name": "جبل طارق",
        "dial_code": "+350",
        "code": "GI"
    },
    {
        "name": "اليونان",
        "dial_code": "+30",
        "code": "GR"
    },
    {
        "name": "الأرض الخضراء",
        "dial_code": "+299",
        "code": "GL"
    },
    {
        "name": "غرينادا",
        "dial_code": "+1473",
        "code": "GD"
    },
    {
        "name": "جوادلوب",
        "dial_code": "+590",
        "code": "GP"
    },
    {
        "name": "غوام",
        "dial_code": "+1671",
        "code": "GU"
    },
    {
        "name": "غواتيمالا",
        "dial_code": "+502",
        "code": "GT"
    },
    {
        "name": "غيرنسي",
        "dial_code": "+44",
        "code": "GG"
    },
    {
        "name": "غينيا",
        "dial_code": "+224",
        "code": "GN"
    },
    {
        "name": "غينيا بيساو",
        "dial_code": "+245",
        "code": "GW"
    },
    {
        "name": "غيانا",
        "dial_code": "+595",
        "code": "GY"
    },
    {
        "name": "هايتي",
        "dial_code": "+509",
        "code": "HT"
    },
    {
        "name": "دولة الفاتيكان",
        "dial_code": "+379",
        "code": "VA"
    },
    {
        "name": "هندوراس",
        "dial_code": "+504",
        "code": "HN"
    },
    {
        "name": "هونج كونج",
        "dial_code": "+852",
        "code": "HK"
    },
    {
        "name": "هنغاريا",
        "dial_code": "+36",
        "code": "HU"
    },
    {
        "name": "أيسلندا",
        "dial_code": "+354",
        "code": "IS"
    },
    {
        "name": "الهند",
        "dial_code": "+91",
        "code": "IN"
    },
    {
        "name": "إندونيسيا",
        "dial_code": "+62",
        "code": "ID"
    },
    {
        "name": "إيران",
        "dial_code": "+98",
        "code": "IR"
    },
    {
        "name": "العراق",
        "dial_code": "+964",
        "code": "IQ"
    },
    {
        "name": "أيرلندا",
        "dial_code": "+353",
        "code": "IE"
    },
    {
        "name": "جزيرة آيل أوف مان",
        "dial_code": "+44",
        "code": "IM"
    },
    {
        "name": "إسرائيل",
        "dial_code": "+972",
        "code": "IL"
    },
    {
        "name": "إيطاليا",
        "dial_code": "+39",
        "code": "IT"
    },
    {
        "name": "جامايكا",
        "dial_code": "+1876",
        "code": "JM"
    },
    {
        "name": "اليابان",
        "dial_code": "+81",
        "code": "JP"
    },
    {
        "name": "جيرسي",
        "dial_code": "+44",
        "code": "JE"
    },
    {
        "name": "الأردن",
        "dial_code": "+962",
        "code": "JO"
    },
    {
        "name": "كازاخستان",
        "dial_code": "+77",
        "code": "KZ"
    },
    {
        "name": "كينيا",
        "dial_code": "+254",
        "code": "KE"
    },
    {
        "name": "كيريباتي",
        "dial_code": "+686",
        "code": "KI"
    },
    {
        "name": "كوريا الشمالية",
        "dial_code": "+850",
        "code": "KP"
    },
    {
        "name": "كوريا الجنوبية",
        "dial_code": "+82",
        "code": "KR"
    },
    {
        "name": "الكويت",
        "dial_code": "+965",
        "code": "KW"
    },
    {
        "name": "قيرغيزستان",
        "dial_code": "+996",
        "code": "KG"
    },
    {
        "name": "لاوس",
        "dial_code": "+856",
        "code": "LA"
    },
    {
        "name": "لاتفيا",
        "dial_code": "+371",
        "code": "LV"
    },
    {
        "name": "لبنان",
        "dial_code": "+961",
        "code": "LB"
    },
    {
        "name": "ليسوتو",
        "dial_code": "+266",
        "code": "LS"
    },
    {
        "name": "ليبيريا",
        "dial_code": "+231",
        "code": "LR"
    },
    {
        "name": "ليبيا",
        "dial_code": "+218",
        "code": "LY"
    },
    {
        "name": "ليختنشتاين",
        "dial_code": "+423",
        "code": "LI"
    },
    {
        "name": "ليتوانيا",
        "dial_code": "+370",
        "code": "LT"
    },
    {
        "name": "لوكسمبورغ",
        "dial_code": "+352",
        "code": "LU"
    },
    {
        "name": "ماكاو",
        "dial_code": "+853",
        "code": "MO"
    },
    {
        "name": "مقدونيا",
        "dial_code": "+389",
        "code": "MK"
    },
    {
        "name": "مدغشقر",
        "dial_code": "+261",
        "code": "MG"
    },
    {
        "name": "ملاوي",
        "dial_code": "+265",
        "code": "MW"
    },
    {
        "name": "ماليزيا",
        "dial_code": "+60",
        "code": "MY"
    },
    {
        "name": "جزر المالديف",
        "dial_code": "+960",
        "code": "MV"
    },
    {
        "name": "مالي",
        "dial_code": "+223",
        "code": "ML"
    },
    {
        "name": "مالطا",
        "dial_code": "+356",
        "code": "MT"
    },
    {
        "name": "جزر مارشال",
        "dial_code": "+692",
        "code": "MH"
    },
    {
        "name": "مارتينيك",
        "dial_code": "+596",
        "code": "MQ"
    },
    {
        "name": "موريتانيا",
        "dial_code": "+222",
        "code": "MR"
    },
    {
        "name": "موريشيوس",
        "dial_code": "+230",
        "code": "MU"
    },
    {
        "name": "مايوت",
        "dial_code": "+262",
        "code": "YT"
    },
    {
        "name": "المكسيك",
        "dial_code": "+52",
        "code": "MX"
    },
    {
        "name": "ولايات ميكرونيزيا الموحدة",
        "dial_code": "+691",
        "code": "FM"
    },
    {
        "name": "مولدوفا",
        "dial_code": "+373",
        "code": "MD"
    },
    {
        "name": "موناكو",
        "dial_code": "+377",
        "code": "MC"
    },
    {
        "name": "منغوليا",
        "dial_code": "+976",
        "code": "MN"
    },
    {
        "name": "الجبل الأسود",
        "dial_code": "+382",
        "code": "ME"
    },
    {
        "name": "مونتسيرات",
        "dial_code": "+1664",
        "code": "MS"
    },
    {
        "name": "المغرب",
        "dial_code": "+212",
        "code": "MA"
    },
    {
        "name": "موزمبيق",
        "dial_code": "+258",
        "code": "MZ"
    },
    {
        "name": "ميانمار",
        "dial_code": "+95",
        "code": "MM"
    },
    {
        "name": "ناميبيا",
        "dial_code": "+264",
        "code": "NA"
    },
    {
        "name": "ناورو",
        "dial_code": "+674",
        "code": "NR"
    },
    {
        "name": "نيبال",
        "dial_code": "+977",
        "code": "NP"
    },
    {
        "name": "هولندا",
        "dial_code": "+31",
        "code": "NL"
    },
    {
        "name": "جزر الأنتيل الهولندية",
        "dial_code": "+599",
        "code": "AN"
    },
    {
        "name": "كاليدونيا الجديدة",
        "dial_code": "+687",
        "code": "NC"
    },
    {
        "name": "نيوزيلاندا",
        "dial_code": "+64",
        "code": "NZ"
    },
    {
        "name": "نيكاراغوا",
        "dial_code": "+505",
        "code": "NI"
    },
    {
        "name": "النيجر",
        "dial_code": "+227",
        "code": "NE"
    },
    {
        "name": "نيجيريا",
        "dial_code": "+234",
        "code": "NG"
    },
    {
        "name": "نيوي",
        "dial_code": "+683",
        "code": "NU"
    },
    {
        "name": "جزيرة نورفولك",
        "dial_code": "+672",
        "code": "NF"
    },
    {
        "name": "جزر مريانا الشمالية",
        "dial_code": "+1670",
        "code": "MP"
    },
    {
        "name": "النرويج",
        "dial_code": "+47",
        "code": "NO"
    },
    {
        "name": "سلطنة عمان",
        "dial_code": "+968",
        "code": "OM"
    },
    {
        "name": "باكستان",
        "dial_code": "+92",
        "code": "PK"
    },
    {
        "name": "بالاو",
        "dial_code": "+680",
        "code": "PW"
    },
    {
        "name": "الأراضي الفلسطينية المحتلة",
        "dial_code": "+970",
        "code": "PS"
    },
    {
        "name": "بنما",
        "dial_code": "+507",
        "code": "PA"
    },
    {
        "name": "بابوا غينيا الجديدة",
        "dial_code": "+675",
        "code": "PG"
    },
    {
        "name": "باراغواي",
        "dial_code": "+595",
        "code": "PY"
    },
    {
        "name": "بيرو",
        "dial_code": "+51",
        "code": "PE"
    },
    {
        "name": "الفيلبين",
        "dial_code": "+63",
        "code": "PH"
    },
    {
        "name": "بيتكيرن",
        "dial_code": "+872",
        "code": "PN"
    },
    {
        "name": "بولندا",
        "dial_code": "+48",
        "code": "PL"
    },
    {
        "name": "البرتغال",
        "dial_code": "+351",
        "code": "PT"
    },
    {
        "name": "بورتوريكو",
        "dial_code": "+1939",
        "code": "PR"
    },
    {
        "name": "قطر",
        "dial_code": "+974",
        "code": "QA"
    },
    {
        "name": "رومانيا",
        "dial_code": "+40",
        "code": "RO"
    },
    {
        "name": "روسيا",
        "dial_code": "+7",
        "code": "RU"
    },
    {
        "name": "رواندا",
        "dial_code": "+250",
        "code": "RW"
    },
    {
        "name": "لاريونيون",
        "dial_code": "+262",
        "code": "RE"
    },
    {
        "name": "سانت بارتيليمي",
        "dial_code": "+590",
        "code": "BL"
    },
    {
        "name": "سانت هيلانة وأسنسيون وتريستان دا كونها",
        "dial_code": "+290",
        "code": "SH"
    },
    {
        "name": "سانت كيتس ونيفيس",
        "dial_code": "+1869",
        "code": "KN"
    },
    {
        "name": "سانت لوسيا",
        "dial_code": "+1758",
        "code": "LC"
    },
    {
        "name": "سانت مارتن",
        "dial_code": "+590",
        "code": "MF"
    },
    {
        "name": "سانت بيير وميكلون",
        "dial_code": "+508",
        "code": "PM"
    },
    {
        "name": "سانت فنسنت وجزر غرينادين",
        "dial_code": "+1784",
        "code": "VC"
    },
    {
        "name": "ساموا",
        "dial_code": "+685",
        "code": "WS"
    },
    {
        "name": "سان مارينو",
        "dial_code": "+378",
        "code": "SM"
    },
    {
        "name": "ساو تومي وبرينسيبي",
        "dial_code": "+239",
        "code": "ST"
    },
    {
        "name": "السعودية",
        "dial_code": "+966",
        "code": "SA"
    },
    {
        "name": "السنغال",
        "dial_code": "+221",
        "code": "SN"
    },
    {
        "name": "صربيا",
        "dial_code": "+381",
        "code": "RS"
    },
    {
        "name": "سيشيل",
        "dial_code": "+248",
        "code": "SC"
    },
    {
        "name": "سيرا ليون",
        "dial_code": "+232",
        "code": "SL"
    },
    {
        "name": "سنغافورة",
        "dial_code": "+65",
        "code": "SG"
    },
    {
        "name": "سلوفاكيا",
        "dial_code": "+421",
        "code": "SK"
    },
    {
        "name": "سلوفينيا",
        "dial_code": "+386",
        "code": "SI"
    },
    {
        "name": "جزر سليمان",
        "dial_code": "+677",
        "code": "SB"
    },
    {
        "name": "الصومال",
        "dial_code": "+252",
        "code": "SO"
    },
    {
        "name": "جنوب أفريقيا",
        "dial_code": "+27",
        "code": "ZA"
    },
    {
        "name": "جنوب السودان",
        "dial_code": "+211",
        "code": "SS"
    },
    {
        "name": "جورجيا الجنوبية وجزر ساندويتش الجنوبية",
        "dial_code": "+500",
        "code": "GS"
    },
    {
        "name": "إسبانيا",
        "dial_code": "+34",
        "code": "ES"
    },
    {
        "name": "سيريلانكا",
        "dial_code": "+94",
        "code": "LK"
    },
    {
        "name": "السودان",
        "dial_code": "+249",
        "code": "SD"
    },
    {
        "name": "سورينام",
        "dial_code": "+597",
        "code": "SR"
    },
    {
        "name": "سفالبارد وجان ماين",
        "dial_code": "+47",
        "code": "SJ"
    },
    {
        "name": "سوازيلاند",
        "dial_code": "+268",
        "code": "SZ"
    },
    {
        "name": "السويد",
        "dial_code": "+46",
        "code": "SE"
    },
    {
        "name": "سويسرا",
        "dial_code": "+41",
        "code": "CH"
    },
    {
        "name": "سوريا",
        "dial_code": "+963",
        "code": "SY"
    },
    {
        "name": "تايوان",
        "dial_code": "+886",
        "code": "TW"
    },
    {
        "name": "طاجيكستان",
        "dial_code": "+992",
        "code": "TJ"
    },
    {
        "name": "تنزانيا",
        "dial_code": "+255",
        "code": "TZ"
    },
    {
        "name": "تايلاند",
        "dial_code": "+66",
        "code": "TH"
    },
    {
        "name": "تيمور ليشتي",
        "dial_code": "+670",
        "code": "TL"
    },
    {
        "name": "توجو",
        "dial_code": "+228",
        "code": "TG"
    },
    {
        "name": "توكيلاو",
        "dial_code": "+690",
        "code": "TK"
    },
    {
        "name": "تونغا",
        "dial_code": "+676",
        "code": "TO"
    },
    {
        "name": "ترينداد وتوباغو",
        "dial_code": "+1868",
        "code": "TT"
    },
    {
        "name": "تونس",
        "dial_code": "+216",
        "code": "TN"
    },
    {
        "name": "تركيا",
        "dial_code": "+90",
        "code": "TR"
    },
    {
        "name": "تركمانستان",
        "dial_code": "+993",
        "code": "TM"
    },
    {
        "name": "جزر تركس وكايكوس",
        "dial_code": "+1649",
        "code": "TC"
    },
    {
        "name": "توفالو",
        "dial_code": "+688",
        "code": "TV"
    },
    {
        "name": "أوغندا",
        "dial_code": "+256",
        "code": "UG"
    },
    {
        "name": "أوكرانيا",
        "dial_code": "+380",
        "code": "UA"
    },
    {
        "name": "الامارات",
        "dial_code": "+971",
        "code": "AE"
    },
    {
        "name": "انجلترا",
        "dial_code": "+44",
        "code": "GB"
    },
    {
        "name": "امريكا",
        "dial_code": "+1",
        "code": "US"
    },
    {
        "name": "أوروغواي",
        "dial_code": "+598",
        "code": "UY"
    },
    {
        "name": "أوزبكستان",
        "dial_code": "+998",
        "code": "UZ"
    },
    {
        "name": "فانواتو",
        "dial_code": "+678",
        "code": "VU"
    },
    {
        "name": "فنزويلا",
        "dial_code": "+58",
        "code": "VE"
    },
    {
        "name": "فيتنام",
        "dial_code": "+84",
        "code": "VN"
    },
    {
        "name": "جزر العذراء البريطانية",
        "dial_code": "+1284",
        "code": "VG"
    },
    {
        "name": "جزر فيرجن الأمريكية",
        "dial_code": "+1340",
        "code": "VI"
    },
    {
        "name": "واليس وفوتونا",
        "dial_code": "+681",
        "code": "WF"
    },
    {
        "name": "اليمن",
        "dial_code": "+967",
        "code": "YE"
    },
    {
        "name": "زامبيا",
        "dial_code": "+260",
        "code": "ZM"
    },
    {
        "name": "زيمبابوي",
        "dial_code": "+263",
        "code": "ZW"
    }
];

export default countriesList;