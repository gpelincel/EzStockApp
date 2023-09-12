import { FaFilter, FaCirclePlus, FaFileExcel } from "react-icons/fa6";

export default function ToolBar() {
    return (
        <div className="toolBar flex w-4/5">
            <ul className="menu bg-base-200 lg:menu-horizontal rounded-box w-screen flex justify-center">
                <li>
                    <label htmlFor="register" className="btn">
                        <FaCirclePlus></FaCirclePlus>
                        Cadastrar
                    </label>
                </li>
                <li>
                    <label htmlFor="" className="btn flex items-center">
                        <FaFilter></FaFilter>
                        <p>Filtrar</p>
                    </label>
                </li>
                <li>
                    <label htmlFor="" className="btn flex items-center">
                        <FaFileExcel></FaFileExcel>
                        <p>Exportar</p>
                    </label>
                </li>
            </ul>
        </div>
    );
}