import Desktop from "../../../Components/Admin/Menu/Menu.Desktop";
import Table from "../../../Components/Stock/Stock.table";
import ToolBar from "../../../Components/Stock/Stock.toolBar";
import Register from "../../../Components/Form/Forms/Product/Product.register";
import { FaRegCircleXmark } from "react-icons/fa6";

export default function Stock() {
    return (
        <>
            <Desktop></Desktop>
            <main className="p-8 flex items-center flex-col">
                <ToolBar></ToolBar>
                <Table></Table>
            </main>
            <input type="checkbox" id="register" className="modal-toggle" />
            <div className="modal">

                <div className="modal-box">
                    <label htmlFor="register" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className="prose justify-self-center text-center uppercase text-lg mb-2"><b>Cadastrar produto</b></h1>
                    <Register>
                    </Register>
                </div>
            </div>
        </>
    );
}