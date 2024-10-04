import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    // START HERO COMPONENT
    <section
      id="home-section"
      className="relative w-full flex flex-col justify-center items-center md:px-16 px-6  min-h-[100vh]"
      style={{ opacity: 1, transform: "none", willChange: "auto" }}
    >
      <div className="gradient-circle" />
      <div className="w-full flex justify-center items-center flex-col text-center">
        <h1 className="md:text-[58px] text-[45px] text-black leading-[66.8px] w-full md:mt-10 mt-5 font-[500] font-semibold max-w-[780px]">
          فحص و تقدير حوادث المركبات بكفاءة عالية
        </h1>
        <p className="font-normal text-[#18282a] text-[18px] leading-[30.8px] mt-4 max-w-[520px] ">
          نقدم خدمات فحص وبرمجة المركبات وتقدير الحوادث بدقة عالية مستندين إلى
          خبرات علمية وفنية لتلبية احتياجات المؤسسات والأفراد بكفاءة استثنائية.
        </p>
        <div className="flex flex-col md:flex-row gap-7 mt-8">
          <button className=" bg-[#222] start-button py-2 px-4 rounded-[20px]  text-white duration-300 hover:bg-mauve hover:text-white">
            <Link to="/contact" className="block">
            اطلب الخدمة الآن
            </Link>
          </button>
          <button className="bg-[var(--main-color)] duration-300 hover:bg-[#333] start-button py-2 px-4 rounded-[20px] ">
            <Link to="/services" className="text-white">
            تعرف على خدماتنا
            </Link>
          </button>
        </div>
      </div>
    </section>

    // END HERO COMPONENT
  );
};

export default Hero;
