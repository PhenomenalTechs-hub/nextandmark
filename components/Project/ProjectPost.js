import React from "react";
import Link from "next/link";

export default function ProjectPost({ project }) {
  return (
    <div className="blogPost">
      <div>
        <Link href={`/projects/${project.slug}`}>
          <a>
            <img src={project.img} />
          </a>
        </Link>

        <div className="date">{project.date}</div>
        <Link href={`/projects/${project.slug}`}>
          <a className="blogTitle">{project.title}</a>
        </Link>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
