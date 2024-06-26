"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";
import useNavigateWithParams from "@/app/hooks/useNavigateWithParams";

const Pagination = ({
  page,
  hasPrev,
  hasNext,
}: {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  const router = useRouter();
  const { generateUrlWithParams } = useNavigateWithParams();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() =>
          router.push(
            generateUrlWithParams("", { page: (page - 1).toString() })
          )
        }
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={() =>
          router.push(
            generateUrlWithParams("", { page: (page + 1).toString() })
          )
        }
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
