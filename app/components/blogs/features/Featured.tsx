import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";
import { URL_END_POINT } from "@/app/utils/api";

const getData = async () => {
  const res = await fetch(`${URL_END_POINT}/get-featured-post`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};

const Featured = async () => {
  const { post } = await getData();

  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="/assets/p1.jpeg"
            alt=""
            fill
            className={styles.image}
            priority
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{post?.title}</h1>
          <p className={styles.postDesc}>{post?.summary}</p>
          <Link href={`/posts/${post?.slug}`}>
            <button className={styles.link}>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
