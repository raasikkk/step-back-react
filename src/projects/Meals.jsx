import axios from "axios";
import { useState, useEffect } from "react";
import "./meals.css";

const Meals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((data) => {
        setData(data.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemsList = data.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section key={idMeal} className="card">
        <img src={strMealThumb} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="items-container">{itemsList}</div>;
};

export default Meals;
