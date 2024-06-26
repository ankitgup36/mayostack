import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";
import { categories } from "@/app/utils";
import useNavigateWithParams from "@/app/hooks/useNavigateWithParams";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      {categories?.map((item) => (
        <Link
          href={`/blogs?page=1&cat=${item.slug}`}
          className={`${styles.categoryItem} ${styles[item.slug]}`}
          key={item.slug}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;
