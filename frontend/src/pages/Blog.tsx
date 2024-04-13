import { useParams } from "react-router-dom"
import { useBlog } from "../hooks";
import FullBlog from "./FullBlog";
import Appbar from "./Appbar";
import Spinner from "./Spinner";

const Blog = () => {
  const {id} = useParams();
  const {loading,blog} = useBlog({
    id:id || ""
  })

  if(loading){
    return <div>
        <Appbar/>
        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
           <Spinner/>
          </div>
        </div>
      </div>
  }

  return (
    <div>
      <Appbar/>
      {blog ? <FullBlog blog={blog}/> : null}
    </div>
  )
}

export default Blog