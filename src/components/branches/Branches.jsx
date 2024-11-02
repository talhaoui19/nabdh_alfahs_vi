import { Link } from "react-router-dom";
import { branches_data } from "../../content/data";
import { useTranslation } from "react-i18next";
const Branches = () => {
  const { t } = useTranslation();
  return (
    // START BRANCHES SECTION
    <section id="branches" className="py-[40px]">
      <div className="container">
        <div className="text-center">
          <h4 className="text-[var(--main-color)] text-[25px] md:text-[30px] font-bold">
            {t("our_branches.title")}
          </h4>
        </div>
        <div className="grid grid-cols-1 gap-8 mb-20 mt-8">
          {branches_data.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col items-start justify-start gap-2"
              >
                <span className="text-[20px] text-[var(--main-color)] font-medium">
                  {t(`our_branches.${item.id}.title`)}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={22}
                  viewBox="0 0 20 22"
                  fill="none"
                >
                  <path
                    d="M10.3986 20.1389L10.8546 21.0289L10.3986 20.1389ZM9.60142 20.1389L9.14544 21.0289H9.14544L9.60142 20.1389ZM17.1667 9.83366C17.1667 12.431 15.8266 14.5576 14.1913 16.1863C12.5577 17.8135 10.7174 18.8519 9.94262 19.2489L10.8546 21.0289C11.7182 20.5864 13.7619 19.4368 15.6027 17.6034C17.4419 15.7716 19.1667 13.1653 19.1667 9.83366H17.1667ZM10 2.66699C13.958 2.66699 17.1667 5.87562 17.1667 9.83366H19.1667C19.1667 4.77105 15.0626 0.666992 10 0.666992V2.66699ZM2.83334 9.83366C2.83334 5.87562 6.04197 2.66699 10 2.66699V0.666992C4.9374 0.666992 0.833344 4.77105 0.833344 9.83366H2.83334ZM10.0574 19.2489C9.28262 18.8519 7.44235 17.8135 5.80867 16.1863C4.17339 14.5576 2.83334 12.431 2.83334 9.83366H0.833344C0.833344 13.1653 2.55815 15.7716 4.39731 17.6034C6.23808 19.4368 8.28185 20.5864 9.14544 21.0289L10.0574 19.2489ZM9.94262 19.2489C9.95496 19.2426 9.97511 19.2363 10 19.2363C10.0249 19.2363 10.0451 19.2426 10.0574 19.2489L9.14544 21.0289C9.68525 21.3054 10.3148 21.3054 10.8546 21.0289L9.94262 19.2489ZM12.5 9.83366C12.5 11.2144 11.3807 12.3337 10 12.3337V14.3337C12.4853 14.3337 14.5 12.3189 14.5 9.83366H12.5ZM10 7.33366C11.3807 7.33366 12.5 8.45295 12.5 9.83366H14.5C14.5 7.34838 12.4853 5.33366 10 5.33366V7.33366ZM7.50001 9.83366C7.50001 8.45295 8.6193 7.33366 10 7.33366V5.33366C7.51473 5.33366 5.50001 7.34838 5.50001 9.83366H7.50001ZM10 12.3337C8.6193 12.3337 7.50001 11.2144 7.50001 9.83366H5.50001C5.50001 12.3189 7.51473 14.3337 10 14.3337V12.3337Z"
                    fill="#33363F"
                  />
                </svg>
                <span className="font-medium">
                  {t(`our_branches.${item.id}.location_1`)}
                </span>
                <span className="font-medium">
                  {t(`our_branches.${item.id}.location_2`)}
                </span>
                {t(`our_branches.${item.id}.location_3`) !==
                `our_branches.${item.id}.location_3` ? (
                  <span className="font-medium">
                    {t(`our_branches.${item.id}.location_3`)}
                  </span>
                ) : (
                  ""
                )}
                <Link
                  dir="ltr"
                  to={`tel:${item.phone}`}
                  className="p-2 bg-[var(--main-color)] text-white rounded-[8px]"
                >
                  {t(`our_branches.${item.id}.phone`)}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    // END BRANCHES SECTION
  );
};

export default Branches;
