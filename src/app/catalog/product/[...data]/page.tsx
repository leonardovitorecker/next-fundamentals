interface ProductProps {
  params: {
    data: string[];
  };
}

export default function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data;

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
    </div>
  );
}
