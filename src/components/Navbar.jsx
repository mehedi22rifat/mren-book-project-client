import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { FaBookReader } from "react-icons/fa";



const Navbar = () => {

    const [manu,setManu] = useState('home')
    // const [isSticky,setIsSticky] = useState(false)

    // useEffect(() =>{
    //     const handleScroll = () =>{
    //         if(window.scrollY > 100){
    //             setIsSticky(true)
    //         }else{
    //             setIsSticky(false)
    //         }
    //     }
    //    return () =>{
    //     window.addEventListener('scroll',handleScroll)
    //    }
    // },[])
    const links = <>
        <Link to={'/'}><li onClick={() =>setManu('home')} className={manu === 'home'?'active':''}><a>Home</a></li></Link>
        <Link to={'/'}><li onClick={() =>setManu('about')} className={manu ==='about'?'active':''}><a>About</a></li></Link>
        <Link to={'/shop'}><li onClick={() =>setManu('shop')} className={manu ==='shop'?'active':''}><a>Shop</a></li></Link>
        <Link to={'/'}><li onClick={() =>setManu('sellBook')} className={manu ==='sellBook'?'active':''}><a>Sell Your Book</a></li></Link>
        <Link to={'/'}><li onClick={() =>setManu('blog')} className={manu ==='blog'?'active':''}><a>Blog</a></li></Link>
    </>
    return (
        <div className="">
          <div className="navbar bg-bash-100 fixed bg-blue-300 bg-opacity-30 z-30">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu font-bold menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {
         links
       }
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl"><FaBookReader className="text-blue-600"/> Book</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu font-bold menu-horizontal px-1">
     
    {
      links
     }
    </ul>
  </div>
  <div className="navbar-end mr-10">
    <a className="btn bg-blue-600 text-white border-none">Login</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;