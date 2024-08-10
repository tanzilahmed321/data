import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);

  const [singleData, setSingleData] = useState([]);

  useEffect(() => {
    getSingleData();
  }, []);

  const getSingleData = async () => {
    const dataFromApi = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );
    console.log(dataFromApi.data);
    setSingleData([dataFromApi.data]);
  };
  console.log(singleData);
  return (
    <>
      <h1>hello</h1>
      {singleData?.map((e, i) => {
        return (
          <div key={i}>
            <img src={e.image} alt="" />
            <h1>{e.title}</h1>
            <h1>{e.description}</h1>
          </div>
        );
      })}
    </>
  );
};

export default SingleProduct;
