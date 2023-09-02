import { FaFilter, FaCirclePlus, FaFileExcel } from "react-icons/fa6";

export default function ToolBar() {
    return (
        <div className="toolBar flex w-4/5">
            <ul className="menu bg-base-200 lg:menu-horizontal rounded-box w-screen flex justify-center">
                <li>
                    <a>
                        <FaCirclePlus></FaCirclePlus>
                        Cadastrar
                    </a>
                </li>
                <li>
                    <a>
                        <FaFilter></FaFilter>
                        Filtrar
                    </a>
                </li>
                <li>
                    <a>
                        <FaFileExcel></FaFileExcel>
                        Exportar
                    </a>
                </li>
            </ul>
        </div>
    );
}