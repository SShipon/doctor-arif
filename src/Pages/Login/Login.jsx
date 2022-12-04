import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import google from '../../assets/google/download__5_-removebg-preview.png'
import github from '../../assets/google/download__20_-removebg-preview.png'
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import UseTitle from "../../Hooks/UseTitle";
import LoginAnimation from "./LoginAnimation";
import Swal from "sweetalert2";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
const Login = () => {
  UseTitle("Login");
  const { register, formState: { errors },handleSubmit,reset } = useForm();
 const [showPassword, setShowPassword] = useState(false);
 const { signIn,googleLoginInProvider,githubSignUp} = useContext(AuthContext)
 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();
 const [logInError, setLoginError] = useState('')
 
 const togglePassword =()=>{
  setShowPassword(!showPassword)
 }

  const handleLogin = data =>{
    setLoginError('')
    signIn(data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      Swal.fire(
        " Thank you !!!",
        'Your account has been Login'       
      );
      reset()
    })
    .catch((error) => {
      console.log(error)
       setLoginError(error.message)
      
    });
  }

  const handleGoogleSignIn = () =>{
    googleLoginInProvider(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user)
      Swal.fire(
        " Thank you !!!",
        'Your account has been created'       
      );
    })
    .catch(error => console.log(error))
  }


  const handleGitHub =() =>{
    githubSignUp(githubProvider)
    .then(result =>{
     const user = result.user;
     console.log(user);
     Swal.fire(
      " Thank you !!!",
      'Your account has been created'       
    );
    })
    .catch(err =>console.log(err))
 }


  return (
   <section className="mx-5">
         <div className="mt-16 h-[600 px] grid  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 justify-center items-center">
       <div className=" mx-auto">
       <div className="w-96 p-7 mx-auto" >
        <h2 className="text-xl text-center font-bold">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
          <div className="flex items-center border-solid border-2 border-gray-300 hover:border-solid rounded-[12px]">
          <input type="text"  className="input  focus:outline-none focus:ring-0 w-[100%]" 
            {...register("email",{required:"Email Address is required"})} />
          </div>
             {errors.email && <p className="text-red-600 my-2">{errors.email?.message}</p>}
          </div>

          {/* password filed  */}
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span></label>
           <div className="flex items-center border-solid border-2 border-gray-300 hover:border-solid rounded-[12px]">
           <input  type={showPassword ? "text" : "password"} className="input  focus:outline-none focus:ring-0 w-[100%]" {...register("password",{required:'Password is required ',
            minLength:{value:6, message:'Password must be 6 characters or longer'}})} />
            <i onClick={togglePassword} class={`fa-solid pr-2 ${showPassword? 'fa-eye' : 'fa-eye-slash'}`}></i>
           </div>
          </div>

            

            {/* error message */}
          <label className="label"><span className="label-text">Forget Password <button className='btn btn-link'>Reset</button></span></label>
            {errors.password && <p className="text-red-600 my-2">{errors.password?.message}</p>}
          <input className="btn btn-accent w-full" value='Login' type="submit" />

          {logInError && <p className="text-red-600">{logInError}</p>}
        </form>
        <p>New to Doctors ? <Link className="text-secondary" to='/register'>Create New Account</Link></p>
        <div className="divider">OR</div>

        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-second w-full"><img className='mx-3' style={{width:'40px'}} src={google} alt="" />CONTINUE WITH GOOGLE</button>
        <br />
        <br />
        <button onClick={handleGitHub} className="btn btn-outline btn-second w-full"><img className='mx-3' style={{width:'40px'}} src={github} alt="" />CONTINUE WITH GITHUB</button>
      </div>
       </div>
       <div>
       <LoginAnimation></LoginAnimation>
       </div>
    </div>
   </section>
  );
};

export default Login;
