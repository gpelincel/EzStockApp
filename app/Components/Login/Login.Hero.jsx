import Form from './Login.Form';
import background from './../../Assets/background-login.jpg';
import logo from './../../Assets/Logo-branca.png';

export default function Hero() {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${background})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex-col text-white lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={logo} alt="" />
                    <p className="py-6">Bem-vindo ao nosso poderoso sistema de estoque e frente de caixa! Desbloqueie o potencial do seu negócio. Faça login agora e controle seu estoque de forma eficiente, gerencie suas vendas e impulsione seus lucros!</p>
                </div>
                <Form></Form>
            </div>
        </div>
    );
}