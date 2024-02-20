import styles from "./customMDX.module.css";

export const H1 = ({ children }) => {
  return (
    <h1 className={styles.h1} id={typeof children == "string" && String(children).toLowerCase().split(" ").join("-")}>
      {children}
    </h1>
  );
};

export const H2 = ({ children }) => {
  return (
    <h2 className={styles.h2} id={typeof children == "string" && String(children).toLowerCase().split(" ").join("-")}>
      {children}
    </h2>
  );
};

export const H3 = ({ children }) => {
  return (
    <h3 className={styles.h3} id={typeof children == "string" && String(children).toLowerCase().split(" ").join("-")}>
      {children}
    </h3>
  );
};
