import { InputText, InputNumber, InputSelect } from "../../inputs";
import { FaClipboardList, FaCartPlus, FaRuler, FaSackDollar, FaCopyright, FaTruckFast } from "react-icons/fa6";

export default function Register() {
    let options = [{
        "id": 1,
        "name": "Fornecedor1",
        "value": 1
    },
    {
        "id": 2,
        "name": "Fornecedor2",
        "value": 2
    }];

    console.log(options);
    return (
        <form>
            <InputText name="product_name" label="Nome do Produto" icon={<FaClipboardList className="mr-1 text-2xl" />} placeholder="Produto"></InputText>
            <div className="grid grid-cols-2 gap-4">
                <InputNumber name="quantity" label="Quantidade" icon={<FaCartPlus className="mr-1 text-2xl" />} placeholder="0.00" min="0"></InputNumber>
                <InputSelect name="metric" icon={<FaRuler className="mr-1 text-2xl" />} label="Medida" options={options}></InputSelect>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <InputNumber name="price_cost" icon={<FaSackDollar className="mr-1 text-2xl" />} label="Preço de custo" placeholder="0.00" min="0"></InputNumber>
                <InputNumber name="price_sale" icon={<FaSackDollar className="mr-1 text-2xl" />} label="Preço de venda" placeholder="0.00" min="0"></InputNumber>
            </div>
            <InputSelect name="brand" icon={<FaCopyright className="mr-1 text-2xl" />} label="Marca" options={options}></InputSelect>
            <InputSelect name="supplier" icon={<FaTruckFast className="mr-1 text-2xl" />} label="Fornecedor" options={options}></InputSelect>
            <button type="submit" className="btn btn-primary mt-8">Cadastrar Produto</button>
        </form>
    );
}