import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function AmountBar() {
  const { amount } = useContext(UserContext);
  return (
    <div style={{ position: "absolute", float: "right", right: 170 }}>
      <button class="btn btn-primary" disabled="true">
        {amount}
      </button>
    </div>
  );
}

export default AmountBar;
