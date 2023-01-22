import { useState } from 'react';
import style from './style.module.css';

export const Day40 = () => {

  const [images, setImages] = useState(
    [
      "https://100dayscss.com/codepen/40-1.jpg",
      "https://100dayscss.com/codepen/40-2.jpg",
      "https://100dayscss.com/codepen/40-9.jpg",
      "https://100dayscss.com/codepen/40-4.jpg",
      "https://100dayscss.com/codepen/40-5.jpg",
      "https://100dayscss.com/codepen/40-6.jpg",
      "https://100dayscss.com/codepen/40-7.jpg",
      "https://100dayscss.com/codepen/40-9.jpg",
      "https://100dayscss.com/codepen/40-7.jpg",
      "https://100dayscss.com/codepen/40-8.jpg",
      "https://100dayscss.com/codepen/40-3.jpg",
    ]
  );

  const [isImageActive, setIsImageActive] = useState<boolean>(false);

  return (
    <div className={style.day_40_container}>
      <img className={isImageActive ? `${style.img_gallery}` : `${style.img_gallery}`} src={images[0]} />
      <img className={isImageActive ? `${style.img_gallery}` : `${style.img_gallery}`} src={images[1]} />
      <img className={isImageActive ? `${style.img_gallery}` : `${style.img_gallery}`} src={images[2]} />
      <img className={isImageActive ? `${style.img_gallery}` : `${style.img_gallery}`} src={images[3]} />
      <img className={isImageActive ? `${style.img_gallery}` : `${style.img_gallery}`} src={images[4]} />
      <img className={isImageActive ? `${style.img_gallery}` : `${style.img_gallery}`} src={images[5]} />
      <img className={isImageActive ? `${style.img_gallery}` : `${style.img_gallery}`} src={images[6]} />
      <img className={isImageActive ? `${style.img_gallery}` : `${style.img_gallery}`} src={images[3]} />
      <img className={isImageActive ? `${style.img_gallery}` : `${style.img_gallery}`} src={images[4]} />
      <img className={isImageActive ? `${style.img_gallery}` : `${style.img_gallery}`} src={images[5]} />
      <img className={isImageActive ? `${style.img_gallery}` : `${style.img_gallery}`} src={images[6]} />
    </div>
  )
}