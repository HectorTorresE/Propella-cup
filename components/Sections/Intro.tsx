import Image from "next/image";
import styles from "@styles/Sections/Intro.module.scss";

const Intro = () => (
  <section aria-labelledby="section1-title" className={styles.main}>
    <Image
      width={720}
      height={534}
      src="/propella.png"
      alt=""
      objectFit="contain"
      priority
    />
    <h1 id="section1-title">
      Propella Cup 2023
    </h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis, risus id laoreet imperdiet, odio dui volutpat nunc, eget tristique neque nibh eu orci.
    </p>
    <button type="button">Get Started</button>
  </section>
);

export default Intro;
