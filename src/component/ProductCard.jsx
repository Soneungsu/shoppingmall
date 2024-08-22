import React from "react";

const ProductCard = (props) => {
  return (
    <div className="card">
      <img src={props.item?.img} alt="이미지" />
      <div>{props.item?.choice === true ? "Conscious choice" : ""}</div>
      <div>{props.item?.title}</div>
      <div>{props.item?.price}</div>
      <div>{props.item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
