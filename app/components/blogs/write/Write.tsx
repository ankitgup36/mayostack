"use client";
import Image from "next/image";
import styles from "./writePage.module.css";
import { useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import ReactQuill from "react-quill";
import { categories } from "@/app/utils";

const Write = () => {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [value, setValue] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [catSlug, setCatSlug] = useState<string>("");
  const [summary, setSummary] = useState<string>("");

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

  return (
    <div className="container">
      <div className={`${styles.container}`}>
        <input
          type="text"
          placeholder="Title"
          className={styles.input}
          onChange={(e) => setTitle(e.target.value)}
        />
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
          {open && (
            <div className={styles.add}>
              <input
                type="file"
                id="image"
                onChange={(e) => setFile(e?.target?.files?.[0] ?? null)}
                style={{ display: "none" }}
              />
              <button className={styles.addButton}>
                <label htmlFor="image">
                  <Image
                    src="/assets/image.png"
                    alt=""
                    width={16}
                    height={16}
                  />
                </label>
              </button>
              <button className={styles.addButton}>
                <Image
                  src="/assets/external.png"
                  alt=""
                  width={16}
                  height={16}
                />
              </button>
              <button className={styles.addButton}>
                <Image src="/assets/video.png" alt="" width={16} height={16} />
              </button>
            </div>
          )}
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
