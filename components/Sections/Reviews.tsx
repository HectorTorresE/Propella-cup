import { FC } from "react";
import Image from "next/image";
import styles from "@styles/Sections/Productivity.module.scss";

const Reviews: FC = () => {
  return (
    <section id="Informacion" aria-labelledby="productivity-title" className={styles.main}>
        <div>
          <h1 id="productivity-title">Información general</h1>
            <ul>
              <li>Fechas: Del 4 al 8 de enero del 2023, se compite el 5,6,7 de enero</li>
              <br />
              <li>Lugar: Proyecto Gol, San Jose, Costa Rica</li>
              <br />
              <li>Aeropuerto: Juan Santamaria International Airport(SJO)</li>
              <br />
              <li>Competicón: Cada equipo participara en tres partidos</li>
              <br />
              <li>Hotel: A-loft ubicado en San Jose, Costa Rica</li>
            </ul>
        </div>
      <Image
        width={615}
        height={465}
        src="/general.jpg"
        alt=""
        objectFit="contain"
        priority
      />
    </section>
  );
};

export default Reviews;
