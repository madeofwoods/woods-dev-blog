import Image from "next/image";
import styles from "./customMDX.module.css";
import { Source_Code_Pro } from "next/font/google";
import { Item } from "./ClientCustomComponents";
import Link from "next/link";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const H1 = ({ children }) => {
  return (
    <h1 className={styles.h1} id={typeof children == "string" && String(children).toLowerCase().split(" ").join("-")}>
      {children}
    </h1>
  );
};

export const Para = ({ children }) => {
  return <p className={styles.para}>{children}</p>;
};

export const Strong = ({ children }) => {
  return <strong className={styles.strong}>{children}</strong>;
};

const Tag = ({ children }) => {
  return <span className={`${styles.tag} ${sourceCodePro.className}`}>{children}</span>;
};

const UL = ({ children }) => {
  return <ul className={styles.ul}>{children}</ul>;
};

const OL = ({ children }) => {
  return <ol className={styles.ordered}>{children}</ol>;
};

const OrderedItem = ({ children }) => {
  return <li className={styles.oLi}>{children}</li>;
};

const List = ({ children }) => {
  return <div className={styles.list}>{children}</div>;
};

const ListItem = ({ children }) => {
  return <div className={styles.listItem}>{children}</div>;
};

const Img = ({ alt, src }) => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.blur}></div>
      <Image className={styles.img} src={src} alt={alt || " "} fill />
    </div>
  );
};

const Anchor = ({ href, children }) => {
  return (
    <span className={styles.linkContainer}>
      <a className={styles.link} href={href} target="_blank">
        {children}
      </a>
      <div className={styles.linkLine}></div>
    </span>
  );
};

const Note = ({ children }) => {
  return (
    <div className={styles.noteContainer}>
      <div className={styles.noteCutout}>
        <div className={styles.noteLogo}>!</div>
      </div>

      <div className={styles.note}>{children}</div>
    </div>
  );
};

const LinkedIn = ({ link, avatar, content, image, name }) => {
  return (
    // <a href={link} target="_blank">
    <div className={styles.linkedInContainer}>
      <div className={styles.linkedInMain}>
        <div className={styles.linkedInTitles}>
          <Image className={styles.linkedInAvatar} src={avatar} alt="" width={60} height={60} />
          <div className={styles.linkedInName}>{name}</div>
        </div>
        <div className={styles.linkedInText}>
          <div>{content}</div>
          <div className={styles.linkedInLink}>{link}</div>
        </div>
        <div className={styles.liImageBlock}>
          <div className={styles.linkedInImgContainer}>
            <Image src={image} alt="" fill />
          </div>
          <div className={styles.liImageFooter}>
            <div className={styles.liImageTitle}>MADEOFWOODS</div>
            <div className={styles.liImageDesc}>blog.madeofwoods.com · 5 min read</div>
          </div>
        </div>
      </div>
      <div className={styles.liFooter}>
        <div className={styles.liButton}>Post</div>
      </div>
    </div>
    // </a>
  );
};

export const components = {
  h1: H1,
  p: Para,
  strong: Strong,
  Tag: Tag,
  ul: UL,
  li: (props) => <Item {...props} />,
  List: List,
  Item: ListItem,
  ListItem: ListItem,
  Img: Img,
  a: Anchor,
  Note: Note,
  LinkedIn: LinkedIn,
};
