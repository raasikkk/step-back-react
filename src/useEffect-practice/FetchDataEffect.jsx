import { useEffect } from "react";
import { useState } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();

        if (data || data.length) setData(data);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, []);

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchDataEffect;
