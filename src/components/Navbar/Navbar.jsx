import "./Navbar.css";
import { logo } from "../../assets/index";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../content/data";
import styles from "../../style";
import { useState } from "react";
// import { useState } from "react";
const Navbar = () => {
  const [ShowMenuphone, setShowMenuphone] = useState(true);
  const ShowMenuphoneClick = () => {
    setShowMenuphone(!ShowMenuphone);
  };
  return (
    // START NAVBAR COMPONENT
    <>
      <div className="top-navbar bg-[var(--main-color)] text-white flex items-center justify-between p-2">
        {/* CONTAINER */}
        <div className="container ">
          {/* LEVEL */}
          <div className="level flex flex-col md:flex-row gap-3 text-center items-center justify-between text-sm is-mobile">
            {/* LEVEL LEFT */}
            <div className="level-left flex items-center">
              {/* LOCATION */}
              <Link
                to="https://www.google.com/maps/place/%D9%86%D8%A8%D8%B6+%D8%A7%D9%84%D9%81%D8%AD%D8%B5+%D9%84%D9%81%D8%AD%D8%B5+%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA+%2FNabdh+Alfahs%E2%80%AD/@25.3349967,55.412342,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f59a0fbc22847:0xc0636066faed9c6f!8m2!3d25.3349967!4d55.412342!16s%2Fg%2F11y1m8z4h0?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="ep-location flex items-center"
              >
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                      d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                  </g>
                </svg>
                <span>
                  المنطقة الصناعية 4 - إمارة الشارقةّ - الإمارات العربية المتحدة
                </span>
              </Link>
              {/* / END LOCATION */}
            </div>
            {/*  / END LEVEL LEFT */}
            {/* LEVEL RIGHT */}
            <div className="level-right flex items-center gap-2">
              {/* EMAIL */}
              <div className="ep-email ">
                <Link
                  to="mailto:Mohamed@Nabdh.io"
                  className="flex items-center gap-1"
                >
                  <svg
                    width="16px"
                    height="16px"
                    className="mt-[2px]"
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
                        d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />{" "}
                      <path
                        d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                      />{" "}
                    </g>
                  </svg>
                  <span>Mohamed@Nabdh.io</span>
                </Link>
              </div>
              {/* / END EMAIL */}
              <div className="w-[1px] h-5 bg-white"></div>
              {/* WORK TIME */}
              <div className="ep-work-time flex items-center gap-1">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                      d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                      fill="white"
                    />{" "}
                    <path
                      d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z"
                      fill="white"
                    />{" "}
                  </g>
                </svg>
                <span className="is-dir-left"> على مدار اليوم</span>
              </div>
              {/* WORK TIME */}
            </div>
            {/* / END LEVEL RIGHT */}
          </div>
          {/* / END LEVEL */}
        </div>
        {/* / END CONTAINER */}
      </div>
      <nav className="navbar p-1">
        {/* CONTAINER */}
        <div className="container flex items-center justify-between">
          {/* NAVBAR BRAND */}
          <div className="navbar-brand flex items-center gap-20">
            <Link className="" to="/">
              <p className="">
                <img src={logo} alt="" className="w-[60px] h-[]" />
              </p>
            </Link>
            {/* <div className="">
              <div className="navbar-item">
                <a
                  href=""
                  className="button is-primary-button ar-lang"
                >
                  <span className="icon">
                    <i className="las la-globe" />
                  </span>
                  <span>English</span>
                </a>
              </div>
            </div> */}
            <div className="navbar-burger" data-target="mainNavbar">
              <span />
              <span />
              <span />
            </div>

            <div id="mainNavbar" className="">
              {/* NAVBAR-START */}
              <div className="items-center gap-4 hidden xl:flex">
                <Link className="navbar-item" to={"/"}>
                  الرئيسية
                </Link>
                <Link className="navbar-item" to={"/about"}>
                  من نحن
                </Link>
                <Link className="navbar-item" to="/services">
                  خدماتنا
                </Link>
                <Link className="navbar-item" to="/images">
                  معرض الصور
                </Link>
                <Link className="navbar-item" to="/contact">
                  تواصل معنا
                </Link>
              </div>
              {/* / END NAVBAR-START */}
            </div>
          </div>

          <div className="navbar-end flex items-center gap-1">
            <div className="navbar-item flex">
              <a
                href="https://elkhaoua-pottery.com:443/?lang=en"
                className="nav_button flex items-center gap-1"
              >
                <span className="icon">
                  <svg
                    fill="#ffffff"
                    width="19px"
                    height="19px"
                    viewBox="0 -8 72 72"
                    id="Layer_1"
                    data-name="Layer 1"
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
                      <title>world</title>

                      <path d="M59.25,12.42l-.83.27L54,13.08l-1.27,2-.91-.29L48.23,11.6l-.52-1.66L47,8.16l-2.23-2-2.63-.51-.06,1.2,2.58,2.52,1.26,1.48-1.42.75-1.15-.34-1.73-.73,0-1.39L39.42,8.2l-.75,3.29L36.38,12l.23,1.84,3,.57.52-2.93,2.46.37,1.14.67h1.84L46.8,15l3.34,3.38-.25,1.32-2.69-.34-4.64,2.34-3.34,4-.43,1.78H37.58l-2.23-1-2.17,1,.54,2.29.94-1.09,1.67,0-.12,2,1.38.4L39,32.67,41.2,32l2.57.4,3,.8,1.48.18,2.52,2.86,4.87,2.86-3.15,6-3.32,1.54-1.26,3.44-4.81,3.21-.51,1.85A28,28,0,0,0,59.25,12.42Z" />

                      <path d="M39.22,42.63l-2-3.78L39.05,35l-1.87-.56-2.1-2.11-4.66-1L28.88,28v1.92H28.2l-4-5.44V20l-2.94-4.78-4.67.83H13.43l-1.59-1,2-1.6-2,.46A28,28,0,0,0,36,56a29,29,0,0,0,3.51-.25l-.29-3.39s1.29-5,1.29-5.2S39.22,42.63,39.22,42.63Z" />

                      <path d="M18.41,9l5-.7,2.29-1.25,2.58.74,4.12-.23,1.42-2.22,2.05.34,5-.47,1.38-1.52,2-1.29,2.74.41,1-.15a27.91,27.91,0,0,0-33.51,7.49h0ZM37.18,2.78,40,1.21l1.84,1.06-2.66,2-2.54.26-1.14-.74ZM28.71,3,30,3.54,31.63,3l.9,1.56-3.82,1L26.88,4.5S28.67,3.35,28.71,3Z" />
                    </g>
                  </svg>
                </span>
                <span className="text-sm">الانجليزية</span>
              </a>
            </div>
            <div
              className="navbar-item xl:hidden"
              onClick={() => {
                ShowMenuphoneClick();
              }}
            >
              {ShowMenuphone && (
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABFSURBVHgB7dRBDYAwFAXBB0rAGhYwUANYwBpIAQ0/TZomM5d1sAkAAMCklhS1637+bOnjbeexp2ANMDUXAsZyIQAAAIo+9uYPCrNIxAsAAAAASUVORK5CYII="
                  alt="Menu"
                />
              )}
              {!ShowMenuphone && (
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADySURBVHgB7dYxDoJAEAXQgUI9Bh6Fo2hnSazstqMylnZ6FI7iHkMsVIYtJCuua/gUhv8KszEU88PwQYSIiIiIiOhPJQJg9qdLe7jVudltbPDa8pzJ7FG15+16KQOlgtMMNq9Mecw+XdAZPhMQTIA0yZtfK4EQ3vBW0joXAMgKKXNoBrx3BuysU9/wpgivWixYANUXQmQhYw2voAHUWwjHncHDK3gA5YVQowyvkC30co38DwC/Qv4D67hzxHviV9A70FuVERU7BK5GA1UZqtihMJ8SET0/VgjMCkX0vClW1l8nAUA+A1+r0gtBREREREQ0bU92D5qp5ExhagAAAABJRU5ErkJggg=="
                  alt="closeMenu"
                />
              )}
            </div>
          </div>

          <div
            className={`phoneMenu ${styles.flexColumn} items-center gap-[25px] w-[100%] h-[] bg-[var(--white-color)] absolute left-0 border-t-[1px] border-[#E2E2E2] z-[999] py-[35px] xl:hidden`}
            style={{
              top: ShowMenuphone ? "-660px" : "148px",

              opacity: ShowMenuphone ? "0" : "1",
            }}
          >
            {navLinks.map((item) => {
              return (
                <NavLink
                  to={item.id === "home" ? "/" : item.id}
                  key={item.id}
                  className={`relative ${styles.flex} gap-2 text-[var(--sec-color)] text-[15px] font-bold`}
                  onClick={() => {
                    setShowMenuphone(!ShowMenuphone);
                  }}
                >
                  <p> {item.title}</p>
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
      <div className="ep-announcement bg-[#3282b8] text-white flex items-center justify-center p-1">
        {/* ANNAOUNCEMENT CONTENT */}
        <div className="announcement-content flex items-center gap-1">
          {/* ANNOUNCE ICON */}
          <span className="announcement-icon icon ">
            <svg
              width="28px"
              height="28px"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
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
                  d="M101.682 97.5197C109.977 87.2297 122.685 84.4431 134.97 89.8533C156.179 99.1929 169.981 118.98 169.981 143.521C169.981 248.937 9.86982 171.22 91.9238 93.392"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M165.412 210.025C176.551 238.986 192.545 276.536 188.389 311.859"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M166.443 212.253C167.642 232.605 166.443 293.567 155.387 341.465"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M218.858 197.2C208.926 238.345 200.378 297.202 188.383 311.859"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M220.938 190.969C235.424 179.708 245.713 191.358 229.247 203.433"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M228.73 203.951C244.943 202.64 242.324 216.175 227.172 215.377"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M206.91 133.321C211.658 146.086 220.188 182.231 220.413 183.177"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M207.949 131.244C234.932 111.605 262.93 92.9973 290.525 74.1155"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M293.645 75.1538C298.546 103.584 303.119 134.019 311.821 161.365"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M214.184 165.521C246.129 164.854 278.228 161.365 310.262 161.365"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M151.87 175.958C151.064 171.093 150.066 164.915 149.574 160.624"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M151.618 132.316C151.828 130.138 151.033 126.517 150.471 124.588"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M132.676 134.085C132.774 132.316 132.592 129.901 132.396 127.288"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M319.09 75.1553C324.742 69.5792 337.881 61.5808 341.941 58.5356"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M334.725 106.501C341.808 103.798 349.432 101.84 356.537 99.7498"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M335.707 143.708C342.73 146.275 349.655 146.305 356.999 146.305"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M193.928 141.631C180.731 158.383 193.312 166.049 208.47 159.808"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M237.554 172.272C238.206 177.451 234.174 182.79 232.881 186.813"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M78.5293 218.936C90.8485 261.118 97.4655 276.666 97.4655 341.465"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M77.4148 218.936C67.4031 240.991 37.1441 326.551 45.4121 339.237"
                  stroke="white"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
              </g>
            </svg>
          </span>
          {/* / END ANNOUNCE */}
          {/* ANNOUNCEMENT TEXT */}
          <span className="text-base">
            <a href="">
              هذه المساحة للاشهارات أو الاعلانات الهامة أو التخفيضات .
            </a>
          </span>
          {/* / END ANNOUNCEMENT TEXT */}
        </div>
        {/* / END ANNAOUNCEMENT CONTENT */}
      </div>

      {/* <img src="src\assets\images\hhhhh_.png" alt="" /> */}
    </>
    // END NAVBAR COMPONENT
  );
};

export default Navbar;
