import { about_image } from "../../assets/index";
import { useTranslation } from "react-i18next";

const about = () => {
  const { t, i18n } = useTranslation();
  return (
    // START ABOUT SECTION
    <section id="about" className="bg-[#f6faff] my-[80px] py-[90px]">
      <div className="container flex items-center flex-col xl:flex-row gap-[60px] ">
        {i18n.language === "en" ? (
          <div>
            <img src={about_image} alt="image" className="rounded-[20px]" />
          </div>
        ) : (
          ""
        )}
        <div className="who-content max-w-[600px]">
          <h4 className="text-[var(--main-color)] text-[25px] md:text-[28px] font-semibold md:font-black text-center md:text-start">
            {t("about.title")}
          </h4>
          <p className="text-[#000000] text-[15p6] md:text-[17px] font-medium leading-[2] mt-[10px] text-center md:text-start">
            {t("about.pargraph")}
          </p>
        </div>

        {i18n.language === "ar" ? (
          <div>
            <img src={about_image} alt="image" className="rounded-[20px]" />
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
    // END ABOUT SECTION
  );
};

export default about;
