import React from 'react';
import Facebook from '../assets/icon-facebook.svg';
import Youtube from '../assets/icon-youtube.svg';
import Twitter from '../assets/icon-twitter.svg';
import Pinterest from '../assets/icon-pinterest.svg';
import Instagram from '../assets/icon-instagram.svg';

function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-t-[5px] border-orange-500 text-slate-200">
        <div className="container flex flex-col-reverse justify-between px-4 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
            <div className="flex_flex-col-reverse items-center justify-between space-y-4  md:flex-row md:space-y-4 md:items-start">
                <div className="mx-auto text-sm my-6 text-center text-slate-400 md:hidden">
                Copyright &copy; 2022, Tout droit réservé.
                </div>
                <div className="text-center text-md-start">
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl'>
                        Best<span className='font-bold'>Eats</span>
                    </h1>
                </div>
                <div className="flex justify-center space-x-4">
                    <a href="/v1">
                        <img src={Facebook} alt="/" className="h-8" />
                    </a>
                    <a href="/v1">
                        <img src={Youtube} alt="/" className="h-8" />
                    </a>
                    <a href="/v1">
                        <img src={Twitter} alt="/" className="h-8" />
                    </a>
                    <a href="/v1">
                        <img src={Instagram} alt="/" className="h-8" />
                    </a>
                </div>
            </div>
            <div className="flex justify-around  space-x-32 ">
                <div className="flex flex-col space-y-3 ">
                    <a href="/m" className="hover:text-orange-400 text-white">
                        Aide
                    </a>
                   <a href="/m" className="hover:text-orange-400 text-white">
                        A propos
                    </a> 
                    <a href="/m" className="hover:text-orange-400 text-white">
                        Best One
                    </a>
                    <a href="/m" className="hover:text-orange-400 text-white">
                        Commandes
                    </a>
                    
                    
                    

                </div>

                <div className="flex flex-col space-y-3 hover:text-orange-700 text-white">
                    <a href="/m" className="hover:text-orange-400 text-white">
                        Promotions
                    </a>
                    <a href="/m" className="hover:text-orange-400 text-white">
                        Communauté
                    </a>
                   
                    <a href="/m" className="hover:text-orange-400 text-white">
                        Cookies
                    </a>
                    <a href="/m" className="hover:text-orange-400 text-white">
                        Condition d'utilisations
                    </a>
                </div>
            </div>
            <div className="flex  flex-col justify-between">
                <form action="">
                    <div className="flex space-x-3">
                        <input placeholder='Entrez votre adresse email...' type="text" className="flex-1 px-4 py-2 w-[300px] rounded-full focus:outline-none" />
                        <button className="px-6 hover:text-orange-700 text-white bg-orange-500 py-2 rounded-full hover:bg-white hover:text-black focus:outline-none">Go</button>
                    </div>
                </form>
                <div className="hidden py-6  text-slate-400 text-sm md:block">
                Copyright &copy; 2022, Tout droit réservé.
            </div>
            </div>


        </div>
    </footer>
  )
}

export default Footer
