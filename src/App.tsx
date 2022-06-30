import React, { useState } from 'react';
import './style.css';
import ContextMenu from './component/ContextMenu';

export default function App() {
  const [display, setDisplay] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const [menuLeft, setMenuLeft] = useState(0);

  const onClick = () => {
    setDisplay(false);
  };

  const showContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setMenuLeft(e.pageX);
    setMenuTop(e.pageY);
    setDisplay(true);
  };

  return (
    <div onContextMenu={showContextMenu} onMouseDown={onClick}>
      {display ? <ContextMenu menuTop={menuTop} menuLeft={menuLeft} /> : null}
    </div>
  );
}
