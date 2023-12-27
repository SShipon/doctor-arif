import React, { useContext, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../Contexts/AuthProvider"

export default function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword, loading, setLoading}= useContext(AuthContext)
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
           // setLoading(true)
            console.log('wait')
            await resetPassword(emailRef.current.value)
            console.log('done')
            setMessage("Check your inbox for further instructions")
        } catch (error) {
            console.log(error)
            setError("Failed to reset password")
        }

        setLoading(false)
    }

    return (
        <>
            <div className="my-20">
                <div className="w-96 p-7 mx-auto">
                    <h2 className="text-center mb-4">Password Reset</h2>
                    {message && <p >{message}</p>}
                    <form onSubmit={handleSubmit}>
                     
                       <div className="" id="email">
                            <label>Email</label>
                            <br />
                            <div className="flex items-center border-solid border-2 border-gray-300 hover:border-solid rounded-[12px]">
                            <input type="email" ref={emailRef} required className="input  focus:outline-none focus:ring-0 w-[100%]" />
                          </div>
                        
                          {error && <p className="text-red-700 my-4">{error}</p>}
                         
                         <button  disabled={loading}  className="btn btn-accent w-full mt-2" type="submit">Reset</button>
                       </div>
                    </form>
                    {/* <div className="w-100 text-center mt-3">
                        <Link to="/login">Login</Link>
                    </div> */}
                </div>
            </div>
            {/* <div className="w-100 text-center mt-2">
                Need an account? <Link to="/register">Sign Up</Link>
            </div> */}
        </>
    )
}