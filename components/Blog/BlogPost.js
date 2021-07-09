import React from "react";
import Link from "next/link";

export default function BlogPost({ blog }) {
  return (
    <div className="blogPost">
      <div>
        <Link href={`/posts/${blog.slug}`}>
          <a>
            <img src={blog.img} />
          </a>
        </Link>

        <div className="date">{blog.date}</div>
        <Link href={`/posts/${blog.slug}`}>
          <a className="blogTitle">{blog.title}</a>
        </Link>
        <p>{blog.description}</p>
      </div>
    </div>
  );
}
