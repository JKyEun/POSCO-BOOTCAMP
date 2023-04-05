import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          <li>
            <Link to="/">홈으로</Link>
          </li>
          <li>
            <Link to="/profile">프로필</Link>
          </li>
          <li>
            <Link to="/board">게시판</Link>
          </li>
          <li>
            <Link to="/todo">투두리스트</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
