import { useContext, useEffect, useState } from "react";
import { authContext } from "../contects/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 

const SingUp = () => {
  const { registerUser,singInWithGoogle, loginUser,loading,user } = useContext(authContext);

  const [error,setError] = useState('')

  // location
  const location = useLocation()
  const navigate = useNavigate()

  // aos animation
  useEffect(() =>{
    AOS.init()
  },[])

  // const formValue = location.state?.form?.pathname || "/";


  const handleSingUpFrom = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const singUpObj = {
      name,
      photoUrl,
      email,
      password,
    };

    registerUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success(' Resgister User Successfully!')
        // navigate(formValue,{replace:true})
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error('The user already exsist!')
        setError(error.message);
  
      });
  };

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
      <div data-aos="zoom-in-down" className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-5 xl:m-16 w-full bg-contain bg-center bg-no-repeat h-full"
              style={{
                backgroundImage:
                  'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
              }}
            ></div>
          </div>
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            {/* <div>
                <h1 className="text-2xl font-bold text-green-600 text-center">Wellcome Sing In Page</h1>
              </div> */}
            <div className="mt-5 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign In</h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  <button onClick={handleSingUpWithGoolge} className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div className="bg-white p-2 rounded-full">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span className="ml-4">Sign Up with Google</span>
                  </button>
                
                </div>
                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or sign up with e-mail
                  </div>
                </div>
                <form onSubmit={handleSingUpFrom} className="mx-auto max-w-xs">
                  <input
                    name="name"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Name"
                    required
                  />
                  <input
                    name="photoUrl"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="PhotoURL"
                    required
                  />
                  <input
                    name="email"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    name="password"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy={7} r={4} />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign In</span>
                  </button>
                 {
                  error ?
                  <p className="text-red-500 text-center">Email and Password not correct</p>
                  :
                  ""
                 }
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    Already have an account please
                    <a
                      href="/singIn"
                      className="border-b text-green-500 text-lg font-bold border-gray-500 border-dotted"
                    >
                      Sing In
                    </a>
                  </p>
                </form>
                <Toaster/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    //       <div>
    //   <div className="py-16">
    //     <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
    //       <div className="hidden lg:block lg:w-1/2 bg-cover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")'}}>
    //       </div>
    //       <div className="w-full p-8 lg:w-1/2">
    //         <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
    //         <p className="text-xl text-gray-600 text-center">Welcome back!</p>
    //         <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
    //           <div className="px-4 py-3">
    //             <svg className="h-6 w-6" viewBox="0 0 40 40">
    //               <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
    //               <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
    //               <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
    //               <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
    //             </svg>
    //           </div>
    //           <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
    //         </a>
    //         <div className="mt-4 flex items-center justify-between">
    //           <span className="border-b w-1/5 lg:w-1/4" />
    //           <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
    //           <span className="border-b w-1/5 lg:w-1/4" />
    //         </div>
    //         <div className="mt-4">
    //           <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
    //           <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
    //         </div>
    //         <div className="mt-4">
    //           <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
    //           <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
    //         </div>
    //         <div className="mt-4">
    //           <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
    //           <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
    //         </div>
    //         <div className="mt-4">
    //           <div className="flex justify-between">
    //             <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
    //             <a href="#" className="text-xs text-gray-500">Forget Password?</a>
    //           </div>
    //           <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
    //         </div>
    //         <div className="mt-8">
    //           <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
    //         </div>
    //         <div className="mt-4 flex items-center justify-between">
    //           <span className="border-b w-1/5 md:w-1/4" />
    //           <a href="#" className="text-xs text-gray-500 uppercase">or sign up</a>
    //           <span className="border-b w-1/5 md:w-1/4" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SingUp;
