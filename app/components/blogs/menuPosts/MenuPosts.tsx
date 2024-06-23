import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";
import { categories } from "@/app/utils";

const getData = async () => {
  const res = await fetch(`http://localhost:5000/get-all-posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};

const MenuPosts = async ({ withImage }: { withImage: boolean }) => {
  const { posts = [] } = await getData();

  console.log(posts?.slice(posts?.length - 3, posts?.length));
  return (
    <div className={styles.items}>
      {posts?.slice(posts?.length - 3, posts?.length)?.map((post: any) => (
        <Link href="/" className={styles.item} key={post.slug}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src="/assets/p1.jpeg"
                alt=""
                fill
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span
              className={`${styles.category} ${styles[post?.catSlug]}`}
            >
              {categories.find((cat) => cat.slug === post?.catSlug)?.title}
            </span>
            <h3 className={styles.postTitle}>{post?.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
