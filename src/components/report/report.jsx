import { Link } from "react-router-dom";
import { report_image } from "../../assets";
import { useTranslation } from "react-i18next";

const Report = () => {
  const { t } = useTranslation();
  return (
    // START REPORT SECTION
    <section id="report" className="my-[80px] xl:py-[90px]">
      <div className="container flex items-center flex-col xl:flex-row gap-8 xl:gap-[80px] ">
        <div className="hidden xl:block">
          <img
            src={report_image}
            alt="image"
            className="rounded-[20px] w-[630px] h-[456px]"
          />
        </div>
        <div className="who-content max-w-[450px]">
          <h4 className="text-[var(--main-color)] text-[25px] md:text-[28px] font-medium md:font-black text-center md:text-start">
            {t("report.title")}
          </h4>
          <p className="text-[#000000] text-[17px] font-medium leading-[2] mt-[10px]">
            {t("report.content")}
          </p>
          <a
            href="src\assets\report-1.pdf"
            download="report"
            className="bg-[var(--main-color)] w-fit mt-4 text-white py-[10px] px-[18px] rounded-[9px] border-[2px] border-[var(--main-color)] hidden xl:flex items-center gap-1"
          >
            <span className="text-sm"> {t("report.button")}</span>
          </a>
        </div>
        <div>
          <div className="block xl:hidden ">
            <img
              src={report_image}
              alt="image"
              className="rounded-[20px] w-[335px] h-[250px]"
            />
          </div>
          <a
            href="src\assets\report-1.pdf"
            download="report"
            className="bg-[var(--main-color)] w-fit text-white py-[10px] px-[18px] rounded-[9px] border-[2px] border-[var(--main-color)] flex xl:hidden items-center justify-start gap-1 mt-6"
          >
            <span className="text-sm">{t("report.button")}</span>
          </a>
        </div>
      </div>
    </section>
    // END REPORT SECTION
  );
};

export default Report;
