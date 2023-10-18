import styles from "./glass.module.css";

const Glass = ({ children, height }) => {
  return (
    <div className={styles.glass} style={{ height: height || 80 }}>
      {children}
    </div>
  );
};

export default Glass;
