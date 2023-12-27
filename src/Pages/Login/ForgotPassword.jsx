import React, { useContext, useRef, useState } from "react"
import { AuthContext } from "../../Contexts/AuthProvider"
import Swal from "sweetalert2"
import { Link, useLocation, useNavigate } from "react-router-dom"

export default function ForgotPassword() {
    const emailRef = useRef()
    const {sendResetPassword, loading, setLoading}= useContext(AuthContext)
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")


     
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || "/login";


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
           // setLoading(true)
            console.log('wait')
            await sendResetPassword(emailRef.current.value)
            navigate(from, { replace: true });
            console.log('done')
            setMessage("Check your inbox for further instructions")
            Swal.fire(
                'Check your email'       
              );
        } catch (error) {
            console.log(error)
            setError("Failed to reset password")
        }
     
        setLoading(false)
        emailRef.current.value = ' '
    }

    return (
        // disabled={loading}
        <>
            <div className="my-20">
                <div className="w-96 p-7 mx-auto">
                    <h2 className="text-center mb-4">Password Reset</h2>
                    {message && <p className="text-cyan-600">{message}</p>}
                    <form onSubmit={handleSubmit}>
                     
                       <div className="" id="email">
                            <label>Email</label>
                            <br />
                            <div className="flex items-center border-solid border-2 border-gray-300 hover:border-solid rounded-[12px]">
                            <input type="email" ref={emailRef} required className="input  focus:outline-none focus:ring-0 w-[100%]" />
                          </div>
                        
                          {error && <p className="text-red-700 my-4">{error}</p>}
                         
                         <button   className="btn btn-accent w-full mt-2" type="submit">Reset</button>
                       </div>
                    </form>
                 <div className="w-100 text-center mt-3">
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/register">Sign Up</Link>
            </div> 
        </>
    )
}