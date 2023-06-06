import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <section className="ErreurContainer">
      <h1>404</h1>
      <p>Oups! L'utilisateur que vous chercher n'existe pas.</p>

      <Link
        to="/12
      "
      >
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
};

export default NotFoundPage;
