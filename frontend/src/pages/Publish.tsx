import { useState } from "react"
import Appbar from "./Appbar"
import { CreateBlogInput } from "@rithvik9620/medium-common"
import axios from "axios"
import { BACKEND_URL } from "../constants/config"
import { useNavigate } from "react-router-dom"

const Publish = () => {
  const navigate = useNavigate();
  const [blogInput,setBlogInput] = useState<CreateBlogInput>({
    title:"",
    content:""
  });

  async function sendRequest(){
    console.log(localStorage.getItem("token"));
    await axios.post(`${BACKEND_URL}/api/v1/blog`,blogInput,{
        headers:{
            Authorization:localStorage.getItem("token")
        },
    });
    navigate("/blogs")
}

  return (
    <div >
        <Appbar/>
        <div className="font-bold text-xl
         mt-2 pl-24">Write a new blog</div>
        <div className="flex justify-center">
          <div className="mt-4 max-w-screen-lg w-full">
            <input type="text" onChange={(e)=>{setBlogInput({
                ...blogInput,
                title:e.target.value
            })}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title" required />
            <textarea id="message" onChange={(e)=>{setBlogInput({
                ...blogInput,
                content:e.target.value
            })}} rows={10} className="block mt-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Content"></textarea>
            <button type="button" onClick={sendRequest} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-4 w-1/7">Publish</button>
          </div>
        </div>
    </div>
  )
}

export default Publish