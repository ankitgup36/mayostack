"use client";
import Image from "next/image";
import styles from "./writePage.module.css";
import { use, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import ReactQuill from "react-quill";
import { Authors, categories } from "@/app/utils";

const Write = () => {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [value, setValue] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [catSlug, setCatSlug] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("/assets/placeholder.png");

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:5000/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description: value,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
        summary,
        images: ["/assets/p1.jpeg"],
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  // Formats configuration
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <div className={`${styles.container}`}>
        <input
          type="text"
          placeholder="Title"
          className={styles.input}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="flex justify-between container">
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <button className={styles.addButton}>
            <label htmlFor="image">
              <Image src="/assets/image.png" alt="" width={100} height={100} />
            </label>
          </button>

          <div className="relative w-80 h-80">
            <Image alt="blog" fill src={preview} />
          </div>
        </div>

        <select
          className={styles.select}
          onChange={(e) => setCatSlug(e.target.value)}
        >
          {categories.map((cat) => (
            <option value={cat.slug} key={cat.slug}>
              {cat.title}
            </option>
          ))}
        </select>
        <select
          className={styles.select}
          onChange={(e) => setUser(e.target.value)}
          value={user}
        >
          {Authors.map((user) => (
            <option value={user.id} key={user.id}>
              {user.authorName}
            </option>
          ))}
        </select>
        <textarea
          placeholder="write summery...."
          className={styles.textarea}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <div className={styles.editor}>
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <Image src="/assets/plus.png" alt="" width={16} height={16} />
          </button>

          <ReactQuill
            className={styles.textArea}
            theme="bubble"
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
            placeholder="Tell your story..."
          />
        </div>
        <button className={styles.publish} onClick={handleSubmit}>
          Publish
        </button>
      </div>
    </div>
  );
};

export default Write;
