import Desktop from "../../../Components/Admin/Menu/Menu.Desktop";
import Table from "../../../Components/Stock/Stock.table";
import { Outlet } from "@remix-run/react";

export default function Stock() {
    return (
        <>
            <Desktop></Desktop>
            <Table></Table>
        </>
    );
}