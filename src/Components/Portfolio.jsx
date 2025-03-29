/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portofolio-image.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Steam",
    description:
      "Steam is a digital distribution platform for video games, developed by Valve Corporation. It offers a wide range of games, software, and other content for purchase and download.",
    url: "https://store.steampowered.com",
  },
  {
    title: "Tweakers",
    description:
      "Tweakers is a Dutch technology website that focuses on news, reviews, and discussions about technology, gadgets, and software.",
    url: "https://tweakers.net",
  },
  {
    title: "klaasvm.com",
    description:
      "This is my own site and space on the web where I can share my work, projects and do whatever I want.",
    url: "https://www.klaasvm.com",
  },
  {
    title: "GitHub",
    description:
      "Github is in my opinion the best place for every developer. I use it almost for everything relevated with coding.",
    url: "www.youtube.com/watch?v=pBy1zgt0XPc&t",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
