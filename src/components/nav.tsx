import { useNavigate } from "react-router-dom";
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import { useState } from "react";

function Nav() {
    const navigate = useNavigate();
    const [navOpen, setnavOpen] = useState<boolean>(false);
    const [searchOpen, setsearchOpen] = useState<boolean>(false);

    return (
        <div className="fixed flex top-0 w-full h-16 z-50 text-white justify-between px-[65px]">
            {/* Desktop Menu */}
            <ul className="flex gap-4 items-center max-lg:hidden">
                <li className="h-fit hover:cursor-pointer hover:text-white/70 duration-300" onClick={()=> navigate('/')}>Home</li>
                <li className="h-fit hover:cursor-pointer hover:text-white/70 duration-300" onClick={()=> navigate('/shop')}>Shop</li>
                <li className="h-fit hover:cursor-pointer hover:text-white/70 duration-300" onClick={()=> navigate('/about')}>About Us</li>
                <li className="h-fit hover:cursor-pointer hover:text-white/70 duration-300" onClick={()=> navigate('/contact')}>Contact Us</li>
            </ul>
            {/* search and cart */}
            <div className="flex items-center gap-4 max-lg:hidden">
                <div className={`flex gap-4 ${searchOpen? 'bg-white':'bg-transparent'} p-2`}>
                    {searchOpen &&(
                        <input type="text" placeholder="search" className="text-black pl-2 cursor-pointer border-none outline-none"/>
                    )}
                    <Search color={searchOpen? 'black': 'white'} className="justify-end transition-color duration-300" onClick={()=>setsearchOpen(!searchOpen)}/>
                </div>
                <ShoppingCart/>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button className="hidden fixed right-8 top-8 max-lg:block z-10" onClick={() => setnavOpen(!navOpen)}>
                {navOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-full w-3/4 bg-black/30 backdrop-blur-sm transition-transform duration-500 ${navOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className={`flex flex-col w-full gap-10 px-[65px] items-center mt-20 transition-opacity duration-500 ${navOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <li className="h-fit hover:cursor-pointer hover:text-white/70 duration-300" onClick={()=>{ navigate('/'); setnavOpen(false)}}>Home</li>
                    <li className="h-fit hover:cursor-pointer hover:text-white/70 duration-300" onClick={()=> {navigate('/shop'); setnavOpen(false)}}>Shop</li>
                    <li className="h-fit hover:cursor-pointer hover:text-white/70 duration-300" onClick={()=> {navigate('/about'); setnavOpen(false)}}>About Us</li>
                    <li className="h-fit hover:cursor-pointer hover:text-white/70 duration-300" onClick={()=> {navigate('/contact'); setnavOpen(false)}}>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;
