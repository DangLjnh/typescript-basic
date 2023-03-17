import React, { useEffect } from "react";
import { ICard } from "../util/interface";

const Card = ({ title, desc, image, link }: ICard) => {
  useEffect(() => {
    const input = document.querySelector("input") as HTMLInputElement;
    console.log("🚀 ~ file: Card.tsx:7 ~ useEffect ~ input", input.value);
  }, []);
  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default Card;
