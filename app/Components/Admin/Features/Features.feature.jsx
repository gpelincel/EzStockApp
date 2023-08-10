import { FaCashRegister, FaDolly, FaBox } from "react-icons/fa6";

export default function Feature(props) {
    function getIcon() {
        if (props.featureName == "Caixa") {
            return <FaCashRegister size={'2em'} className="mb-3"></FaCashRegister>
        } else if (props.featureName == "Estoque") {
            return <FaBox size={'2em'} className="mb-3"></FaBox>
        } else if (props.featureName == "Fornecedores") {
            return <FaDolly size={'2em'} className="mb-3"></FaDolly>
        }
    }

    const icon = getIcon();

    return (
        <a className="feature" href="/admin/stock">
            <div className="bg-base-300 text-base-content flex items-center flex-col p-7 rounded shadow-lg hover:bg-primary-content hover:text-neutral transition ease-in delay-100">
                {icon}
                <h1>{props.featureName}</h1>
            </div>
        </a>
    );
}