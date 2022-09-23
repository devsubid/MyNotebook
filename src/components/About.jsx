import React from "react";

function About() {
  let aboutStyle = {
    padding: "2rem 0",
  };
  return (
    <div className="about container" style={aboutStyle}>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "500",
          textTransform: "uppercase",
        }}
      >
        About
      </h2>
      <p>
        MyNotebook is a simple, straightforward web app that makes it easy to
        keep track of your notes. There are no bells and whistles, just a simple
        interface that lets you create, customize, and delete notes. You can
        also use our advanced filter to set the color of the web app to suit
        your mood. <br />
        MyNotebook is available for free on the web.
        <br /> MyNotebook doesn't have any paid version that will gives you
        access to additional features, nor does it have any in-app purchases.
      </p>
      <div className="features">
        <h3>
          <div className="svg"></div>Features Overview:
        </h3>
        <li>Modern, intuitive user interface.</li>
        <li>Easy Access.</li>
        <li>Secure and Free.</li>
        <li>No In-App purchases.</li>
        <li>Available on the web.</li>
        <li>Advance Filter options.</li>
        <li>Dark Theme / Night mode.</li>
        <li>Customizable notes.</li>
        <li>Delete notes.</li>
        <li>Notes backup.</li>
      </div>
      <div className="open-source">
        <h3>
          <div className="svg"></div>Open Source:
        </h3>
        <p>
          MyNotebook is an open source project. You can find the source code on
          <a
            href="https://github.com/itsme-Subid/MyNotebook"
            target={"_blank"}
            rel="noreferrer"
          >
            GitHub.
          </a>
          <br />
          I'm currently using <strong>react.js</strong> to build MyNotebook.
        </p>
      </div>
    </div>
  );
}

export default About;
