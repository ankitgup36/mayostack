import Menu from "@/app/components/blogs/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";

const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:5000/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};

const SinglePage = async ({ params }: any) => {
  const { slug } = params;

  const { post: data } = await getData(slug);

  return (
    <div className="container mt-10">
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={`${styles.title} capitalize`}>{data?.title}</h1>

            <div className={styles.user}>
              <div className={styles.userImageContainer}>
                <Image
                  src={"/assets/p1.jpeg"}
                  alt=""
                  fill
                  className={styles.avatar}
                />
              </div>

              <div className={styles.userTextContainer}>
                <span className={styles.username}>{"Ankit Gupta"}</span>
                <span className={styles.date}>
                  {data?.createdAt?.split("T")[0]}
                </span>
              </div>
            </div>
          </div>
          {data?.images && (
            <div className={styles.imageContainer}>
              <Image
                src={data?.images?.[0]}
                alt=""
                fill
                className={styles.image}
              />
            </div>
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            {data?.description ? (
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: data?.description }}
              />
            ) : null}
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
