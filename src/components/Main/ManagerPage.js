import React from 'react';
import '../Css/Main.css';

function ManagerPage() {
  return (
    <div className='main' className='mainOver'>
      <span
        style={{
          color: 'white',
          display: 'flex',
          fontSize: '20px',
          padding: '6px',
          paddingLeft: '15px',
        }}
      >
        관리자 페이지
      </span>
      <div
        style={{
          display: 'flex',
          width:'85%',
          height:'70%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        관리자 페이지에 접속하였습니다.
      </div>
    </div>
  );
}

export default ManagerPage;