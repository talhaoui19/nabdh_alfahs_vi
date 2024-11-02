import {
  service_image_1,
  service_image_2,
  service_image_3,
} from "../../assets/index";
import { useTranslation } from "react-i18next";

const Service = () => {
  const { t, i18n } = useTranslation();
  return (
    // START SERVICE SECTION
    <section id="service" className="bg-[#f6faff] my-[80px] py-[90px]">
      <div className="container flex items-center flex-col xl:flex-row gap-8 md:gap-[80px]">
        <div className="who-content max-w-[450px]">
          <h4 className="text-[var(--main-color)] text-[25px] md:text-[28px] font-semibold md:font-black">
            {t("service.title")}
          </h4>
          {i18n.language === "ar" ? (
            <p className="text-[#000000] text-[17px] font-medium leading-[2] mt-[10px]">
              نحن متخصصون في فحص شامل لأكثر من{" "}
              <span className="text-[var(--main-color)]"> 480 نقطة</span>
              في سيارتك باستخدام أحدث التقنيات وأكثر من{" "}
              <span>32 جهازًا متطورًا</span> لضمان تقديم خدمة دقيقة وفعالة.
            </p>
          ) : (
            <p className="text-[#000000] text-[17px] font-medium leading-[2] mt-[10px]">
              We specialize in a comprehensive inspection of
              <span className="text-[var(--main-color)]">
                {" "}
                over 480 points{" "}
              </span>
              in your car using the latest technologies and more than
              <span> 32 advanced devices </span> to ensure the provision of
              accurate and efficient service.
            </p>
          )}
        </div>
        <div className="flex items-center flex-col gap-4">
          <img
            src={service_image_1}
            alt="image"
            className="rounded-[20px] w-[335px] xl:w-[630px] h-[190px] xl:h-[389px]"
          />
          <div className="flex items-center gap-4">
            <img
              src={service_image_2}
              alt="image"
              className="rounded-[20px] w-[163px] xl:w-[299px] h-[152px] xl:h-[294px]"
            />
            <img
              src={service_image_3}
              alt="image"
              className="rounded-[20px] w-[163px] xl:w-[299px] h-[152px] xl:h-[294px]"
            />
          </div>
        </div>
      </div>
    </section>
    // END SERVICE SECTION
  );
};

export default Service;
