import { FC, FormEvent, useState } from "react";
import styles from "@styles/Form.module.scss";
import axios from "axios";

const Form: FC = () => {
  const [email, setEmail] = useState("");
  const [primer_nombre, setPrimerNombre] = useState("");
  const [segundo_nombre, setSegundoNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [estatura, setEstatura] = useState("");
  const [club, setClub] = useState("");
  const [posicion, setPosicion] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [documento, setDocumento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, SetDireccion] = useState("");
  const [message, setMessage] = useState("");
  const API_URL = "http://localhost:3001/players";

  function sendData() {
    axios.post(API_URL, {
      primer_nombre: primer_nombre,
      segundo_nombre: segundo_nombre,
      apellidos: apellidos,
      email: email,
      estatura: estatura,
      posicion: posicion,
      club: club,
      nacionalidad: nacionalidad,
      documento: documento,
      telefono: telefono,
      direccion: direccion,
    })
    .then(function (response) {
      setMessage("Formulario enviado correctamente");
    })
    .catch(function (error) {
      setMessage(error);
    });
  }
  let handleSubmit = async (e) => {
    e.preventDefault();
    sendData(); 
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
              value={primer_nombre}
              onChange={(e) => setPrimerNombre(e.target.value)}
            />
            <input
              type="text"
              id="secondName"
              className="nombres"
              placeholder="Segundo Nombre"
              value={segundo_nombre}
              onChange={(e) => setSegundoNombre(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name=""
              id="lastName"
              className="form__input"
              placeholder="Apellidos"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
            />
            <input
              type="email"
              id="Email"
              className="form__input"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="form__input"
              type="number"
              id="estatura"
              placeholder="Estatura (metros)"
              value={estatura}
              onChange={(e) => setEstatura(e.target.value)}
            />
            <input
              className="form__input"
              type="text"
              id="posicion"
              placeholder="Posición"
              value={posicion}
              onChange={(e) => setPosicion(e.target.value)}
            />
          </div>
          <div>
            <input
              className="form__input"
              type="text"
              id="clubActual"
              placeholder="Club actual"
              value={club}
              onChange={(e) => setClub(e.target.value)}
            />
            <input
              className="form__input"
              type="text"
              id="nacionalidad"
              placeholder="Nacionalidad"
              value={nacionalidad}
              onChange={(e) => setNacionalidad(e.target.value)}
            />
          </div>
          <div>
            <input
              className="form__input"
              type="text"
              id="cedula"
              placeholder="Cdedula / Pasaporte"
              maxLength={11}
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
            />
            <input
              className="form__input"
              type="number"
              id="telefono"
              placeholder="Número de teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div className={styles.direcion}>
            <input
              className={styles.direcionput}
              type="text"
              id="direcion"
              placeholder="Dirección"
              value={direccion}
              onChange={(e) => SetDireccion(e.target.value)}
            />
          </div>
          <button type="submit">Enviar</button>
          <div className={styles.error}>{message ? <p>{message}</p> : null}</div>
        </div>
      </form>
    </section>
  );
};

export default Form;
