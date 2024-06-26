import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import { AWS_FETCH_FILE_URL } from "@/app/utils/api";

const Card = async ({ key, item }: { key: string; item: any }) => {
  console.log("came here");
  const imageResponse = await fetch(AWS_FETCH_FILE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fileName: item.images?.[0],
    }),
  });

  const body = await imageResponse.json();
  const file = body.body.fileContent;

  console.log(file);

  return (
    <div className={styles.container} key={key}>
      {item.images && (
        <div className={styles.imageContainer}>
          <Image src={file} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 className=" capitalize ">{item.title}</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className={`${styles.desc}`}>{item.summary}</div>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
