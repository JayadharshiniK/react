import React, {useState} from 'react'

const ListOutput = () => {

    const blogs =
        [
            {title: 'My new Website', body:'lorem ipsum...', author: 'Mario', id:1},
            {title: 'Welcome Party', body:'lorem ipsum...', author: 'Aliana', id:2},
            {title: 'Web dev top tips', body:'lorem ipsum...', author: 'Sunny', id:3}
        ]
    

  return (
    <div className='list'>
        <h1>Ex:12 List output</h1>
        {blogs.map((blog) => (
            <div className='blog-preview' key={blog.id}>
                <h3>{blog.title}</h3>
                <p>Written by {blog.author}</p>
            </div>
        ))}

    </div>
  )
}

export default ListOutput