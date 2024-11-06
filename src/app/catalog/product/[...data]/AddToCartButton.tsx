"use client";
import { ReactNode, useState } from "react";

export function AddToCartButton({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  function addToCart() {
    setCount((state) => state + 1);
  }

  return (
    <button onClick={addToCart}>
      Add to Cart ({count}){children}
    </button>
  );
}
