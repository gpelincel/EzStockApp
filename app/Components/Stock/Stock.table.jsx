import { useEffect, useState } from "react";
import instance from "../../services/API";
import ProductRow from "./Stock.table.row";

export default function Table() {

    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        instance
            .get('products')
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => console.error(error))
    }, []);

    if (isLoading) {
        return (
            <span className="loading loading-spinner loading-lg"></span>
        );
    }

    console.log(products);

    return (
        <div className="overflow-x-auto mt-10 bg-neutral color-neutral-content rounded-lg" style={{height: 60 + "vh"}}>
            <table className="table table-sm table-zebra table-pin-rows">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Marca</th>
                        <th>Qtd.</th>
                        <th>Preço de custo</th>
                        <th>Preço de venda</th>
                        <th>Validade</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return (
                            <ProductRow
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                brand={product.brand ? product.brand.name : ''}
                                metric={product.metric.metric}
                                quantity={product.quantity}
                                price_cost={product.price_cost}
                                price_sale={product.price_sale}
                                valid_until={product.valid_until}>
                            </ProductRow>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}