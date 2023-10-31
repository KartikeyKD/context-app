import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Body() {
  const { setLogin } = useContext(UserContext);
  const { setValue } = useContext(UserContext);
  const { setAmount } = useContext(UserContext);
  const { amount } = useContext(UserContext);
  const { login } = useContext(UserContext);
  const handleClick = () => {
    if (login === "Login") {
      setAmount(amount + 1);
    }
    setLogin("Logout");
    setValue("none");
  };
  return (
    <div>
      <button className="btn btn-primary mt-5" onClick={handleClick}>
        Change
      </button>
    </div>
  );
}

export default Body;
