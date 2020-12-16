import React, {useState, useEffect} from 'react';


export const Media = () => {

    const [media, setMedia] = useState([]);

    useEffect(() => {
        if (media.length === 0) {
            // TODO: when Mongo is up and running make a Fetch HTTP GET request to the database to get the video records
            fetch('/media')
                .then(response => response.json())
                .then(data => {
                    debugger;
                    console.log(data);
                })
              .catch(err => {
                debugger;
                console.error(err);
              })
            
           let x = [{
                debate: 'AYP8-oxq8ig',
                title: 'Skateboarding',
                synopsis: 'Kenendy vs. Nixon Debate',
                category: 'Politics',
                format: 'Closed',
                source1: 'https://en.wikipedia.org/wiki/John_F._Kennedy_Jr.',
                source2: 'https://www.wonkette.com/qanon-people-find-irrefutable-proof-jfk-jr-is-alive-and-boy-is-he-still-very-much-dead',
                source3: 'https://nypost.com/2020/11/25/jfk-jr-wouldve-been-60-today-a-look-back-on-his-life/',
                tags: 'juice, tickets, debate',
                points: '100',
                memebaters: '0',
                wins: '0',
                losses: '0',
            },
            {
                debate: '_8YxFc_1b_0',
                title: 'Skateboarding',
                synopsis: 'This is a demo for my artbook',
                category: 'Coding',
                format: 'Open Debate',
                source1: 'https://www.youtube.com/watch?v=W2-teIHLUuI',
                source2: 'https://www.youtube.com/watch?v=W2-teIHLUuI',
                source3: 'https://rumble.com/vbl9a9-new-answers-about-long-haulers-for-covid-19.html',
                tags: 'juice, tickets, debate',
                points: '100',
                memebaters: '0',
                wins: '0',
                losses: '0',

            },
            {
                debate: 'W2-teIHLUuI',
                title: 'Skateboarding',
                synopsis: 'This is a demo for my artbook',
                category: 'Coding',
                format: 'Open Debate',
                source1: 'https://www.youtube.com/watch?v=W2-teIHLUuI',
                source2: 'https://www.youtube.com/watch?v=W2-teIHLUuI',
                source3: 'https://rumble.com/vbl9a9-new-answers-about-long-haulers-for-covid-19.html',
                tags: 'juice, tickets, debate',
                points: '100',
                memebaters: '0',
                wins: '0',
                losses: '0',

            },
        ];
            setMedia([...media, ...x])
            
        }
        console.log(media)
    }, [media]);


    return (
        <>
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
        </>
    )
};