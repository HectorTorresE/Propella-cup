import { FC } from "react";
import Image from "next/image";
import styles from "@styles/Sections/Productivity.module.scss";

const Productivity: FC = () => {
  return (
    <section id="Objetivo" aria-labelledby="productivity-title" className={styles.main}>
      <Image
        width={615}
        height={465}
        src="/objetivo.jpg"
        alt=""
        objectFit="contain"
        priority
      />
      <div>
        <h1 id="productivity-title">Objetivo</h1>
        <p>
          Que cada miembro del equipo participante tenga una experiencia inigualable y al mismo tiempo pueda tener exposición deportiva en frente de instituciones americanas.
        </p>
        <h1 id="productivity-title">Proposito</h1>
        <p>
          ofrecer una exposición a nuestros atletas. Las evaluaciones son hechas exclusivamente por los entrenadores de las instituciones americanas, nosotros solo somos la platforma para que puedan demostrar su talento
        </p>
      </div>
    </section>
  );
};

export default Productivity;
