import React, {useState, useEffect} from 'react';


export const Media = () => {

    const [media, setMedia] = useState([]);

    useEffect(() => {
            fetch('http://localhost:4041/media')
                .then(response => response.json())
                .then(data => {
                    setMedia([...media, ...data])
                })
              .catch(console.error)
    }, []);

    return (
        <div className='videos'>
            {
                media.length > 0 && media.map((video, index) => {
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
};