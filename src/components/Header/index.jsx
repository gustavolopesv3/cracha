import React from "react";
import { Container } from "./styles";

import LogoSquads from "../../assets/img/logo-p.jpg";

function Header() {
  return (
    <Container>
      <nav className="navbar navbar-light bg-light mb-5 bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="#teste">
            <img
              src={LogoSquads}
              alt="logo da squads com o nome squads"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
    </Container>
  );
}

export default Header;
