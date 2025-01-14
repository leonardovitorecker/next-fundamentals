export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    "https://api.github.com/users/leonardovitorecker"
  );

  const user = await response.json();
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}
