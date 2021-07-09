import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import matter from "gray-matter";
import BlogPost from "../components/Blog/BlogPost";
import ProjectPost from "../components/Project/ProjectPost";
import HeaderComponent from "../components/HeaderComponent";
import { NextSeo } from "next-seo";

export default function projects(props) {
  const realData = props.data.map((blog) => matter(blog));
  const realDataPr = props.dataPr.map((project) => matter(project));
  const listItemsPr = realDataPr.map((listItemPr) => listItemPr.data);
  const listItems = realData.map((listItem) => listItem.data);
  return (
    <section id="index-page">
      <NextSeo title="Projects" description="Projects" />
      <HeaderComponent />
      <h1 id="blog-header">Projects</h1>
      <div className="container">
        <div className="blogsContainer">
          {listItemsPr.map((project, i) => (
            <ProjectPost key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
export const getStaticProps = async () => {
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");
  const filesPr = fs.readdirSync(`${process.cwd()}/projects`, "utf-8");
  const blogs = files.filter((fn) => fn.endsWith(".md"));
  const projects = filesPr.filter((fn) => fn.endsWith(".md"));
  const dataPr = projects.map((project) => {
    const path = `${process.cwd()}/projects/${project}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });
    return rawContent;
  });
  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });
    return rawContent;
  });
  return {
    props: {
      data,
      dataPr,
    },
  };
};
