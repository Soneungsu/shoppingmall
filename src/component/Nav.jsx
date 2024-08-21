import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Nav = () => {
  return (
    <div>
      <div className="login-btn">
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
    </div>
  );
};

export default Nav;
