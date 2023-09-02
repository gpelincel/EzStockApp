import { FaPenToSquare, FaTrash } from "react-icons/fa6";

export default function ProductRow(props) {

    let valid_until = new Date(props.valid_until).toLocaleDateString("pt-br");
    
    return (
        <tr>
            <th>{props.id}</th>
            <td>{props.name}</td>
            <td>{props.brand}</td>
            <td>{props.quantity} {props.metric}</td>
            <td>R$ {props.price_cost}</td>
            <td>R$ {props.price_sale}</td>
            <td>{valid_until}</td>
            <td><button className="btn btn-primary"><FaPenToSquare></FaPenToSquare></button></td>
            <td><button className="btn btn-secondary"><FaTrash></FaTrash></button></td>
        </tr>
    );
}