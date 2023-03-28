import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div>
      <div className="nav-all">
        <div className="header-left">
          <button>고객서비스</button>&nbsp;&nbsp;
          <button>뉴스레터</button> &nbsp;&nbsp;
          <button>매장찾기</button> &nbsp;&nbsp;
          <button>
            <FontAwesomeIcon icon={faBell} />
          </button>
        </div>

        <div className="nav-section">
          <img
            width={50}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png"
            alt="hnm로고"
          />
        </div>

        <div className="header-right">
          <div className="header-jump">
            <FontAwesomeIcon icon={faUser} /> <button>로그인</button>
          </div>
          <div className="header-jump">
            <FontAwesomeIcon icon={faHeart} /> <button>즐겨찾기</button>
          </div>
          <div className="header-jump">
            <FontAwesomeIcon icon={faBagShopping} /> <button>쇼핑백</button>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Navbar