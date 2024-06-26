import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/app/utils";
import useNavigateWithParams from "@/app/hooks/useNavigateWithParams";

const CategoryList = async () => {
  const { generateUrlWithParams } = useNavigateWithParams();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories?.map((item) => (
          <Link
            href={generateUrlWithParams("/blogs", {
              cat: item.slug,
              page: "1",
            })}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item.slug}
          >
            {item.image && (
              <Image
                src={item.image}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
