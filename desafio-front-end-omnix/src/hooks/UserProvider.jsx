import { useState } from "react";

export default function useUserProvider() {
  const [cep, setCep] = useState(null);
  const [headerMessage, setHeaderMessage] = useState("Bem vindo!");
  const [errorMessage, setErrorMessage] = useState("");

  return {
    cep,
    setCep,
    headerMessage,
    setHeaderMessage,
    errorMessage,
    setErrorMessage,
  };
}
