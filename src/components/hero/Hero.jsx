import { Link } from "react-router-dom";
import "./hero.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    // START HERO SECTION
    <section className="md:px-16 px-0 md:py-8 flex items-center justify-center">
      <div className="hero w-[90%] mt-12 p-4 flex justify-center items-center flex-col md:gap-4 text-center">
        <h1 className="md:text-[35px] text-[20px] text-white leading-[66.8px] font-bold max-w-[780px]">
          {t("hero.title")}
        </h1>
        <p className="font-semibold text-white text-[16px] md:text-[20px] leading-[30px] md:mt-4 max-w-[520px] ">
          {t("hero.subtitle")}
        </p>
        <div className="flex items-center gap-2 font-semibold mt-4 mb-6 md:mb-0">
          <Link
            to={
              "https://www.google.com/maps/place/Sharjah+-+United+Arab+Emirates+-+%D8%A7%D9%84%D8%BA%D8%A7%D9%81%D9%8A%D8%A9+-+%D8%A5%D9%85%D8%A7%D8%B1%D8%A9+%D8%A7%D9%84%D8%B4%D8%A7%D8%B1%D9%82%D8%A9%D9%91+-+%D8%A7%D9%84%D8%A5%D9%85%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9+%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%AF%D8%A9%E2%80%AD/data=!4m2!3m1!1s0x3e5f59b20d364f15:0x4c3a44bbabaca0c9?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjE1MC4xMDAYACDXggMqbCw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICRFo%3D"
            }
            target="_blank"
            className="bg-transparent text-white py-[10px] px-[18px] rounded-[9px] border-[2px] border-white flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M16.9025 26.4713L17.3552 27.3629L17.3552 27.3629L16.9025 26.4713ZM16.0975 26.4713L15.6448 27.3629L15.6448 27.3629L16.0975 26.4713ZM24.8333 14.6668C24.8333 17.717 23.2438 20.2003 21.3364 22.0823C19.4312 23.9622 17.3002 25.1478 16.4498 25.5796L17.3552 27.3629C18.2937 26.8864 20.6282 25.5908 22.7411 23.5059C24.8519 21.4233 26.8333 18.4584 26.8333 14.6668H24.8333ZM16.5 6.3335C21.1024 6.3335 24.8333 10.0645 24.8333 14.6668H26.8333C26.8333 8.95989 22.2069 4.3335 16.5 4.3335V6.3335ZM8.16667 14.6668C8.16667 10.0645 11.8976 6.3335 16.5 6.3335V4.3335C10.7931 4.3335 6.16667 8.95989 6.16667 14.6668H8.16667ZM16.5502 25.5796C15.6998 25.1478 13.5688 23.9622 11.6636 22.0823C9.75619 20.2003 8.16667 17.717 8.16667 14.6668H6.16667C6.16667 18.4584 8.14811 21.4233 10.2589 23.5059C12.3718 25.5908 14.7063 26.8864 15.6448 27.3629L16.5502 25.5796ZM16.4498 25.5796C16.4803 25.5641 16.5197 25.5641 16.5502 25.5796L15.6448 27.3629C16.1833 27.6363 16.8167 27.6363 17.3552 27.3629L16.4498 25.5796ZM19.5 14.6668C19.5 16.3237 18.1569 17.6668 16.5 17.6668V19.6668C19.2614 19.6668 21.5 17.4283 21.5 14.6668H19.5ZM16.5 11.6668C18.1569 11.6668 19.5 13.01 19.5 14.6668H21.5C21.5 11.9054 19.2614 9.66683 16.5 9.66683V11.6668ZM13.5 14.6668C13.5 13.01 14.8431 11.6668 16.5 11.6668V9.66683C13.7386 9.66683 11.5 11.9054 11.5 14.6668H13.5ZM16.5 17.6668C14.8431 17.6668 13.5 16.3237 13.5 14.6668H11.5C11.5 17.4283 13.7386 19.6668 16.5 19.6668V17.6668Z"
                fill="white"
              />
            </svg>

            <span className="text-sm">{t("hero.location")}</span>
          </Link>
          <Link
            to={
              "https://api.whatsapp.com/send/?phone=971527041021&text&type=phone_number&app_absent=0"
            }
            target="_blank"
            className="bg-white text-[var(--main-color)] py-[10px] px-[18px] rounded-[9px] border-[2px] border-white flex items-center gap-1"
          >
            <span className="text-sm"> {t("hero.contact")}</span>
          </Link>
        </div>
      </div>
    </section>
    // END HERO SECTION
  );
};

export default Hero;
