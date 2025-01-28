import React, { useState } from 'react'
import { Blog } from '@/app/components/users/teachers/components/Blog'
import CreateBlog from '@/app/components/users/teachers/components/CreateBlog'

export const Blogs = () => {
    const [createBlogs, setCreateBlogs] = useState(false)
    const changePage = () => {
        if (!createBlogs) {
            setCreateBlogs(true)
        } else {
            setCreateBlogs(false)
        }
    }
  return (
    <div>
        <div className="flex flex-wrap justify-between p-8 pb-1 -top-4">
        <h1 className='textr-bold text-white text-4xl'>Blogs</h1>
            <button onClick={()=>changePage()} className=' bg-blue-700 hover:bg-blue-500 border border-blue-900 text-slate-700 hover:text-slate-400 rounded-md p-2 hover:shadow-md hover:shadow-green-500'>Crear Blog</button>
        </div>
        {/* {createBlogs ? <CreateBlog /> : <Blog />} */}


    </div>
  )
}
