import React, { useState } from 'react';
import './style.css';
import ContextMenu from 'components/contextMenu/ContextMenu';
import Memo from 'components/memo/Memo';

export default function App() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const [menuLeft, setMenuLeft] = useState(0);

  const onClick = () => {
    setDisplayMenu(false);
  };

  const showContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setMenuLeft(e.pageX);
    setMenuTop(e.pageY);
    setDisplayMenu(true);
  };

  return (
    <div onContextMenu={showContextMenu} onMouseDown={onClick}>
      <Memo></Memo>
      {displayMenu ? (
        <ContextMenu menuTop={menuTop} menuLeft={menuLeft} />
      ) : null}
    </div>
  );
}
