import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/detail/${props.item.id}`);
  };
  return (
    <div className="card" onClick={showDetail}>
      <img src={props.item?.img} alt="이미지" />
      <div>{props.item?.choice === true ? "Conscious choice" : ""}</div>
      <div>{props.item?.title}</div>
      <div>{props.item?.price}</div>
      <div>{props.item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
