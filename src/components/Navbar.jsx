import React,{useState} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineSearch,AiOutlineClose, AiFillTag} from 'react-icons/ai';
import {TbTruckDelivery} from 'react-icons/tb';
import {BsFillCartFill,BsFillSaveFill} from 'react-icons/bs';
import {FaUserFriends, FaWallet, FaHome} from 'react-icons/fa';
import {MdFavorite, MdHelp} from 'react-icons/md';


function Navbar() {
    const [nav, setNav]=useState(false);
    const HandleNav=()=>{
        setNav(!nav);
    }
  return (
    <div className='max-w-[1640px] mx-auto flex py-2 shadow-sm justify-between items-center px-4'>
        {/* Menu Left */}
        <div className='flex items-center'>
            <div className='cursor-pointer'>
                <AiOutlineMenu onClick={HandleNav} size={30} />
            </div>
            <div>
                <h1 className='text-2xl sm:text-3xl px-2 lg:text-4xl'>
                    Best<span className='font-bold'>Eats</span>
                </h1>
            </div>
            <div className='hidden md:flex items-center bg-gray-100 rounded-full text-[14px] p-1'>
                <p className='bg-black text-white rounded-full py-1 px-2'>Delivery</p>
                <p className='py-1 px-2'>Pickup</p>
            </div>
        </div>
        <div className='bg-gray-100 ms-2 rounded-full flex items-center w-[200px] px-2 sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={24} className='text-slate-500 mx-2' />
            <input type="text" className='bg-transparent p-2 w-full focus:outline-none' placeholder='rechercher dans les menus'/>
        </div>
        <button className='bg-black flex md:flex mx-2 text-white rounded-full'>
            <BsFillCartFill size={20}  className="mr-2" /><span className='hidden md:flex'>Panier</span><span className='bg-red-600 rounded-full p-1 px-2 text-xs'>20</span>
        </button>

        {/*Nav Menu backdrop */}
        {nav && <div onClick={HandleNav} className='bg-black/60 duration-300 z-10 fixed top-0 left-0 h-screen w-full'></div>}
        {/*Content Menu */}
        <div className={nav?'bg-white z-10 left-0 fixed  top-0 w-[300px] h-screen duration-300':'bg-white z-10 left-[-100%] fixed  top-0 w-[300px] h-screen duration-300'} >
            <AiOutlineClose onClick={HandleNav} size={20} className='absolute text-slate-500 cursor-pointer right-4 top-4' />
            <h1 className='text-2xl sm:text-3xl p-4 lg:text-4xl'>
                    Best<span className='font-bold'>Eats</span>
            </h1>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li ><a  className='text-xl flex p-2' href='/page1'><FaHome size={25} className='mr-4'/>Accueil</a></li>
                    <li ><a  className='text-xl flex p-2' href='/page1'><TbTruckDelivery size={25} className='mr-4'/>Commandes</a></li>
                    <li ><a  className='text-xl flex p-2' href='/page1'><MdFavorite size={25} className='mr-4'/>Favoris</a></li>
                    <li ><a  className='text-xl flex p-2' href='/page1'><FaWallet size={25} className='mr-4'/>Porte monnaies</a></li>
                    <li ><a  className='text-xl flex p-2' href='/page1'><MdHelp size={25} className='mr-4'/>Aide</a></li>
                    <li ><a  className='text-xl flex p-2' href='/page1'><BsFillSaveFill size={25} className='mr-4'/>Promotions</a></li>
                    <li ><a  className='text-xl flex p-2' href='/page1'><AiFillTag size={25} className='mr-4'/>Best One</a></li>
                    <li ><a  className='text-xl flex p-2' href='/page1'><FaUserFriends size={25} className='mr-4'/>Inviter des amis</a></li>
                    </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
