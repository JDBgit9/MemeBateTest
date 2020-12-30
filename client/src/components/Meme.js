import React, { useEffect, useState } from "react";
import styles from "./Meme.module.css";
import { useHistory } from "react-router-dom";

export const Meme = () => {
  const [meme, setMeme] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);
  const [captions, setCaptions] = useState([]);

  const history = useHistory();

  const updateCaption = (e, index) => {
    const text = e.target.value || "";
    setCaptions(
      captions.map((c, i) => {
        if (index === i) {
          return text;
        } else {
          return c;
        }
      })
    );
  };

  const generateMeme = () => {
    const currentMeme = meme[memeIndex];
    const formData = new FormData();

    formData.append("username", "portexe");
    formData.append("password", "abc123");
    formData.append("template_id", currentMeme.id);
    captions.forEach((c, index) => formData.append(`boxes[${index}][text]`, c));

    fetch("https://api.imgflip.com/caption_image", {
      method: "PUT",
      body: formData,
    }).then((res) => {
      res.json().then((res) => {
        history.push(`/generated?url=${res.data.url}`);
      });
    });
  };

  const shuffleMeme = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_meme", {
      mode: "no-cors",
      method: "GET",
    })
      .then((res) => {
        res.json();
      })
      .then((res) => {
        const _meme = res.data.meme;
        shuffleMeme(_meme);
        setMeme(_meme);
      }).catch(error=>{
        console.log(error)
      })
  }, []);

  useEffect(() => {
    if (meme.length) {
      setCaptions(Array(meme[memeIndex].box_count).fill(""));
    }
  }, [memeIndex, meme]);

  return meme.length ? (
    <div className={styles.container}>
      <button onClick={generateMeme} className={styles.generate}>
        Generate
      </button>
      <button
        onClick={() => setMemeIndex(memeIndex + 1)}
        className={styles.skip}
      >
        Skip
      </button>
      {captions.map((c, index) => (
        <input onChange={(e) => updateCaption(e, index)} key={index} />
      ))}
      <img alt="meme" src={meme[memeIndex].url} />
    </div>
  ) : (
    <></>
  );
};
