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
        </tr>
    );
}