import { Link } from "react-router-dom";

const ContactComponent = () => {
  return (
    <section id="contact" className="contact-boxs bg-[var(--main-color)] py-[15px] mt-[100px]">
      <div className="container flex items-start justify-start flex-col lg:flex-row gap-[20px]">
        <div className="contact-box flex items-center gap-[15px] p-[5px] pt-[30px] md:p-[30px] cursor-pointer">
          <div className="contact-box-icon relative">
            <span className="icon-mail text-[var(--main-color)] text-[30px] bg-[#fff] w-[64px] h-[64px] rounded-full flex items-center justify-center " />
          </div>
          <div className="contact-box-info text-[#fff]">
            <h4 className="text-[18px] font-semibold">البريد الإلكتروني</h4>
            <p className="mt-[8px]">Mohamed@Nabdh.io</p>
          </div>
        </div>
        <div className="contact-box flex items-center gap-[15px] p-[5px] md:p-[30px] cursor-pointer">
          <div className="contact-box-icon relative">
            <span className="icon-map text-[var(--main-color)] text-[30px] bg-[#fff] w-[64px] h-[64px] rounded-full flex items-center justify-center " />
          </div>
          <Link
            to="https://www.google.com/maps?q=%D9%86%D8%A8%D8%B6+%D8%A7%D9%84%D9%81%D8%AD%D8%B5+%D9%84%D9%81%D8%AD%D8%B5+%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA+/Nabdh+Alfahs+-+First+Industrial+St+-+Industrial+Area+4+-+Industrial+Area+-+Sharjah&ftid=0x3e5f59a0fbc22847:0xc0636066faed9c6f&entry=gps&lucs=,94242487,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTM1LjEuODcwOTAYACDXggMqYyw5NDI0MjQ4Nyw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICQUU%3D&g_st=com.google.maps.preview.copy"
            target="_blanck"
          >
            <div className="contact-box-info text-[#fff]">
              <h4 className="text-[18px] font-semibold">العنوان</h4>
              <p className="mt-[8px]">
              المنطقة الصناعية 4 - إمارة الشارقةّ - الإمارات العربية المتحدة
              </p>
            </div>
          </Link>
        </div>
        <div className="contact-box flex items-center gap-[15px] p-[5px] pb-[30px] md:p-[30px] cursor-pointer">
          <div className="contact-box-icon relative">
            <span className="icon-call text-[var(--main-color)] text-[30px] bg-[#fff] w-[64px] h-[64px] rounded-full flex items-center justify-center " />
          </div>
          <div className="contact-box-info text-[#fff]">
            <h4 className="text-[18px] font-semibold">الهاتف</h4>
            <p className="mt-[8px]" dir="ltr"> +971527041021 </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
