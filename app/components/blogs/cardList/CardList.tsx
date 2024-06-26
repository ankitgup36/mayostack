import React from "react";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import { redirect } from "next/navigation";
import { URL_END_POINT } from "@/app/utils/api";

const getData = async (page: number, cat: string) => {
  const res = await fetch(
    `${URL_END_POINT}/get-all-posts?page=${page}${
      cat ? `&cat=${cat}` : ""
    }`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
};

const CardList = async ({ page, cat }: { page: number; cat: string }) => {
  const data = await getData(page, cat);

  if (!data?.posts?.length && page > 1) {
    redirect(`/blogs?page=1${cat ? `&cat=${cat}` : ""}`);
  }

  const POST_PER_PAGE = 5;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < data?.total;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data?.posts?.length ? (
          data?.posts?.map((item: any) => <Card item={item} key={item._id} />)
        ) : (
          <p className="font-semibold text-2xl text-center my-5">
            No data found
          </p>
        )}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
