import { Outlet } from "@remix-run/react";

export default function index() {
    return (
        <>
            <Outlet></Outlet>
        </>
    );
}