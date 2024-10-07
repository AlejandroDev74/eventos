import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user)

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-2xl font-bold">
        <Link to={isAuthenticated ? "/tasks" : "/"}>Administrador de eventos React</Link>
      </h1>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              Bienvenido <strong>{user.username}</strong>
            </li>
            <li>
              <ButtonLink to="/add-task">Nuevo evento</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/tasks">Eventos</ButtonLink>
            </li>
            <li>
              <Link to="/" onClick={() => logout()}>
                Salir
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink to="/login">Iniciar sesión</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register">Registrarse</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
