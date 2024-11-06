"use client";
import { useState } from "react";

export function AddToCartButton() {
  const [count, setCount] = useState(0);

  function addToCart() {
    setCount((state) => state + 1);
  }

  return <button onClick={addToCart}>Add to Cart ({count})</button>;
}
