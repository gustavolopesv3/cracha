import React, { useState } from "react";
import * as S from "./styles";

//Libs
import SaveIcon from "@material-ui/icons/Save";
import html2canvas from "html2canvas";
import { message } from "antd";
import "file-saver";

//Files
import LogoP from "../../assets/img/logo-p.jpg";
import Gustavo from "../../assets/img/gustavo.jpeg";
import LogoG from "../../assets/img/logo-g.jpg";
import LogoMail from "../../assets/img/icon-mail.jpg";
import LogoWeb from "../../assets/img/icon-web.jpg";
import LogoMap from "../../assets/img/icon-map.jpg";
import LogoPhone from "../../assets/img/icon-phone.jpg";
import profissoes from "../../assets/json/profissoes.json";

//Conponents
import Header from "../../components/Header";
import Input from "../../components/Input";
import Selected from "../../components/Selected";
import { ButtonIcon } from "../../components/ButtonIcon";

const Home = () => {
  const key = "updatable";

  const [loadings, setLoadings] = useState(false);
  const [pessoa, setPessoa] = useState({
    primeiroNome: "",
    discord: "",
    cargo: "",

  });

  const onChangeForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPessoa((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadings(true);

    message.loading({ content: "Gerando assinatura...", key });
    
    setTimeout(() => {
      message.success({ content: "Sucesso!", key, duration: 3 });
      setLoadings(false);
      
      html2canvas(document.querySelector("#capture")).then((canvas) => {
        
        canvas.toBlob(function (blob) {
          // Gerando arquivo para download
          window.saveAs(blob, `${pessoa.primeiroNome}`);
        });
      });
    }, 2000);
  };
  return (
    <>
    <S.Rootzera>
      <form onSubmit={handleSubmit} className="container">
    <div>
    <Input
              name="primeiroNome"
              id="primeiroNome"
              label="Primeiro nome"
              onChange={onChangeForm}
              value={pessoa.primeiroNome}
              required
            />
            <Input
              name="discord"
              id="discord"
              label="Discord"
              onChange={onChangeForm}
              value={pessoa.discord}
              required
            />
            <Selected
              name="cargo"
              id="cargo"
              label="Área de atuação"
              onChange={onChangeForm}
              value={pessoa.cargo}
              currencies={profissoes}
              required
            />
    </div>
    <ButtonIcon
              label="Salvar"
              type="primary"
              htmlType="submit"
              loadings={loadings}
              icon={<SaveIcon />}
              />
      </form>
    <div><S.Container id="capture">
              <h2>{pessoa.primeiroNome}</h2>
              <img 
              className="mt-2"
              src={Gustavo} alt="Foto" />
              <span>{pessoa.cargo}</span>
              <span>{pessoa.discord}</span>
            </S.Container></div>
    </S.Rootzera>
      {/* <S.Rootzera>
      <form onSubmit={handleSubmit} className="container">
        <div className="row g-3 mb-5">
          <div className="col-md-2">
            <Input
              name="primeiroNome"
              id="primeiroNome"
              label="Primeiro nome"
              onChange={onChangeForm}
              value={pessoa.primeiroNome}
              required
            />
          </div>

          <div className="col-md-2">
            <Input
              name="segundoNome"
              id="segundoNome"
              label="Segundo nome"
              onChange={onChangeForm}
              value={pessoa.segundoNome}
              required
            />
          </div>
        </div>
          <div className="row g-3 mb-5">
          <div className="col-md-2">
            <Selected
              name="cargo"
              id="cargo"
              label="Área de atuação"
              onChange={onChangeForm}
              value={pessoa.cargo}
              currencies={profissoes}
              required
            />
          </div>

          <div className="col-md-2">
            <Input
              name="email"
              id="email"
              label="E-mail"
              onChange={onChangeForm}
              value={pessoa.email}
              required
            />
          </div>
          </div>

            <S.Container id="capture">
              <h2>{pessoa.primeiroNome}</h2>
              <img 
              className="mt-2"
              src={Gustavo} alt="Foto" />
              <span>{pessoa.cargo}</span>
            </S.Container>
      
            <ButtonIcon
              label="Salvar"
              type="primary"
              htmlType="submit"
              loadings={loadings}
              icon={<SaveIcon />}
              />

      </form>
  </S.Rootzera> */}
    </>
  );
};

export default Home;
