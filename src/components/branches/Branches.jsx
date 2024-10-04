import { useState } from "react";
import { questionBox } from "../../content/data";
import styles from "../../style";

const Branches = () => {
  const [ActiveBox, setActiveBox] = useState(null);
  const handleBoxClick = (index) => {
    setActiveBox((prevActiveBox) => (prevActiveBox === index ? null : index));
  };
  return (
    <section className="question relative mb-[120px]">
      <div className="container">
        <div className="text-center">
          <div className="main-title mt-[60px] md:mt-[80px]">
            <h4 className="text-[var(--sec-color)] text-[40px] md:text-[50px] font-black">
              فروعنا
            </h4>
            <p className="text-[#808D9E] text-[16px] mx-auto font-normal leading-[1.6] md:w-[80%] mt-[5px]">
              نفتخر بتعدد فروعنا التي تتيح لنا تقديم خدماتنا بسهولة وتلبية
              احتياجات العملاء في مختلف المناطق.{" "}
            </p>
          </div>
          <div className="question-boxs grid grid-cols-1 md:grid-cols-2 justify-center gap-[40px] mt-[45px] md:mt-[100px]">
            {questionBox.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`question-box ${
                    ActiveBox === index ? "active" : ""
                  } bg-[#fff] ${
                    styles.flexBetween
                  } px-[20px] md:px-[40px] py-[30px] rounded-[9px] cursor-pointer`}
                >
                  <div className="title">
                    <h4 className="text-[#2B2F4E] text-[15px] md:text-[17px] font-semibold mt-[8px] text-right">
                      {item.title}
                    </h4>
                    {ActiveBox === index && (
                      <p className="text-[#808D9E] text-[14px] md:text-[16px] mt-[7px] text-right w-[95%] md:w-[80%]">
                        {item.pargraph}
                      </p>
                    )}
                  </div>
                  <figure>
                    {ActiveBox === index ? (
                      <>
                        <svg
                          onClick={() => handleBoxClick(index)}
                          width="27px"
                          height="27px"
                          viewBox="0 0 32 32"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                          fill="#0f4c75"
                          stroke="#0f4c75"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0" />

                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />

                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <title>arrow-up-circle</title>{" "}
                            <desc>Created with Sketch Beta.</desc>{" "}
                            <defs> </defs>{" "}
                            <g
                              id="Page-1"
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                              sketch:type="MSPage"
                            >
                              {" "}
                              <g
                                id="Icon-Set"
                                sketch:type="MSLayerGroup"
                                transform="translate(-360.000000, -1087.000000)"
                                fill="#0f4c75"
                              >
                                {" "}
                                <path
                                  d="M376,1117 C368.268,1117 362,1110.73 362,1103 C362,1095.27 368.268,1089 376,1089 C383.732,1089 390,1095.27 390,1103 C390,1110.73 383.732,1117 376,1117 L376,1117 Z M376,1087 C367.163,1087 360,1094.16 360,1103 C360,1111.84 367.163,1119 376,1119 C384.837,1119 392,1111.84 392,1103 C392,1094.16 384.837,1087 376,1087 L376,1087 Z M376.879,1096.46 C376.639,1096.22 376.311,1096.15 376,1096.21 C375.689,1096.15 375.361,1096.22 375.121,1096.46 L369.465,1102.12 C369.074,1102.51 369.074,1103.14 369.465,1103.54 C369.854,1103.93 370.488,1103.93 370.879,1103.54 L375,1099.41 L375,1110 C375,1110.55 375.447,1111 376,1111 C376.553,1111 377,1110.55 377,1110 L377,1099.41 L381.121,1103.54 C381.512,1103.93 382.145,1103.93 382.535,1103.54 C382.926,1103.14 382.926,1102.51 382.535,1102.12 L376.879,1096.46 L376.879,1096.46 Z"
                                  id="arrow-up-circle"
                                  sketch:type="MSShapeGroup"
                                >
                                  {" "}
                                </path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </>
                    ) : (
                      <>
                        <svg
                          onClick={() => handleBoxClick(index)}
                          width="27px"
                          height="27px"
                          viewBox="0 0 32 32"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                          fill="#808d9e"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0" />

                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />

                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <title>arrow-down-circle</title>{" "}
                            <desc>Created with Sketch Beta.</desc>{" "}
                            <defs> </defs>{" "}
                            <g
                              id="Page-1"
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                              sketch:type="MSPage"
                            >
                              {" "}
                              <g
                                id="Icon-Set"
                                sketch:type="MSLayerGroup"
                                transform="translate(-412.000000, -1087.000000)"
                                fill="#808d9e"
                              >
                                {" "}
                                <path
                                  d="M428,1117 C420.268,1117 414,1110.73 414,1103 C414,1095.27 420.268,1089 428,1089 C435.732,1089 442,1095.27 442,1103 C442,1110.73 435.732,1117 428,1117 L428,1117 Z M428,1087 C419.163,1087 412,1094.16 412,1103 C412,1111.84 419.163,1119 428,1119 C436.837,1119 444,1111.84 444,1103 C444,1094.16 436.837,1087 428,1087 L428,1087 Z M433.121,1102.46 L429,1106.59 L429,1096 C429,1095.45 428.553,1095 428,1095 C427.448,1095 427,1095.45 427,1096 L427,1106.59 L422.879,1102.46 C422.488,1102.07 421.855,1102.07 421.465,1102.46 C421.074,1102.86 421.074,1103.49 421.465,1103.88 L427.121,1109.54 C427.361,1109.78 427.689,1109.85 428,1109.79 C428.311,1109.85 428.639,1109.78 428.879,1109.54 L434.535,1103.88 C434.926,1103.49 434.926,1102.86 434.535,1102.46 C434.146,1102.07 433.512,1102.07 433.121,1102.46 L433.121,1102.46 Z"
                                  id="arrow-down-circle"
                                  sketch:type="MSShapeGroup"
                                >
                                  {" "}
                                </path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </>
                    )}
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
