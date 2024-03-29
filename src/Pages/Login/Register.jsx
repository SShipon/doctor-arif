import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import UseTitle from "../../Hooks/UseTitle";
import RegisterAnimation from './RegisterAnimation';
import google from '../../assets/google/download__5_-removebg-preview.png'
import github from '../../assets/google/download__20_-removebg-preview.png'
import { AuthContext } from '../../Contexts/AuthProvider';
import Swal from "sweetalert2";
import { GithubAuthProvider, GoogleAuthProvider, } from 'firebase/auth';
import { toast } from 'react-toastify';
const Register = () => {
    UseTitle("Register");
    const [showPassword, setShowPassword] = useState(false);
    const [sigUpError, SetSignUpError]= useState('')
  const { register,handleSubmit,formState: { errors }, reset} = useForm();
  const {createUser,googleLoginInProvider,githubSignUp,verifyEmail, handleReset,updateUser}= useContext(AuthContext)
  console.log(handleReset)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider(); 


  const togglePassword =()=>{
    setShowPassword(!showPassword)
   }

  const HandleRegister = (data) =>{
      console.log(data);
      SetSignUpError('')
      createUser(data.email, data.password)
     .then(result =>{
       const user = result.user;
       console.log(user);
       toast.success("User Created Successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      verifyEmail()
       const userInfo = {
        displayName: data.name
       }
       updateUser(userInfo)
       .then(()=>{})
       .catch(err =>{console.log(err)})
       reset()
     })
    .catch(error => {
      
     SetSignUpError(error.message)
    })
    
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
      verifyEmail()
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
      verifyEmail()
     })
     
     .catch(err =>console.log(err))
  }

  
    return (
        <section className="mx-5">
         <div className="mt-16 h-[600 px] grid  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 justify-center items-center">
       <div className=" mx-auto">
         <RegisterAnimation></RegisterAnimation>
       </div>
       <div>
       <div className="w-96 p-7 mx-auto" >
        <h2 className="text-xl text-center font-bold">Register</h2>
        <form onSubmit={handleSubmit(HandleRegister)}>
          {/* name filed  */}
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Name</span></label>
            <div className="flex items-center border-solid border-2 border-gray-300 hover:border-solid rounded-[12px]">
            <input type="text" {...register("name",{ required: 'Name is required' })}   className="input  focus:outline-none focus:ring-0 w-[100%]"/>
            </div>
          </div>
          {errors.name && <p className="text-red-600 my-2">{errors.name?.message}</p>}

         {/* email filed */}

          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
             <div className="flex items-center border-solid border-2 border-gray-300 hover:border-solid rounded-[12px]">
             <input type="email" {...register("email",{required:"Email Address is required"})}   className="input  focus:outline-none focus:ring-0 w-[100%]"/>
             </div>
          </div>
          {errors.email && <p className="text-red-600 my-2">{errors.email?.message}</p>}

             {/* Password filed */}


          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span></label>
             <div className="flex items-center border-solid border-2 border-gray-300 hover:border-solid rounded-[12px]">
             <input type={showPassword? 'text':'password'} {...register("password",{required:'Password is required ',
            minLength:{value:6, message:'Password must be 6 characters or long'},
            pattern:{value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message:'Password must have uppercase number and special character number'}
            })}   className="input  focus:outline-none focus:ring-0 w-[100%]" />
             <i onClick={togglePassword} class={`fa-solid pr-2 ${showPassword? 'fa-eye' : 'fa-eye-slash'}`}></i>
             </div>

            <label className="label"><span className="label-text">Forget Password <button className='btn btn-link'>Reset</button></span></label>
            {errors.password && <p className="text-red-600 my-2">{errors.password?.message}</p>}
          </div>
        
        {/* register filed and google and github button */}

          <input className="btn btn-accent w-full" value='Register' type="submit" />
          {sigUpError && <p className='text-red-500'>{sigUpError}</p>}
        </form>
        <p>Already hve an account ? <Link className="text-secondary" to='/login'>Please Login</Link></p>
        <div className="divider">OR</div>

        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-second w-full"> <img className='mx-3' style={{width:'40px'}} src={google} alt="" /> CONTINUE WITH GOOGLE</button>
        <br />
        <br />
        <button onClick={handleGitHub} className="btn btn-outline btn-second w-full"><img className='mx-3' style={{width:'40px'}} src={github} alt="" />CONTINUE WITH GITHUB</button>
      </div>
       </div>
    </div>
   </section>
    );
};

export default Register;