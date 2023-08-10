export const meta = () => {
  return [
    { title: "EzStock" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import Login from "./../Pages/Login";
import { Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <Login></Login>
      <Outlet></Outlet>
    </div>
  );
}
