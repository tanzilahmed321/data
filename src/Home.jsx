import React, { useEffect, useState } from "react";
import Cards from "./component/cards";
import axios from "axios";

const Home = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductData(res.data);
    console.log(res.data);
  };
  // };
  return (
    <>
      <h1>hellpo</h1>
      {productData.map((e, i) => {
        return (
          <div key={i} style={{ display: "inline-block" }}>
            <Cards title={e.title} image={e.image} desc={e.desc} id={e.id}/>
          </div>
        );
      })}
    </>
  );
};

export default Home;
