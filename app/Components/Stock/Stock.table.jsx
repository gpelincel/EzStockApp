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
            <div className="flex items-center justify-center w-full">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    console.log(products);

    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Marca</th>
                        <th>Qtd.</th>
                        <th>Preço de custo</th>
                        <th>Preço de venda</th>
                        <th>Validade</th>
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