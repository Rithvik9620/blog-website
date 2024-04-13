import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex flex-col justify-center">Medium</Link>
        <div className="flex text-center">
            <div className="flex justify-center flex-col mr-4">
              <Link to={'/publish'}>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-4 w-full">New</button>
              </Link>
            </div>
            <div className="flex justify-center flex-col mr-4">
              <Link to={'/signin'}>
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 mb-2">Sign out</button>
              </Link>
            </div>
            <div className="flex justify-center flex-col">
               <Avatar name="rithvik" size="medium"/>
            </div>
           
        </div>
    </div>
  )
}

export default Appbar