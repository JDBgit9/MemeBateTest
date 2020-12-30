import React, { useState, useEffect } from 'react'


function Posts() {
    const [posts, setPosts]=useState([]);
    useEffect(() => {
        if(posts?.length ===0) {
            fetch('http://localhost:4041/media')
            .then(response => response.json())
            .then(data => {
                setPosts([...posts, ...data])
            })
          .catch(console.error)
        }
    }, [])
    return (
        <div className='videos'>
            {
               posts?.length > 0 &&posts.map((video, index) => {
                    return (
                        <iframe
                        width="385"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.debate}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        key={`video_${index}`}
                      ></iframe>
                    )
                })
            }
        </div>
    )
}

export default Posts
