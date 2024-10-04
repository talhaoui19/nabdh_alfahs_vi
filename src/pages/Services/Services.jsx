import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <div className="section-title pt-[45px] md:pt-[120px] pb-[60px]">
        <div className="container">
          <h4 className="text-[var(--sec-color)] text-[60px] font-black">
            الخدمات
          </h4>
          <p className="text-[#566983] text-[16px] font-normal leading-[1.6] w-[100%] md:w-[80%]">
            يقدم لكم نبض الفحص نطاقًا واسعًا من الخدمات عالية الجودة لتلبية جميع
            الاحتياجات
          </p>
        </div>
      </div>
      <div className="container services-boxs grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] mt-[40px] mb-[70px] md:mt-[70px]">
        <div
          id="box1"
          className="services-box bg-[#fff] border-[1px] border-[#F2F2F2] rounded-[16px] p-[15px] cursor-pointer"
        >
          <div className="services-box-icon flex items-center justify-center bg-[var(--main-color)] w-[48px] h-[48px] rounded-full">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
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
                  fill="white"
                  fill-rule="evenodd"
                  d="M6 3a2 2 0 012-2h4a2 2 0 012 2h1.866a2.014 2.014 0 011.998 2.233C17.716 6.596 17.5 8.87 17.5 10.5c0 1.63.216 3.904.364 5.267A2.014 2.014 0 0115.866 18H4.134a2.014 2.014 0 01-1.998-2.233c.148-1.363.364-3.636.364-5.267 0-1.63-.216-3.904-.364-5.267A2.014 2.014 0 014.134 3H6v2H4.132l-.003.003a.02.02 0 00-.004.007v.007C4.271 6.38 4.5 8.75 4.5 10.5c0 1.75-.228 4.12-.376 5.483v.007a.021.021 0 00.008.01h11.736l.001-.001.002-.002a.023.023 0 00.005-.007v-.007c-.148-1.362-.376-3.732-.376-5.483 0-1.75.228-4.12.376-5.483a.02.02 0 000-.005V5.01a.023.023 0 00-.008-.01H14a2 2 0 01-2 2H8a2 2 0 01-2-2V3zm6 0H8v2h4V3zm2.097 6.717a1 1 0 10-1.394-1.434l-3.521 3.424-1.609-1.126a1 1 0 00-1.146 1.638l2.285 1.6a1 1 0 001.27-.102l4.115-4z"
                />{" "}
              </g>
            </svg>
          </div>
          <h4 className="text-[var(--sec-color)] text-[20px] font-bold my-[15px]">
            فحوصات السيارة قبل الشراء
          </h4>
          <p className="text-[#546883] text-[15px] font-normal leading-[1.6]">
            نوفر فحصًا متكاملًا يغطي أنظمة المركبة الأساسية مثل الصبغ، الحوادث،
            المحرك، والقير بوكس، باستخدام أحدث التقنيات لضمان أداء وسلامة
            مركبتك.
          </p>
          <span className="text-[var(--main-color)] text-[16px] font-medium mt-[15px] block">
            اقرأ المزيد..
          </span>
        </div>
        <div
          id="box2"
          className="services-box bg-[#fff] border-[1px] border-[#F2F2F2] rounded-[16px] p-[15px] cursor-pointer"
        >
          <div className="services-box-icon flex items-center justify-center bg-[var(--main-color)] w-[48px] h-[48px] rounded-full">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <defs></defs>

                <rect
                  class="cls-1"
                  x="1.5"
                  y="1.5"
                  width="21"
                  height="16.23"
                  rx="1.91"
                />

                <polygon
                  class="cls-1"
                  points="15.82 22.5 8.18 22.5 9.14 17.73 14.86 17.73 15.82 22.5"
                />

                <line class="cls-1" x1="5.32" y1="22.5" x2="18.68" y2="22.5" />

                <circle class="cls-2" cx="12" cy="14.86" r="0.95" />
              </g>
            </svg>
          </div>
          <h4 className="text-[var(--sec-color)] text-[20px] font-bold my-[15px]">
            فحص نظام الكمبيوتر للمركبة
          </h4>
          <p className="text-[#546883] text-[15px] font-normal leading-[1.6]">
            نقدم خدمة فحص شامل لنظام الكمبيوتر، حيث نقوم بقراءة أعطال السيارة
            المسجلة على الذاكرة، ويتابع الفني الأخطاء باستخدام البيانات المباشرة
            لضمان أداء سليم وفعال.{" "}
          </p>
          <span className="text-[var(--main-color)] text-[16px] font-medium mt-[15px] block">
            اقرأ المزيد..
          </span>
        </div>
        <div
          id="box3"
          className="services-box bg-[#fff] border-[1px] border-[#F2F2F2] rounded-[16px] p-[15px] cursor-pointer"
        >
          <div className="services-box-icon flex items-center justify-center bg-[var(--main-color)] w-[48px] h-[48px] rounded-full">
            <svg
              width="28px"
              height="28px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect width="24" height="24" fill="none" />{" "}
                <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.75,14.59L16.5,17.84a.54.54,0,0,1-.76,0l-5-4.95A3.54,3.54,0,0,1,6.34,8.06l2.39,2.33,1.63-1.63L8,6.43a3.6,3.6,0,0,1,4,.7,3.49,3.49,0,0,1,.82,3.75l4.94,4.95A.49.49,0,0,1,17.75,16.59Z" />{" "}
              </g>
            </svg>
          </div>
          <h4 className="text-[var(--sec-color)] text-[20px] font-bold my-[15px]">
            فحص أنظمة الصيانة الدورية
          </h4>
          <p className="text-[#546883] text-[15px] font-normal leading-[1.6]">
            يوفر هذا الفحص تقييمًا شاملاً لجميع أنظمة تشغيل السيارة من خلال 12
            جهازًا مختلفًا، مما يضمن صيانة كاملة وفعالة للمركبة.
          </p>
          <span className="text-[var(--main-color)] text-[16px] font-medium mt-[15px] block">
            اقرأ المزيد..
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
