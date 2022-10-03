import "./navbar.css";

export const Navbar = ({ setCurrentPage }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => setCurrentPage(0)}>Inicio</li>
        <li onClick={() => setCurrentPage(1)}>Lista</li>
      </ul>
    </nav>
  );
};
