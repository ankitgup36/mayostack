import Featured from "../components/blogs/features/Featured";
import CategoryList from "../components/blogs/categories/CategoryList";
import styles from "./blogs.module.css";
import CardList from "../components/blogs/cardList/CardList";
import Menu from "../components/blogs/menu/Menu";

const Blogs = ({ searchParams }: any) => {
  const page = parseInt(searchParams.page) ?? 1;

  return (
    <div className="container mb-20">
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} cat="search" />
        <Menu />
      </div>
    </div>
  );
};

export default Blogs;
