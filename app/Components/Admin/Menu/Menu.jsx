import Desktop from './Menu.Desktop';
import Mobile from './Menu.Mobile';
import Features from '../Features/Features.menu';
import { Outlet } from '@remix-run/react';

export default function Menu() {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <Desktop></Desktop>
                {/* Page content here */}
                <Features></Features>
            </div>
            <Mobile></Mobile>
        </div>
    );
}