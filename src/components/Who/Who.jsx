import { Link } from "react-router-dom";
import { about_image } from "../../assets/index";

const Who = () => {
  return (
    // START ABOUT COMPONENT
    // <section
    //   id="about-section"
    //   className="relative min-h-[100vh] flex md:flex-row flex-col sm:py-16 py-6 sm:px-16 px-6 sm:py-12 py-4 bg-gray-100 gap-1"
    // >
    //   <div
    //     className="flex-1 flex flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-16 relative md:max-w-[550px] w-[100%] flex justify-center items-center "
    //     style={{ opacity: 1, transform: "none", willChange: "auto" }}
    //   >
    //     <img
    //       src={about_image}
    //       alt="About"
    //       className="rounded-[35px]  object-cover"
    //     />
    //   </div>
    //   <div className="gradient-circle2 rounded-full" />
    //   <div
    //     className="relative flex-1 flex justify-center items-start flex-col"
    //     style={{ opacity: 1, transform: "none", willChange: "auto" }}
    //   >
    //     <h1 className="text-[35px] text-[var(--main-color)] font-bold my-5">من نحن ؟</h1>
    //     <p className="font-medium text-[#18282a] text-[20px] leading-[35.8px]">
    //       شركة كارتك شركة مختصة في مجال الفحص والبرمجة وتقدير حوادث المركبات
    //       بكفاءة عالية وتمكن شديد نابع من أسس علمية وفنية وخبرات عملية، حيث تضم
    //       شركتنا طاقمًا فنيًا وإداريًا على مستوى عالٍ من الخبرة والكفاءة
    //       وبروتوكول فحص عالي الدقة لتوفير أفضل الخدمات لعملائنا في المؤسسات
    //       العامة أو الخاصة أو الأفراد، وذلك بالارتباط والتكامل مع هذه الجهات و منها :
    //       <br />
    //       - شركة أم تي ان للاتصالات
    //       <br />
    //       - شركة سوداني للهاتف السيار
    //       <br />
    //       - شركة بنك البركة للاوراق المالية
    //       <br />
    //       - بنك الخرطوم
    //     </p>
    //   </div>
    // </section>

    <div className="who container flex items-center flex-col xl:flex-row gap-[60px] my-[45px]">
      <div className="who-img relative">
        <figure>
          <img src={about_image} alt="image" className="rounded-[20px]" />
        </figure>
        <div className="bg-[var(--main-color)] w-[61px] h-[61px] absolute bottom-[-28px] right-[40px] rotate-45"></div>
        <div className="bg-[var(--main-color)] w-[33px] h-[33px] absolute bottom-[-13px] left-[35px] rotate-12"></div>
        <div className="bg-[var(--main-color)] w-[43px] h-[43px] absolute top-[-20px] right-[20px]"></div>
      </div>
      <div className="who-content max-w-[600px]">
        <h4 className="text-[var(--sec-color)] text-[50px] font-black">
          مـن نـحـن
        </h4>
        <p className="text-[#566983] text-[17px] font-semibold leading-[2] mt-[10px]">
          <span className="text-[var(--main-color)]"> شركة كارتك</span> {}
          شركة مختصة في مجال الفحص والبرمجة وتقدير حوادث المركبات بكفاءة عالية
          وتمكن شديد نابع من أسس علمية وفنية وخبرات عملية، حيث تضم شركتنا طاقمًا
          فنيًا وإداريًا على مستوى عالٍ من الخبرة والكفاءة وبروتوكول فحص عالي
          الدقة لتوفير أفضل الخدمات لعملائنا في المؤسسات العامة أو الخاصة أو
          الأفراد، وذلك بالارتباط والتكامل مع هذه الجهات و منها : - شركة أم تي
          ان للاتصالات - شركة سوداني للهاتف السيار - شركة بنك البركة للاوراق
          المالية - بنك الخرطوم
        </p>
        <figure className="mt-[15px]">
          <img
            src="data:image/png;base64,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"
            alt="stars1"
          />
        </figure>
        <Link
          className="btn block mt-[30px]"
          to="https://api.whatsapp.com/send/?phone=971527041021&text&type=phone_number&app_absent=0"
          target="_blink"
        >
          <button className="bg-[var(--main-color)] text-[var(--white-color)] undefined undefined text-[14px] font-bold w-[150px] h-[50px] rounded-[8px]">
            واتساب
          </button>
        </Link>
      </div>
    </div>

    // END ABOUT COMPONENT
  );
};

export default Who;
