import { SignupInput } from "@rithvik9620/medium-common"
import axios from "axios"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../constants/config"

const Auth = ({type}:{type:"signup"|"signin"}) => {
  const navigate = useNavigate();
  const [postInputs,setPostInputs] = useState<SignupInput>({
    username:"",
    password:"",
    name:""
  })

  async function sendRequest() {
     try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,postInputs);
      const token = response.data;
      console.log(token);
      localStorage.setItem("token",token.jwt);
      navigate("/blogs");
     } catch(err){
       
     }
  }
    
  return (
    <div className="h-screen flex justify-center flex-col">
        <div className="text-3xl font-bold text-center">Create an account</div>
        <div className="text-slate-600 text-center">{type === "signin" ? "Don't have an account?" : "Already have an account?"} <Link className="pl-1 underline" to={type === "signin" ? '/' : '/signin'}>
            {type === "signin" ? "Sign Up" : "Login"}</Link></div>
        <div className="mx-32 mt-6">
        {type === "signup" ? <LabelledInput label="Name" placeholder="Enter your name" onChange={(e)=>{
          setPostInputs({
            ...postInputs,
            name:e.target.value
          })   
        }}/> : null}
        <LabelledInput label="Email" placeholder="m@example.com" onChange={(e)=>{
          setPostInputs({
            ...postInputs,
            username:e.target.value
          })   
        }}/>
        <LabelledInput label="Password" type="password" placeholder="" onChange={(e)=>{
          setPostInputs({
            ...postInputs,
            password:e.target.value
          })   
        }}/>
        <button type="button" onClick={sendRequest} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full">{type === "signup" ? "Sign Up" : "Sign In"}</button>
        </div>
    </div>
  )
}

interface LabelledInputType{
    label: string,
    placeholder: string,
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
    type?: string
}

const LabelledInput = ({label,placeholder,onChange,type}: LabelledInputType) =>{
    return(
        <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
              {label}
            </label>
         <input
        className="shadow appearance-none border bg-gray-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-slate-600 mb-2"
        id={label}
        type={type || "text"}
        onChange={onChange}
        placeholder={placeholder}
          />
        </div>
    )

}

export default Auth