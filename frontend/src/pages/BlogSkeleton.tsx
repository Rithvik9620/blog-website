import { Avatar, Circle } from "./BlogCard"

const BlogSkeleton = () => {
  return (
    <div>
        
<div role="status" className="w-screen max-w-screen-md animate-pulse">
  <div className="">
        <div className="flex p-4 text-center">
          <Avatar name={""} size="small"/>
          <div className="font-normal pl-2">
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
          </div>
          <div className="flex justify-center flex-col pl-2"><Circle/></div>
          <div className="font-thin pl-2 text-slate-500">
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
          </div>
        </div>
        <div className="pl-4">
          <div className="text-xl font-semibold">
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
          </div>
          <div className="text-md font-light">
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
          </div>
          <div className="text-sm text-slate-500 font-thin pt-3">
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
          </div>
        </div>
         <hr className="border-gray-300 mt-5"/>
      </div>
</div>


    </div>
  )
}

export default BlogSkeleton