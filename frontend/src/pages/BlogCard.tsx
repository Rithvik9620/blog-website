import { Link } from "react-router-dom"

interface BlogCardInput{
    id: number
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}

const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
    }: BlogCardInput) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="w-screen max-w-screen-md">
        <div className="flex p-4">
          <Avatar name={authorName} size="small"/>
          <div className="font-normal pl-2">{authorName === null ? "Anonymous" : authorName}</div>
          <div className="flex justify-center flex-col pl-2"><Circle/></div>
          <div className="font-thin pl-2 text-slate-500">{publishedDate}</div>
        </div>
        <div className="pl-4">
          <div className="text-xl font-semibold">{title}</div>
          <div className="text-md font-light">{content.length > 100 ? `${content.slice(0,100)}...` : content}</div>
          <div className="text-sm text-slate-500 font-thin pt-3">{`${Math.ceil(content.length/100)} minute(s) read`}</div>
        </div>
         <hr className="border-gray-300 mt-5"/>
       </div>
    </Link>
  )
}

export function Avatar({name, size}:{name: string, size: "small" | "medium"}){
   return(
    <div>
       <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-5 h-5" : "w-8 h-8"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className={`${size === "small" ? "text-xs" : "text-base"} text-gray-600 dark:text-gray-300`}>{name === null ? "An" : name[0]}</span>
       </div>
    </div>
   )
}

export function Circle(){
    return(
        <div className="bg-slate-600 w-1 h-1 rounded-full"/>
    )
}

export default BlogCard