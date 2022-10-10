import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import useUser from "../../hooks/useUser";
import "./style.css";

export default function Offers() {
  const { cep, setHeaderMessage } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    setHeaderMessage(`
        CEP: ${cep.cep},
    Logradouro: ${cep.logradouro},
    Bairro: ${cep.bairro},
    Localidade: ${cep.localidade},
    UF: ${cep.uf}`);
  }, []);

  function handleHomeButton() {
    setHeaderMessage("Seja bem vindo!");

    navigate("/home");
  }

  return (
    <div>
      <Header />
      <section className='offers'>
        <div className='offers-boxes'>
          <div className='offers-box'>
            <h3>Titulo</h3>
            <p>Descrição</p>
          </div>
          <div className='offers-box'>
            <h3>Titulo</h3>
            <p>Descrição</p>
          </div>
          <div className='offers-box'>
            <h3>Titulo</h3>
            <p>Descrição</p>
          </div>
        </div>
        <button className='home-button' onClick={() => handleHomeButton()}>
          Ops, errei meu cep!
        </button>
      </section>
    </div>
  );
}
