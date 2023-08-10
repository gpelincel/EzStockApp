import Form from './SignUp.Form';
import background from './../../Assets/background-signup.jpg';

export default function Hero() {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${background})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex-col text-white lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Cadastre-se agora!</h1>
                    <p className="py-6">Junte-se a nós e simplifique o gerenciamento do seu estoque e frente de caixa! Cadastre-se agora e tenha acesso a todas as ferramentas e recursos que você precisa para impulsionar o sucesso do seu negócio</p>
                </div>
                <Form></Form>
            </div>
        </div>
    );
}