"use client";
import Image from "next/image";
import styles from "./writePage.module.css";
import { use, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import ReactQuill from "react-quill";
import { Authors, categories } from "@/app/utils";
import { AWS_GENETATE_PRE_SIGNED_URL, URL_END_POINT } from "@/app/utils/api";

const Write = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("/assets/placeholder.png");
  const [value, setValue] = useState("");
  const [user, setUser] = useState("");

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

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

  const validateForm = () => {
    if (!title.trim() || !value.trim() || !image) {
      alert("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const uploadImageToS3 = async () => {
    try {
      const preRes = await fetch(AWS_GENETATE_PRE_SIGNED_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blogTitle: title,
          fileName: image?.name,
          fileType: image?.type,
        }),
      });

      const sc = await preRes.json();
      console.log(sc?.body?.presigned_url);

      await fetch(sc?.body?.presigned_url, {
        method: "PUT",
        body: image,
      });

      return sc?.body?.fileName;
    } catch (error) {
      console.error("Error uploading image to S3:", error);
      throw new Error("Failed to upload image to S3");
    }
  };

  const createPost = async (imageFileName: string) => {
    try {
      const res = await fetch(`${URL_END_POINT}/create-post`, {
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
          images: [imageFileName],
        }),
      });

      if (res.status === 200) {
        const data = await res.json();
        router.push(`/posts/${data.slug}`);
      } else {
        throw new Error("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      throw new Error("Failed to create post");
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const imageFileName = await uploadImageToS3();
      await createPost(imageFileName);
    } catch (error) {
      console.error("Error handling submit:", error);
      // Handle error display or logging as needed
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
      matchVisual: false,
    },
  };

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
