import React from "react";
import footerLogo from "../../Assets/img/navLogo.png";
import { BsFacebook, BsYoutube, BsInstagram, BsGithub } from "react-icons/bs";
import "./footer.css";

export const FooterApp = () => {
  return (
 
      <footer className="footer">
        <div className="row d-flex justify-content-center align-items-center m-0 bg-dark text-white p-2 row-cols-md-3 row-cols-sm-1">
          <div className="d-flex justify-content-center align-items-center p-2">
            <img
              src={footerLogo}
              width="200"
              height="200"
              className="p-2 navLogo"
              alt="React Bootstrap logo"
            />
          </div>
          <div className="text-center p-2">
            <h5 className="mt-2 mb-2">Edwin Sebastian Ayala</h5>
            <h5 className="mt-2 mb-2">Cel: 315-354-2819</h5>
            <h5 className="mt-2 mb-2">Correo: esayala86@misena.edu.co</h5>
          </div>
          <div className="d-flex justify-content-center align-items-center p-2">
            <a
              href="https://www.facebook.com/edwin.ayala.7777"
              className="l-image m-1"
            >
              <BsFacebook size={25} className="image m-3" />
            </a>
            <a
              href="https://www.instagram.com/sebas.ayala_0225/"
              className="l-image m-1"
            >
              <BsInstagram size={25} className="image m-3" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCmihyDzkpWxAEu6emzz6jFw"
              className="l-image m-1"
            >
              <BsYoutube size={25} className="image m-3" />
            </a>
            <a href="https://github.com/EdwinAyala22" className="l-image m-1">
              <BsGithub size={25} className="image m-3" />
            </a>
          </div>
        </div>
        <div className="row line-footer m-0 p-3 text-center text-white">
          <small>
            {" "}
            © 2022 <b>Edwin Ayala</b> - Todos los Derechos Reservados
          </small>
        </div>
      </footer>
  );
};
