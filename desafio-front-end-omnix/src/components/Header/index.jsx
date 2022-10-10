import useUser from "../../hooks/useUser";
import "./style.css";

export default function Header() {
  const { headerMessage } = useUser();

  return (
    <section className='header'>
      <h3>{headerMessage}</h3>
    </section>
  );
}
