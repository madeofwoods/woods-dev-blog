"use client";
import styles from "./tableOfContents.module.css";
import { useEffect, useState } from "react";

// SCroll Bar

const handleClick = (e, id) => {
  e.preventDefault();
  document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" });
};

const TableOfContents = ({ headings, ids }) => {
  const [active, setActive] = useState("");
  const [scroll, setScroll] = useState(0);
  console.log(ids);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      let scrollPercentRounded = Math.round(scrollPercent * 100);
      console.log(scrollPercentRounded);
      setScroll(scrollPercentRounded);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -50% 0%`, threshold: 0.5 }
    );
    ids.forEach((id) => observer.observe(document.getElementById(id)));

    return () => {
      ids.forEach((id) => {
        observer.unobserve(document.getElementById(id));
      });
    };
  }, [ids]);

  return (
    <div className={styles.container}>
      <div className={styles.powerbar}>
        <div className={styles.power} style={{ height: `${scroll}%` }}>
          <div className={styles.glow}></div>
        </div>
      </div>
      <div className={styles.headings}>
        {headings.map((heading) => (
          <a
            href={`#${heading.id}`}
            className={`${styles.heading} ${active == heading.id && styles.active}`}
            // style={active == heading.id ? { color: "#a089b9" } : { color: "var(--text)" }}
            key={heading.id}
            scroll={true}
            onClick={(e) => handleClick(e, heading.id)}
          >
            {heading.heading}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TableOfContents;
