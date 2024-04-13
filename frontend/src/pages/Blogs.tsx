import { useBlogs } from "../hooks"
import Appbar from "./Appbar"
import BlogCard from "./BlogCard"
import BlogSkeleton from "./BlogSkeleton";

const Blogs = () => {
  const {loading,blogs} = useBlogs();

  if(loading){
    return <div>
      <Appbar/>
      <div className="flex justify-center">
      <div>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
      </div>
      </div>
      </div>
  }

  return (
    <div>
      <Appbar/>
      <div className="flex justify-center">
        <div>
        {blogs.map(blog=><BlogCard id={blog.id} authorName={blog.author.name} title={blog.title} content={blog.content}
                  publishedDate="30th March 2024"/>)}         
        </div>
      </div>
    </div>
  )
}

export default Blogs