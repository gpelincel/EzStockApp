import logo from '../../../Assets/Logo-branca.png';
import Items from './Menu.Items';

export default function Desktop() {
    return (
        <div className="w-full navbar bg-base-200">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="flex-1 px-2 mx-2">
                <img className="w-1/4" src={logo} alt="" />
            </div>
            <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                    <Items></Items>
                </ul>
            </div>
        </div>
    );
}