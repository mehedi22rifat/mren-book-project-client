import { useContext, useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { authContext } from "../contects/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 


const SingIn = () => {

 useEffect(() =>{
  AOS.init()
 },[])

  const [showPassowrd,setShowPassword] = useState(false)
  const {LoginUser,singInWithGoogle} = useContext(authContext)
  const [error,setError] = useState('')

  const location = useLocation()
  const navigate = useNavigate()

  // const formValue = location.state?.form?.pathname || "/";

   const handleSingIn = (e) =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)

    LoginUser(email,password)
    .then(result =>{
      console.log(result.user)
      toast.success('Login user successfull')
      // navigate(formValue,{replace:true})
      navigate(location?.state ? location.state : "/");
    })
    .catch(error =>{
      console.log(error)
      toast.error(error.message)
      setError(error.message)
    })
   }

// sing up with google
const handleSingUpWithGoolge = () =>{
  singInWithGoogle()
  .then(result =>{
    console.log(result.user)
    toast.success(' Resgister User Successfully!')
    // navigate(formValue,{replace:true})
    navigate(location?.state ? location.state : "/");
  })
  .catch(error =>{
    console.log(error)
    toast.error(error.message)
  })
 }



    return (
     <div>
 <div data-aos="zoom-in" className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
    <div className="relative px-4 py-5 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div className="max-w-md mx-auto">
        <div>
          <h1 className="text-2xl font-semibold">Login here</h1>
        </div>
        <form onSubmit={handleSingIn} className="divide-y divide-gray-200">
          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div className="relative">
              <input autoComplete="off" id="email" name="email" type="text" required className="peer p-2 rounded placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
              <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
              <span className="text-2xl absolute top-16" onClick={() =>{setShowPassword(!showPassowrd)}}>
              {
                showPassowrd ?<FaRegEye></FaRegEye> : <IoEyeOff></IoEyeOff>
              }
             </span>
           
            </div>
            <div className="relative">
              <input autoComplete="off" id="password" name="password" type={showPassowrd ? 'text':'password'} required className="peer rounded p-2 placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
              <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
            </div>
            {
              error? <p className="text-red-500 text-center mt-1">Email and Password in not correct!</p> : ""
            }
             <button type="submit" className="text-white font-bold bg-blue-500 rounded-lg p-2">Login</button>
          </div>
        </form>
      </div>
      <div class="border-b text-center mb-5">
                        <div
                            class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                            Or sign up with other account
                        </div>
                    </div>
      <div className="w-full flex justify-center flex-col gap-3">
        <button onClick={handleSingUpWithGoolge} className="btn flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
          <span>Continue with Google</span>
        </button>
        <button disabled className="flex btn items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        <svg className="w-6" viewBox="0 0 32 32">
                          <path fillRule="evenodd" d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z" />
                        </svg>
          <span>Continue with Google</span>
        </button>

        
      </div>
     <p className="mt-6 text-xs text-gray-600 text-center">
  I have not account click here
  <a href="/singUp" className="border-b text-red-600 font-bold border-gray-500 border-dotted">
    Sing Up
  </a>
</p>

    </div>
  </div>
</div>
<Toaster/>

</div>

    );
};

export default SingIn;