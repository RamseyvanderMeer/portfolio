import React from "react";
import Image from "next/image";
import styles from "../styles/Projects.module.scss";
import github from "../images/github.svg";
import link from "../images/link.svg";
import { LoadingPage } from "./Loading";

import Link from "next/link";

import { api } from "~/utils/api";

export default function Projects() {
  const { data, isLoading } = api.posts.getAll.useQuery();

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {isLoading ? (
          <div className={styles.item}>
            <LoadingPage />
          </div>
        ) : null}

        {!data ? (
          <div className={styles.item}>
            <LoadingPage />
          </div>
        ) : null}

        {data?.map((project) =>
          project.published ? (
            <div key={project.id} className={styles.item}>
              <div className={styles.title}>
                <h1>{project.title}</h1>
                <h2 className={styles.date}>
                  {project.updatedAt.getMonth()}/
                  {project.updatedAt.getFullYear()}
                </h2>
              </div>
              <div className={styles.description}>
                <div className="max-h-40 overflow-y-scroll">
                  <p>{project.content}</p>
                  <br />
                  <p>Technology: {project.tech}</p>
                </div>
                <div className={styles.linkContainer}>
                  {project.github ? (
                    <Link href={project.github}>
                      <Image
                        className={styles.link}
                        src={github as string}
                        alt="github"
                        width={24}
                        height={24}
                      />
                    </Link>
                  ) : null}
                  {project.link ? (
                    <Link href={project.link}>
                      <Image
                        className={styles.link}
                        src={link as string}
                        alt="link"
                        width={24}
                        height={24}
                      />
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
