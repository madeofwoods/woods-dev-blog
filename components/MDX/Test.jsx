import styles from "./customMDX.module.css";

export const H1 = ({ children }) => {
  return (
    <h1 className={styles.h1} id={typeof children == "string" && String(children).toLowerCase().split(" ").join("-")}>
      {children}
    </h1>
  );
};
