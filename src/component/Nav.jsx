import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import menuList from "../data/menulist";

const Nav = () => {
  return (
    <div>
      <div className="login-btn">
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className="nav-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpRqYm8ZV9DX0FdTQzy6Lpcm6GMKfBbNO7Q&s"
          alt="이미지 로고"
        />
      </div>
      <div className="menu-items-searchbox">
        <ul className="menu-items">
          {menuList.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>

        <div className="serch-box">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" className="input-box" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
