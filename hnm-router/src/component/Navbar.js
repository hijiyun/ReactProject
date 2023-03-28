import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div>
      <div className='nav'>
        <div header-left>
          고객서비스 &nbsp;&nbsp; 뉴스레터 &nbsp;&nbsp; 매장찾기 &nbsp;&nbsp;
          <FontAwesomeIcon icon={faBell} />
        </div>

        <div className='nav-section'>
          <img 
            width={100}
            src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg" alt="hnm로고" />
        </div>

        <div header-right>
          <div>
            <FontAwesomeIcon icon={faUser} /> &nbsp; 로그인 &nbsp;&nbsp;&nbsp;
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} /> &nbsp; 즐겨찾기&nbsp;&nbsp;&nbsp;
          </div>
          <div>
            <FontAwesomeIcon icon={faBagShopping} /> &nbsp; 쇼핑백
          </div>
        </div>

      </div>

      <div></div>
    </div>
  );
}

export default Navbar