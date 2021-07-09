import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Header from "../../components/Header";
import { NextSeo } from "next-seo";

import React from "react";
import HeaderComponent from "../../components/HeaderComponent";

export default function BlogPost(props) {
  const { data, content } = matter(props.content);
  return (
    <>
      <HeaderComponent />
      <div id="blog-post-container">
        <div className="container">
          <NextSeo title={data.title} description={data.description} />
          <h1 className="header">{data.title}</h1>
          <h3>{data.description}</h3>
          <ReactMarkdown children={content} />
        </div>
        <hr />
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const fs = require("fs");
  const { blog } = context.params;
  const content = fs.readFileSync(
    `${process.cwd()}/content/${blog}.md`,
    "utf8"
  );
  return {
    props: {
      content,
    },
  };
};
