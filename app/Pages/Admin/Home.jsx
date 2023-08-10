import Menu from "../../Components/Admin/Menu/Menu";
import { Outlet } from "@remix-run/react";

export default function Home() {
    return (
        <>
            <Menu></Menu>
        </>
    );
}