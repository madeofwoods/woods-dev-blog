import Image from "next/image";
import styles from "./customMDX.module.css";
import { Source_Code_Pro } from "next/font/google";
import { Item } from "./ClientCustomComponents";
import Link from "next/link";
import { H1, H2, H3 } from "./HeadersCustomComponents";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

//apply ids to H1 to be found by intersection observer

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

//Ordered List
const List = ({ children }) => {
  return <div className={styles.list}>{children}</div>;
};
//Ordered List Item
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
    <Link href={link} target="_blank" passHref>
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
    </Link>
  );
};

// li calls the <Item /> component in this way because it is a client component
export const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: Para,
  strong: Strong,
  Tag: Tag,
  ul: UL,
  li: (props) => <Item {...props} />,
  List: List,
  ListItem: ListItem,
  Img: Img,
  a: Anchor,
  Note: Note,
  LinkedIn: LinkedIn,
};
