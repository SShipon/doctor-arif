import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import google from '../../assets/google/download__5_-removebg-preview.png'
import github from '../../assets/google/download__7_-removebg-preview.png'
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import UseTitle from "../../Hooks/UseTitle";
import LoginAnimation from "./LoginAnimation";
import Swal from "sweetalert2";
const Login = () => {
  UseTitle("Login");
  const { register, formState: { errors },handleSubmit,reset } = useForm();
 const [showPassword, setShowPassword] = useState(false);
 const { signIn} = useContext(AuthContext)
 const [logInError, setLoginError] = useState('')
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


  return (
   <section className="mx-5">
         <div className="mt-16 h-[600 px] grid  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 justify-center items-center">
       <div className=" mx-auto">
       <div className="w-96 p-7 mx-auto" >
        <h2 className="text-xl text-center font-bold">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="text"   className="input input-bordered w-full max-w-xs" 
            {...register("email",{required:"Email Address is required"})} />
             {errors.email && <p className="text-red-600 my-2">{errors.email?.message}</p>}
          </div>

          {/* password filed  */}
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span></label>
            <input  type={showPassword ? "text" : "password"} className="input input-bordered w-full max-w-xs" {...register("password",{required:'Password is required ',
            minLength:{value:6, message:'Password must be 6 characters or longer'}})} />
          </div>

            {/* error message */}
          <label className="label"><span className="label-text">Forget Password</span></label>
            {errors.password && <p className="text-red-600 my-2">{errors.password?.message}</p>}
          <input className="btn btn-accent w-full" value='Login' type="submit" />

          {logInError && <p className="text-red-600">{logInError}</p>}
        </form>
        <p>New to Doctors ? <Link className="text-secondary" to='/register'>Create New Account</Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-second w-full"><img className='mx-3' style={{width:'40px'}} src={google} alt="" />CONTINUE WITH GOOGLE</button>
        <br />
        <br />
        <button className="btn btn-outline btn-second w-full"><img className='mx-3' style={{width:'40px'}} src={github} alt="" />CONTINUE WITH GITHUB</button>
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
