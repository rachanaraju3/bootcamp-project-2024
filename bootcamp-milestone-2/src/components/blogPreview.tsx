import React from 'react';
import style from './blogPreview.module.css'
import type {Blog} from '@/app/blogData';
import Image from 'next/image';

export default function BlogPreview(props: Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.main}>
      <div className={style.blog}>
        <h3 className={style.h1}>{props.title}</h3>
        <div>
        <Image src={props.image} alt={props.imageAlt} width={500} height={500} ></Image>
              <p>{props.description}</p>
        <p>Posted on {props.date}</p>
        </div>
      </div>
	  </div>
  );
}