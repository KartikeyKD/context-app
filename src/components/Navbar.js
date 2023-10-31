import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import AmountBar from "./AmountBar";

function Navbar() {
  const { login } = useContext(UserContext);
  const { setValue } = useContext(UserContext);
  const { setLogin } = useContext(UserContext);
  const { value } = useContext(UserContext);
  const { setAmount } = useContext(UserContext);
  const { amount } = useContext(UserContext);
  const handleClick = () => {
    if (login === "Logout") {
      setAmount(amount - 1);
    }
    setLogin("Login");
    setValue("");
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Link
                </a>
              </li>
            </ul>

            <AmountBar />
            <button
              class="btn btn-outline-warning mx-2 w-4"
              style={{ display: `${value}` }}
            >
              SignUp
            </button>
            <button
              className="btn btn-outline-danger .text-nowrap"
              onClick={handleClick}
            >
              {login}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
