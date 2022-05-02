import React from 'react';
import './Header.css';


function Header(props) {
    let mode = props.mode;
    const menus = {"Login":"Login", 
                   "ManagerPage":"초기 화면", 
                   "AsRequest":"A/S 신청자 관리", 
                   "GymReser": "헬스 예약자 관리", 
                   "OverNight":"외박 관리", 
                   "ShuttleManager":"셔틀 버스 예약자 관리", 
                   "MenuPlanner":"식단표 관리", 
                   "ShuttleBus":"셔틀 버스 관리", 
                   "DayOff":"휴일 관리", 
                   "UserManager":"사용자 관리"};
                   
    return(
            <div className="header"><h1>{menus[mode]}</h1></div>
    );
}

export default Header;