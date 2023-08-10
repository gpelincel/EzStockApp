import Items from "./Menu.Items";

export default function Mobile() {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200">
                {/* Sidebar content here */}
                <Items></Items>
            </ul>
        </div>
    );
}