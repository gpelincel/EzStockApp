import Feature from "./Features.feature";

export default function Features() {
    return (
        <div className="flex items-center justify-center w-1/2 h-screen">
            <div className="features rounded grid grid-cols-3 gap-5">
                <Feature featureName="Caixa"></Feature>
                <Feature featureName="Estoque"></Feature>
                <Feature featureName="Fornecedores"></Feature>
            </div>
        </div>

    );
}