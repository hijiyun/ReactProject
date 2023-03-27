import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
  return (
    <div>
        <div className='header'>
            <div header-left>고객서비스 &nbsp;&nbsp; 뉴스레터 &nbsp;&nbsp; 매장찾기 &nbsp;&nbsp; ...</div>
            <div>로고</div>
            <div header-right>
            <FontAwesomeIcon icon={faUser} /> &nbsp; 로그인 &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faHeart} /> &nbsp; 즐겨찾기 &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faBagShopping} /> &nbsp;  쇼핑백
            </div>
        </div>

        <div>

        </div>
    </div>
  )
}

export default Navbar