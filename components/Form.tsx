import { FC, FormEvent, useState } from "react";
import styles from "@styles/Form.module.scss";

const Form: FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setEmail("");
  }

  return (
    <section aria-label="Early access" className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Inscribete</h1>
        <p>
          Completa el formulario para y realiza el pago para guardar tu cupo
        </p>
        <div className={styles.inputWrapper}>
          <div>
            <input
              className="nombres"
              type="text"
              id="firstName"
              placeholder="Primer nombre"
            />
            {error ? <p className={styles.error}>{error}</p> : null}
            <input
              type="text"
              id="secondName"
              className="nombres"
              placeholder="Segundo Nombre"
            />
          </div>
          <div>
            <input
              type="text"
              name=""
              id="lastName"
              className="form__input"
              placeholder="Apellidos"
            />
            {error ? <p className={styles.error}>{error}</p> : null}
            <input
              type="email"
              id="Email"
              className="form__input"
              placeholder="email@example.com"
              onChange={({ target: { value } }) => setEmail(value)}
              value={email}
            />
            {error ? <p className={styles.error}>{error}</p> : null}
          </div>
          <div>
            <input
              className="form__input"
              type="number"
              id="estatura"
              placeholder="Estatura (metros)"
            />
            {error ? <p className={styles.error}>{error}</p> : null}
            <input
              className="form__input"
              type="text"
              id="posicion"
              placeholder="Posición"
            />
            {error ? <p className={styles.error}>{error}</p> : null}
          </div>
          <div>
            <input
              className="form__input"
              type="text"
              id="clubActual"
              placeholder="Club actual"
            />
            {error ? <p className={styles.error}>{error}</p> : null}
            <input
              className="form__input"
              type="text"
              id="nacionalidad"
              placeholder="Nacionalidad"
            />
            {error ? <p className={styles.error}>{error}</p> : null}
          </div>
          <div>
            <input
              className="form__input"
              type="text"
              id="cedula"
              placeholder="Cdedula / Pasaporte"
              maxLength={11}
            />
            {error ? <p className={styles.error}>{error}</p> : null}
            <input
              className="form__input"
              type="number"
              id="telefono"
              placeholder="Número de teléfono"
            />
            {error ? <p className={styles.error}>{error}</p> : null}
          </div>
          <div className={styles.direcion}>
            <input
              className={styles.direcionput}
              type="text"
              id="direcion"
              placeholder="Dirección"
            />
            {error ? <p className={styles.error}>{error}</p> : null}
          </div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </section>
  );
};

export default Form;

const emailRegex = new RegExp(
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
);
