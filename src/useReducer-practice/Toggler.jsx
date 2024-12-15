import { useReducer, useState } from "react";
import "../index.css";

const initialState = {
  content:
    "В г. Атырау, лидер в области продаж оборудования для торговых точек и HORECA по западному региону Казахстана. Компания также является эксклюзивным дилером ведущих мировых производителей холодильного и морозильного оборудования. Мы реализуем только сертифицированный товар с заводской гарантией и последующим сервисным обслуживанием. Компания предлагает современное POS оборудование и запасные части для холодильного оборудования по выгодным ценам.",
};

const contentReducer = (state, action) => {
  switch (action.type) {
    case "portfolio":
      return {
        ...state,
        content: (state.content =
          "Обеспечивать предприятия Казахстана высококачественным оборудованием для торговли и HORECA, предлагая сертифицированную продукцию с заводской гарантией и профессиональным сервисным обслуживанием."),
      };
    case "project":
      return {
        ...state,
        content: (state.content =
          "Стать ведущим поставщиком торгового и холодильного оборудования в регионе, расширяя ассортимент и улучшая сервис для обеспечения максимального удовлетворения потребностей наших клиентов."),
      };
    default:
      return {
        ...state,
        content: (state.count =
          "В г. Атырау, лидер в области продаж оборудования для торговых точек и HORECA по западному региону Казахстана. Компания также является эксклюзивным дилером ведущих мировых производителей холодильного и морозильного оборудования. Мы реализуем только сертифицированный товар с заводской гарантией и последующим сервисным обслуживанием. Компания предлагает современное POS оборудование и запасные части для холодильного оборудования по выгодным ценам."),
      };
  }
};

const Toggler = () => {
  const [state, dispatch] = useReducer(contentReducer, initialState);

  const [isBtnActive, setIsBtnActive] = useState("default");

  const handleClick = (btnType) => {
    setIsBtnActive(btnType);
    dispatch({ type: btnType });
  };

  const handleBtnColor = (btnType) => {
    return btnType === isBtnActive ? "bg-blue-500" : "bg-blue-400";
  };

  return (
    <div>
      <div className="mt-5 flex justify-center gap-5 w-1/2 mx-auto">
        <button
          className={`btn ${handleBtnColor("default")}`}
          onClick={() => handleClick("default")}
        >
          Default
        </button>
        <button
          className={`btn ${handleBtnColor("portfolio")}`}
          onClick={() => handleClick("portfolio")}
        >
          Portfolio
        </button>
        <button
          className={`btn ${handleBtnColor("project")}`}
          onClick={() => handleClick("project")}
        >
          Project
        </button>
      </div>
      <div className="w-1/2 mx-auto mt-5">
        <h3 className="text-center">{state.content}</h3>
      </div>
    </div>
  );
};

export default Toggler;
