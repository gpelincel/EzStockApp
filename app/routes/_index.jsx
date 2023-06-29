export const meta = () => {
  return [
    { title: "EzStock" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import Login from "./../Pages/Login";

export default function Index() {
  return (
    <div>
      <Login></Login>
    </div>
  );
}
