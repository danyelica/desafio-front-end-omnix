import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import useUser from "../../hooks/useUser";
import api from "../../services/api";
import "./style.css";

export default function Home() {
  const { errorMessage, setErrorMessage, setCep, setHeaderMessage } = useUser();
  const [input, setInput] = useState("");
  const navigate = useNavigate("Bem vindo!");

  useEffect(() => {
    setHeaderMessage;
  }, []);

  function handleInput(event) {
    setInput(event.target.value);
  }

  async function handleForm(event) {
    event.preventDefault();
    try {
      const { data } = await api.get(`/${input}/json`);

      if (data.erro) {
        return setErrorMessage("Cep não existe");
      }

      setCep(data);
      navigate("/offers");
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <div>
      <Header />
      <section className='home'>
        <form className='form' onSubmit={handleForm}>
          <h1>Informe-nos seu CEP</h1>
          <input type='number' onChange={(event) => handleInput(event)} />
          <button>Vamos lá!</button>
        </form>
        {errorMessage && (
          <div className='error-box'>
            <p>{errorMessage}</p>
          </div>
        )}
      </section>
    </div>
  );
}
