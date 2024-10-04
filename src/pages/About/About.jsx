import { Who } from "../../components";

const About = () => {
  return (
    <section id="about">
      <div className="mt-20">
        <Who />
      </div>
      <div className="container mb-20">
        <div className="main-title mt-[60px] md:mt-[80px]">
          <h4 className="text-[var(--sec-color)] text-[40px] md:text-[50px] font-black">
            نهدف الى تحقيق
          </h4>
          <p className="text-[#808D9E] text-[16px] undefined font-normal leading-[1.6] md:w-[80%] mt-[5px]">
            بعد عامين من التجهيز، انطلقت شركتنا في عام 2019 مع أهداف استراتيجية
            طموحة تسعى لتحقيق النجاح الحقيقي. نعتبر هذه الأهداف ضرورية للغاية،
            ونعمل جاهدين على الوصول إليها. فيما يلي أهم أهدافنا.
          </p>
        </div>
        <div className="about-boxs grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[50px]">
          <div className="about-box flex items-start flex-col md:flex-row gap-[20px] bg-[#fff] p-[20px] py-[25px] rounded-[8px] cursor-pointer">
            <figure className="flex items-center justify-center  bg-[var(--main-color)] p-[15px] rounded-full">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGbSURBVHgB7ZiNcYMwDIVFFygjeIN2BEboCNmg3QA2aDdIN0gzAekEGYFuQDdQ5bNy/BRiW7YDueO78yWX+NkPC2QZgI2FQcQ3aq3+hLVBpmo01BCJB1gx92WOwpKDjF8IwDovdVB8Uzf6O/gN/kztoD89dYrna69q6c8CO7wN+tIzdqGwCapbGJwwVrkKK2+Rvzn5HCw+XFs5vg1KznH9VWj5t/e5UPHK1dGTNg24wy7putBoDaSEV6pBOU10kzRgziGKxR7l+XRgbPxU2Vbm7NFXgRQPY7pPIdQpkIBm+V1QMxfmgqyKCR0c3ULczultVYnLZp4n1M+D7rlMTWhdw7oHCSi8sdE9Hw50KQ1qzuiXdhSEgiYJf2I8PjBGEh6Z3GH49lVASgQmaxTsqRkEwKvwQu2Jmi6xL6H64fZN7ZRl2QliQhO/8hUrSACaB03Xi6WvsOyFpIIE4LASdjM4Mtbg7c4QpU2w3tMXmrPnkudWZessSo7Y7cNfIGBq3n9VCT32Qa8ViEcQMDXv9pZJSkxzRzDF5RE2FuYPYOW0DWQvK8gAAAAASUVORK5CYII="
                alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGbSURBVHgB7ZiNcYMwDIVFFygjeIN2BEboCNmg3QA2aDdIN0gzAekEGYFuQDdQ5bNy/BRiW7YDueO78yWX+NkPC2QZgI2FQcQ3aq3+hLVBpmo01BCJB1gx92WOwpKDjF8IwDovdVB8Uzf6O/gN/kztoD89dYrna69q6c8CO7wN+tIzdqGwCapbGJwwVrkKK2+Rvzn5HCw+XFs5vg1KznH9VWj5t/e5UPHK1dGTNg24wy7putBoDaSEV6pBOU10kzRgziGKxR7l+XRgbPxU2Vbm7NFXgRQPY7pPIdQpkIBm+V1QMxfmgqyKCR0c3ULczultVYnLZp4n1M+D7rlMTWhdw7oHCSi8sdE9Hw50KQ1qzuiXdhSEgiYJf2I8PjBGEh6Z3GH49lVASgQmaxTsqRkEwKvwQu2Jmi6xL6H64fZN7ZRl2QliQhO/8hUrSACaB03Xi6WvsOyFpIIE4LASdjM4Mtbg7c4QpU2w3tMXmrPnkudWZessSo7Y7cNfIGBq3n9VCT32Qa8ViEcQMDXv9pZJSkxzRzDF5RE2FuYPYOW0DWQvK8gAAAAASUVORK5CYII="
                className="w-[25px]"
              />
            </figure>
            <div className="about-box-content max-w-[400px]">
              <h4 className="text-[var(--third-color)] text-[16px] font-semibold">
                خلق أفضل حلول فحص المركبات بايداع و احترافية عالية .
              </h4>
              <p className="text-[#566983] text-[15px] leading-[28.8px]">
                نسعى لتقديم أفضل حلول فحص المركبات من خلال دمج الابتكار مع
                الاحترافية العالية، مما يضمن دقة الفحص وسلامة المركبات.
              </p>
            </div>
          </div>
          <div className="about-box flex items-start flex-col md:flex-row gap-[20px] bg-[#fff] p-[20px] py-[25px] rounded-[8px] cursor-pointer">
            <figure className="flex items-center justify-center  bg-[var(--main-color)] p-[15px] rounded-full">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAoCAYAAAB99ePgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHHSURBVHgB7ZjRcYMwDIZ/en1vOkHZoIxAJygblBGyQdMJwgawSdggzQShEyQbqNJh7lJaYxNkmge+O52PWNiKJUs2wMKCHSJasaQsMW4FY9SWfrLFfyOrxLKnv9lPXcVojLK4jZuE5YllxZKZ1saZpWY5mOc6iqIa2rBh76SDrst5wJx0yX3mvYMfr9Al81HyNW4FXR58lHyNi6FL7KPkNI7adBBDF0lBiUtp0DgeQNy5QxhKM/518MslhaXENVBbJ+cgtdkw5NYU85DaOoaMO2MeGluHtbZSG6xH6Oe4SxqWF663DcYyQ9x5VYohA9cUho1rbueRicK498yufHQpOSsEDyIbo4EujY+Sb23V3rle4/kad4AueuNRe1c4kQ5H0r6hGQN3dD0n836M0PAkCUvhMKgwfypkIh80MqPfLpfnHBMZezVcc/PM8sVSdWXHuGqD9soowV5c9MmhMuv6+PcCIeCJqt4KrR36b71VHXV+800lNuQzRNkPchOPYkiFCZXlHtPJRdgYSaxdco2hwNSV66hZPlheTPuJueHV2fR2pKSK1KKbmBi9jLkcIxi1W82kOdo4qsyhwKXfffCRQ0SFhYUb5hslTfhKGqmkUgAAAABJRU5ErkJggg=="
                alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAoCAYAAAB99ePgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHHSURBVHgB7ZjRcYMwDIZ/en1vOkHZoIxAJygblBGyQdMJwgawSdggzQShEyQbqNJh7lJaYxNkmge+O52PWNiKJUs2wMKCHSJasaQsMW4FY9SWfrLFfyOrxLKnv9lPXcVojLK4jZuE5YllxZKZ1saZpWY5mOc6iqIa2rBh76SDrst5wJx0yX3mvYMfr9Al81HyNW4FXR58lHyNi6FL7KPkNI7adBBDF0lBiUtp0DgeQNy5QxhKM/518MslhaXENVBbJ+cgtdkw5NYU85DaOoaMO2MeGluHtbZSG6xH6Oe4SxqWF663DcYyQ9x5VYohA9cUho1rbueRicK498yufHQpOSsEDyIbo4EujY+Sb23V3rle4/kad4AueuNRe1c4kQ5H0r6hGQN3dD0n836M0PAkCUvhMKgwfypkIh80MqPfLpfnHBMZezVcc/PM8sVSdWXHuGqD9soowV5c9MmhMuv6+PcCIeCJqt4KrR36b71VHXV+800lNuQzRNkPchOPYkiFCZXlHtPJRdgYSaxdco2hwNSV66hZPlheTPuJueHV2fR2pKSK1KKbmBi9jLkcIxi1W82kOdo4qsyhwKXfffCRQ0SFhYUb5hslTfhKGqmkUgAAAABJRU5ErkJggg=="
                className="w-[25px]"
              />
            </figure>
            <div className="about-box-content max-w-[400px]">
              <h4 className="text-[var(--third-color)] text-[16px] font-semibold">
                ضمان الالتزام بالجودة و الدقة و تحقيق الريادة في خدماتنا .
              </h4>
              <p className="text-[#566983] text-[15px] leading-[28.8px]">
                نلتزم بتقديم أعلى معايير الجودة والدقة في خدماتنا، مما يعزز
                ريادتنا في صناعة فحص المركبات ويضمن رضا عملائنا.
              </p>
            </div>
          </div>
          <div className="about-box flex items-start flex-col md:flex-row gap-[20px] bg-[#fff] p-[20px] py-[25px] rounded-[8px] cursor-pointer">
            <figure className="flex items-center justify-center  bg-[var(--main-color)] p-[15px] rounded-full">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG5SURBVHgB7ZiPUcIwGMVfPQeoG2QDGKFOoBuIEwATFEZwAthAmIA6gToB3UA2iC/XnHJq/qf14PjdPXI0X5LX9GvaFLhwhhRIQEpZsrinRpSgSl31Rr1QTVEUBwyJMkXV1Id0s6IEhoADPXiaOmZPTdAnerZSqNEH7Hgq8zBDTtihkOGX0oTqRyAXskvqnDz7jOtcSvRZ7pGfG9cycwU3Ffph4grwMXeHfqhcAT7mhKVuQ82pn5fnoI9vLG1HSEV2C6iJUseM5ffdrMqxPl5a2jrz2GfmbEzVDxNbPUtvqVaV+v9XvYH0Z6667aWd2tCudrTbIRV2spBu6kBjigVSYSeV9GMcE2/DmXPMn4ZFAzcl/GmO8tKI7w2xRF7mPkFe5vTsPSEPS59ZC4Z5srbkUKVjbDm3Rp9wgF2kuVcEErMIx+afV54dE2xO518wMe2uEUdrqTs46s+DqE01k3v1x+GW2qJ7/xO/BiqKRwQSa04iEJoLHiv2lalFGFGLbqy5bWB8/ieCCdntY0MQGBIOOPM0tsB/oA3uDabUXiLp00PS9zltUKDb5qklRL3TtdQ7tR7829yFU+ATgpT/UAAqcu4AAAAASUVORK5CYII="
                alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG5SURBVHgB7ZiPUcIwGMVfPQeoG2QDGKFOoBuIEwATFEZwAthAmIA6gToB3UA2iC/XnHJq/qf14PjdPXI0X5LX9GvaFLhwhhRIQEpZsrinRpSgSl31Rr1QTVEUBwyJMkXV1Id0s6IEhoADPXiaOmZPTdAnerZSqNEH7Hgq8zBDTtihkOGX0oTqRyAXskvqnDz7jOtcSvRZ7pGfG9cycwU3Ffph4grwMXeHfqhcAT7mhKVuQ82pn5fnoI9vLG1HSEV2C6iJUseM5ffdrMqxPl5a2jrz2GfmbEzVDxNbPUtvqVaV+v9XvYH0Z6667aWd2tCudrTbIRV2spBu6kBjigVSYSeV9GMcE2/DmXPMn4ZFAzcl/GmO8tKI7w2xRF7mPkFe5vTsPSEPS59ZC4Z5srbkUKVjbDm3Rp9wgF2kuVcEErMIx+afV54dE2xO518wMe2uEUdrqTs46s+DqE01k3v1x+GW2qJ7/xO/BiqKRwQSa04iEJoLHiv2lalFGFGLbqy5bWB8/ieCCdntY0MQGBIOOPM0tsB/oA3uDabUXiLp00PS9zltUKDb5qklRL3TtdQ7tR7829yFU+ATgpT/UAAqcu4AAAAASUVORK5CYII="
                className="w-[25px]"
              />
            </figure>
            <div className="about-box-content max-w-[400px]">
              <h4 className="text-[var(--third-color)] text-[16px] font-semibold">
                تطوير خدماتنا بشكل مستمر بمراكز الفحص و البرمجة و تقدير الحوادث
                .
              </h4>
              <p className="text-[#566983] text-[15px] leading-[28.8px]">
                نستثمر في تطوير خدماتنا بشكل مستمر في مراكز الفحص والبرمجة
                وتقدير الحوادث، مما يضمن تلبية احتياجات عملائنا وتحسين تجربتهم.
              </p>
            </div>
          </div>
          <div className="about-box flex items-start flex-col md:flex-row gap-[20px] bg-[#fff] p-[20px] py-[25px] rounded-[8px] cursor-pointer">
            <figure className="flex items-center justify-center  bg-[var(--main-color)] p-[15px] rounded-full">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAgCAYAAAAFQMh/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGoSURBVHgBvZeLcYMwDIZlJsgGJRswApmg1wmADbJByATtBnSDdgPSCdINYINkA1WqgQPHwQ8M352OBCT9tsAyCPAAEVM6vJLtyO5kP0KIb1gDEtuRnchuqKchy8liCAEnInufEdRReQ+Ay0lW4zIqlLfFSjAPIKjScN5ngrsVBFW+WEcVvuI21Kwn+vLSoYLtKKLuRwbbkvUzRggDN5MLWQqyucz5SeEANNitXZRLcZZoMgJ/WrIDtc3WMl/rItw+Oc+xb70oyuVielDvvfCvwfFMifd03GsGUNC1cTyLJoZ8wz3+NNySlz4CZe+uu/PlOBvKTcSGjz7gaHB8KB0qPdhBlMmHJBbO3NliXd3ofIZuJONgm22vmQTJuATdaDguGuUwPWBMTMYz5/2Zq3Si/zW4cQFl5DblDkHKekIRv8F8q1tK2y3LSamZM6zLkF+oV2jWVzA3AB+G2TKRxqGA8HCnOhi90NxQXDmCLeRcYhhKcCWAeAm+oF/ZuQvmsBSUO1JjKcp+4VZFJ27aPh/fmwMOQPelwf9TlzwCPOlm9v+ZSo3B+Z3tD6IV8G3i8NhnAAAAAElFTkSuQmCC"
                alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAgCAYAAAAFQMh/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGoSURBVHgBvZeLcYMwDIZlJsgGJRswApmg1wmADbJByATtBnSDdgPSCdINYINkA1WqgQPHwQ8M352OBCT9tsAyCPAAEVM6vJLtyO5kP0KIb1gDEtuRnchuqKchy8liCAEnInufEdRReQ+Ay0lW4zIqlLfFSjAPIKjScN5ngrsVBFW+WEcVvuI21Kwn+vLSoYLtKKLuRwbbkvUzRggDN5MLWQqyucz5SeEANNitXZRLcZZoMgJ/WrIDtc3WMl/rItw+Oc+xb70oyuVielDvvfCvwfFMifd03GsGUNC1cTyLJoZ8wz3+NNySlz4CZe+uu/PlOBvKTcSGjz7gaHB8KB0qPdhBlMmHJBbO3NliXd3ofIZuJONgm22vmQTJuATdaDguGuUwPWBMTMYz5/2Zq3Si/zW4cQFl5DblDkHKekIRv8F8q1tK2y3LSamZM6zLkF+oV2jWVzA3AB+G2TKRxqGA8HCnOhi90NxQXDmCLeRcYhhKcCWAeAm+oF/ZuQvmsBSUO1JjKcp+4VZFJ27aPh/fmwMOQPelwf9TlzwCPOlm9v+ZSo3B+Z3tD6IV8G3i8NhnAAAAAElFTkSuQmCC"
                className="w-[25px]"
              />
            </figure>
            <div className="about-box-content max-w-[400px]">
              <h4 className="text-[var(--third-color)] text-[16px] font-semibold">
                ضمان الالتزام بتنفيذ خدماتنا و أعمالنا في الموعد المحدد .
              </h4>
              <p className="text-[#566983] text-[15px] leading-[28.8px]">
                نضمن الالتزام بتنفيذ خدماتنا وأعمالنا في الموعد المحدد، مما يعكس
                احترافيتنا ويعزز ثقة عملائنا فينا.
              </p>
            </div>
          </div>
        </div>
        <div className="about-box hidden md:flex md:flex items-center gap-[20px] bg-[#fff] p-[20px] py-[25px] mt-[25px] rounded-[8px] cursor-pointer">
          <figure className="flex items-center justify-center  bg-[var(--main-color)] p-[15px] rounded-full">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGQSURBVHgB7ZjRbYMwEIaPqO9lg7ob0A3YoCM0G7QboG5AJ2gyQZsJkk7QbgAbhE7gnsshIWMHzg5OQvikE+h8tn8ZHwcGmJkgka1BSrnEyyNaDOOyjqJoNTgahWUyLJlJR2QQplZqD2Gp0O5xBau2c2EIHPsxgmXOW925gDPm6sWt0B7AgRtwY4dWogm0tCf2C+oN7w9mqziQ8gVaaoj/NsTmaEtqj+n+hcYwcecrLqWJMppk25p8r8UmTVtrXEF9ji5uS+3vmr8gf27p16xeHx1xnIQo6ZpofkED/1j6Ob83XRJijbbRfL8H4p+hrtFs2OKwxOQmP66erYsgY8N+z0lztvVvZgcmVyFipt8Zzp5Tr4TEImIHJxanSCx+ASNw1nuOs3KqeH+CH+rRp+C6BfrKly84zsfQ8sVZubSpo56IoYHchBAQkMkkRAl10e9DFfpx/uB8EkLWH52FdMM7ISQEZP5vdcUkroJj/crx6HxNd8TRYcobhOVVP8T512KLlvX53BOMixK0YZ3PzVw6fwFJlHAjJh3wAAAAAElFTkSuQmCC"
              alt="exam"
            />
          </figure>
          <div className="about-box-content max-w-[90%]">
            <h4 className="text-[var(--third-color)] text-[17px] font-semibold">
              توفير كافة خدماتنا للعملاء بأسعار معقولة و تنافسية للغاية.
            </h4>
            <p className="text-[#566983] text-[15px] leading-[28.8px]">
              نحرص على توفير كافة خدماتنا للعملاء بأسعار معقولة وتنافسية للغاية،
              مما يتيح لهم الاستفادة من جودة عالية وخدمات متميزة دون التأثير على
              ميزانيتهم. نحن نؤمن أن القيمة تأتي من الجمع بين الجودة والسعر
              المناسب.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
