import { AddToCartButton } from "./AddToCartButton";

interface ProductProps {
  params: {
    data: string[];
  };
}

// Server Components => A gente não USA JavaScript no lado do cliente
// Client Components => O JavaScript é enviado ao navegador (client)

// Streming SSR => Ler/escrever dados de forma parcial + Server-side Rendering

// Renderizar um componente pelo lado do servidor de forma PARCIAL
export default async function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data;

  const response = await fetch(
    "https://api.github.com/users/leonardovitorecker"
  );

  const user = await response.json();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
      <AddToCartButton />
    </div>
  );
}
