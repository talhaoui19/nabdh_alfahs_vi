import { Link } from "react-router-dom";
import { logo } from "../../assets";

const Footer = () => {
  return (
    <div className="footer bg-[] pb-[20px] mt-5">
      <div className="container grid grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-3 lg:text-start gap-4 lg:gap-10">
        <div className="box">
          <figure>
            <img src={logo} alt="teamsoftlogo" className="w-[120px]" />
          </figure>
          <p className="text-black text-[17px] font-normal leading-[1.8] mt-[15px]">
            علامة نبض الفحص لفحص السيارات المسجلة في دائرة التنمية الاقتصادية
            حكومة الشارقة الامارات العربية المتحدة بالرقم 900678 برخصة فنية
            لمزاولة نشاط الفحص الفني للمركبات و الآليات بالرقم 817802 .
          </p>
        </div>
        <div className="box">
          <h5 className="text-[var(--main-color)] text-[18px] font-bold mr-[12px] my-[12px]">
            روابط مختصرة
          </h5>
          <div className="links flex flex-col gap-1">
            <Link
              className="text-black text-[16px] font-normal py-[8px] px-[12px]"
              to="/"
            >
              الرئيسية
            </Link>
            <Link
              className="text-black text-[16px] font-normal py-[8px] px-[12px]"
              to="/about"
            >
              من نحن
            </Link>
            <Link
              className="text-black text-[16px] font-normal py-[8px] px-[12px]"
              to="/services"
            >
              خدماتنا
            </Link>
            <Link
              className="text-black text-[16px] font-normal py-[8px] px-[12px] active"
              to="/images"
              aria-current="page"
            >
              معرض الصور
            </Link>
            <Link
              className="text-black text-[16px] font-normal py-[8px] px-[12px] active"
              to="/contact"
              aria-current="page"
            >
              اتصل بنا
            </Link>
          </div>
        </div>
        <div className="box">
          <h5 className="text-[var(--main-color)] text-[18px] font-bold my-[12px]">
            وسائل التواصل الإجتماعي
          </h5>
          <div className="scoials-media flex items-center justify-center md:justify-start gap-4 mt-4">
            <Link
              to="https://web.facebook.com/profile.php?id=61552180813873"
              target="_blank"
            >
              <div className="w-10 h-10 bg-[var(--main-color)] transition-all hover:bg-[#0f4c75e0] rounded-[4px] flex items-center justify-center">
                <svg
                  fill="#ffffff"
                  width="23px"
                  height="23px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />{" "}
                  </g>
                </svg>
              </div>
            </Link>
            <Link to="https://www.instagram.com/nabdh_alfas/" target="_blank">
              <div className="w-10 h-10 bg-[var(--main-color)] transition-all hover:bg-[#0f4c75e0] rounded-[4px] flex items-center justify-center">
                <svg
                  width="23px"
                  height="23px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#ffffff"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>instagram [#ffffff]</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-340.000000, -7439.000000)"
                        fill="#ffffff"
                      >
                        {" "}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {" "}
                          <path
                            d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
                            id="instagram-[#ffffff]"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </Link>
            <Link
              to="https://api.whatsapp.com/send/?phone=971527041021&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <div className="w-10 h-10 bg-[var(--main-color)] transition-all hover:bg-[#0f4c75e0] rounded-[4px] flex items-center justify-center">
                <svg
                  width="23px"
                  height="23px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                      fill="#ffffff"
                    />{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                      fill="#ffffff"
                    />{" "}
                  </g>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] w-[90%] h-[1px] mt-[30px] mx-auto" />
      <p className="text-[#6d6d72] underline text-[16px] pt-[15px] text-center">
        جميع الحقوق محفوظة - © 2024
      </p>
    </div>
  );
};

export default Footer;
