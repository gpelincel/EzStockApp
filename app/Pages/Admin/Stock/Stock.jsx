import Desktop from "../../../Components/Admin/Menu/Menu.Desktop";
import Table from "../../../Components/Stock/Stock.table";
import ToolBar from "../../../Components/Stock/Stock.toolBar";

export default function Stock() {
    return (
        <>
            <Desktop></Desktop>
            <main className="p-8 flex items-center flex-col">
                <ToolBar></ToolBar>
                <Table></Table>
            </main>
        </>
    );
}