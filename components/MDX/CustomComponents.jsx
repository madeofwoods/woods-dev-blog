import Image from "next/image";
import styles from "./customMDX.module.css";

export const H1 = ({ children }) => {
  return <h1 className={styles.h1}>{children}</h1>;
};

export const Para = ({ children }) => {
  return <p className={styles.para}>{children}</p>;
};

export const Strong = ({ children }) => {
  return <strong className={styles.strong}>{children}</strong>;
};

const Tag = ({ children }) => {
  return <span className={styles.tag}>{children}</span>;
};

const UL = ({ children }) => {
  return <ul className={styles.ul}>{children}</ul>;
};

const Item = ({ children }) => {
  return (
    <li className={styles.li}>
      <span>
        <Image className={styles.icon} src="/svg/arrow.svg" alt="" width={20} height={20} />
      </span>
      <span>{children}</span>
    </li>
  );
};

const OL = ({ children }) => {
  return <ol className={styles.ordered}>{children}</ol>;
};

const OrderedItem = ({ children }) => {
  return <li className={styles.oLi}>{children}</li>;
};

export const components = {
  h1: H1,
  p: Para,
  strong: Strong,
  Tag: Tag,
  ul: UL,
  li: Item,
  OL: OL,
  Item: OrderedItem,
};
