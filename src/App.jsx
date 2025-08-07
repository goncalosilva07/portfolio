import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

function Menu() {
  const location = useLocation();
  return (
    <>
      <div className="relative flex items-center w-full lg:px-8 p-4 pt-10 pb-6 lg:pt-4 lg:pb-4">
        {/* Esquerda */}
        <span className="font-bold text-2xl hidden lg:block">Gonçalo S.</span>

        {/* Centro */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 bg-zinc-800 p-3 rounded-lg">
          <ul className="flex gap-4">
            <li>
              <Link to="/">
                <span
                  className={`px-3 py-1 rounded ${
                    location.pathname === "/"
                      ? "bg-zinc-600 text-white"
                      : "text-zinc-500"
                  }`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <span
                  className={`px-3 py-1 rounded ${
                    location.pathname === "/projects"
                      ? "bg-zinc-600 text-white"
                      : "text-zinc-500"
                  }`}
                >
                  Projects
                </span>
              </Link>
            </li>
              <li>
              <Link to="/contacts">
                <span
                  className={`px-3 py-1 rounded ${
                    location.pathname === "/contacts"
                      ? "bg-zinc-600 text-white"
                      : "text-zinc-500"
                  }`}
                >
                  Contacts
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Direita */}
        <a
    href="https://goncalosilva07.github.io/TerminalPortfolio"
    target="_blank"
    className="font-bold text-2xl bg-zinc-800 p-3 rounded-lg hover:bg-zinc-500 transition-colors hidden lg:block ml-auto"
  >
    <span className="text-white flex items-center gap-2 text-xl font-bold">
      CMD Portfolio{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
        />
      </svg>
    </span>
  </a>
      </div>
    </>
  );
}

function App() {
  return (
    <Router basename="/portfolio">
      <Menu />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
