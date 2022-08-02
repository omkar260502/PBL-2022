import { UserAuth } from '../context/AuthContext'
import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    // var confirmPassword
    // var password1 = password

    const {createUser} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        // if (password1 !== confirmPassword) {
        //     return setError("Passwords do not match")
        //   }
        e.preventDefault()
        setError('')
        try{  
            await createUser(email, password)
            navigate('/account')
            alert('Account Created Successfully')
        }catch(e){
            setError(e.message)
            alert(e.message)
        }

    }

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
        <div>
            <h1 className="text-2xl font-bold py-2 text-center">
                Create a new account
            </h1>
        </div>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col py-2">
                <label className="py-2 font-medium">Email Address</label>
                <input onChange={(e) => setEmail(e.target.value)} className="border p-3" type="email" required/>
            </div>
            <div className="flex flex-col py-2">
                <label className="py-2 font-medium">Password</label>
                <input onChange={(e) => setPassword(e.target.value)}className="border p-3" type="password" required/>
            </div>
            <div className="flex flex-col py-2">
                <label className="py-2 font-medium">Confirm Password</label>
                <input  className="border p-3" type="password" required/>
            </div>
            <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Sign Up</button>
        </form>
        <p className="py-2 text-center">
            Already have a Account?<Link to="/signin" className="underline"> SignIn.</Link> 
        </p>
    </div>
  )
}

export default Signup