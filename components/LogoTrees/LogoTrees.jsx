"use client";

import Image from "next/image";
import styles from "./logoTrees.module.css";
import { useState } from "react";
import { treeState } from "@/utils/definitions";

const trees = { w: 20, h: 30 };

const LogoTrees = () => {
  const [isTree, setIsTree] = useState(treeState);

  //refactor this immediately please

  return (
    <div className={styles.container}>
      <div className={styles.treeContainer} onMouseOver={() => setIsTree({ ...isTree, 0: false })}>
        <Image
          className={`${styles.trees} ${!isTree[0] && styles.treeFade}`}
          src="/trees/treeOne.png"
          width={trees.w}
          height={trees.h}
          alt=""
        />
        <div className={`${styles.letter}  ${!isTree[0] && styles.letterFade}`}>M</div>
      </div>
      <div className={styles.treeContainer} onMouseOver={() => setIsTree({ ...isTree, 1: false })}>
        <Image
          className={`${styles.trees} ${!isTree[1] && styles.treeFade}`}
          src="/trees/treeTwo.png"
          width={17}
          height={25}
          alt=""
        />
        <div className={`${styles.letter}  ${!isTree[1] && styles.letterFade}`}>A</div>
      </div>
      <div className={styles.treeContainer} onMouseOver={() => setIsTree({ ...isTree, 2: false })}>
        <Image
          className={`${styles.trees} ${!isTree[2] && styles.treeFade}`}
          src="/trees/treeFour.png"
          width={17}
          height={27}
          alt=""
        />
        <div className={`${styles.letter}  ${!isTree[2] && styles.letterFade}`}>D</div>
      </div>
      <div className={styles.treeContainer} onMouseOver={() => setIsTree({ ...isTree, 3: false })}>
        <Image
          className={`${styles.trees} ${!isTree[3] && styles.treeFade}`}
          src="/trees/treeSeven.png"
          width={20}
          height={29}
          alt=""
        />
        <div className={`${styles.letter}  ${!isTree[3] && styles.letterFade}`}>E</div>
      </div>
      <div className={styles.treeContainer} onMouseOver={() => setIsTree({ ...isTree, 4: false })}>
        <Image
          className={`${styles.trees} ${!isTree[4] && styles.treeFade}`}
          src="/trees/treeTwo.png"
          width={20}
          height={27}
          alt=""
        />
        <div className={`${styles.letter}  ${!isTree[4] && styles.letterFade}`}>O</div>
      </div>
      <div className={styles.treeContainer} onMouseOver={() => setIsTree({ ...isTree, 5: false })}>
        <Image
          className={`${styles.trees} ${!isTree[5] && styles.treeFade}`}
          src="/trees/treeThree.png"
          width={20}
          height={26}
          alt=""
        />
        <div className={`${styles.letter}  ${!isTree[5] && styles.letterFade}`}>F</div>
      </div>{" "}
      <div className={styles.treeContainer} onMouseOver={() => setIsTree({ ...isTree, 8: false })}>
        <Image
          className={`${styles.trees} ${!isTree[8] && styles.treeFade}`}
          src="/trees/treeTwo.png"
          width={trees.w}
          height={31}
          alt=""
        />
        <div className={`${styles.letter}  ${!isTree[8] && styles.letterFade}`}>W</div>
      </div>{" "}
      <div className={styles.treeContainer} onMouseOver={() => setIsTree({ ...isTree, 9: false })}>
        <Image
          className={`${styles.trees} ${!isTree[9] && styles.treeFade}`}
          src="/trees/treeThree.png"
          width={trees.w}
          height={28}
          alt=""
        />
        <div className={`${styles.letter}  ${!isTree[9] && styles.letterFade}`}>O</div>
      </div>{" "}
      <div className={styles.treeContainer} onMouseOver={() => setIsTree({ ...isTree, 10: false })}>
        <Image
          className={`${styles.trees} ${!isTree[10] && styles.treeFade}`}
          src="/trees/treeOne.png"
          width={trees.w}
          height={29}
          alt=""
        />
        <div className={`${styles.letter}  ${!isTree[10] && styles.letterFade}`}>O</div>
      </div>{" "}
      <div className={styles.treeContainer} onMouseOver={() => setIsTree({ ...isTree, 11: false })}>
        <Image
          className={`${styles.trees} ${!isTree[11] && styles.treeFade}`}
          src="/trees/treeSeven.png"
          width={trees.w}
          height={trees.h}
          alt=""
        />
        <div className={`${styles.letter}  ${!isTree[11] && styles.letterFade}`}>D</div>
      </div>{" "}
      <div className={styles.treeContainer} onMouseOver={() => setIsTree({ ...isTree, 12: false })}>
        <Image
          className={`${styles.trees} ${!isTree[12] && styles.treeFade}`}
          src="/trees/treeFour.png"
          width={trees.w}
          height={trees.h}
          alt=""
        />
        <div className={`${styles.letter}  ${!isTree[12] && styles.letterFade}`}>S</div>
      </div>
    </div>
  );
};

export default LogoTrees;
