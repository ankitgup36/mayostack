import dynamic from "next/dynamic";

const Write = dynamic(() => import("../../components/blogs/write/Write"), {
  ssr: false,
});

const WritePage = () => {
  return (
    <div className="container">
      <Write />
    </div>
  );
};

export default WritePage;
