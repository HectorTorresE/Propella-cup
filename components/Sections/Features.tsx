import Image from "next/image";
import { createElement, FC } from "react";
import styles from "@styles/Sections/Features.module.scss";

const Features: FC = () => {
  return (
    <section id="Universidades" aria-label="Features" className={styles.main}>
      {elements.map(({ image, text, title }, id) => {
        return (
          <div key={`Feature-${id}`}>
            <Image
              width={75}
              height={75}
              src={image}
              objectFit="contain"
              priority
              alt=""
            />
            {createElement(`h${1 + id}`, null, title)}
            <p>{text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Features;

const elements = [
  {
    image: "/Virginia_T.png",
    title: "Virginia Tech",
    text: `Division 1 NCAA`,
  },
  {
    image: "/UCF.svg",
    title: "University of Central Florida",
    text: `Division 1 NCAA`,
  },
  {
    image: "/monmouth.svg",
    title: "Monmouth University",
    text: `Division 1 NCAA`,
  },
  {
    image: "/umo.png",
    title: "University of Mount Olive",
    text: `Division 2 NCAA`,
  },
];
