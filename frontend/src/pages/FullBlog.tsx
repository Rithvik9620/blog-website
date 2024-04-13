import { Blog } from "../hooks"
import { Avatar } from "./BlogCard"

const FullBlog = ({blog}:{blog: Blog}) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 px-10 pt-12 w-full max-w-screen-lg">
        <div className="col-span-8 flex justify-center flex-col">
            <div className="text-3xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">Posted on 30th March 2024</div>
            <div className="pt-4">{blog.content}</div>
        </div>
        <div className="col-span-4">
            <div className="text-slate-500 text-sm">Author</div>
            <div className="flex mt-2">
              <div className="pr-2 flex flex-col justify-center">
                <Avatar name={blog.author.name} size="medium"/>   
              </div>
              <div>
                <div className="text-lg font-bold">{blog.author.name || "Anonymous"}</div>
                <div className="text-slate-500 text-sm">Random catch phrase about the author's ability to grab users attention</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FullBlog