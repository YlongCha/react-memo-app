import { useState } from 'react';

function ContextMenu() {
  // document.addEventListener('contextmenu', clickEvent);
  const [display, setDisplay] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const [menuLeft, setMenuLeft] = useState(0);

  const changeDisplay = (e: MouseEvent) => {
    e.preventDefault();
    setMenuLeft(e.pageX);
    setMenuTop(e.pageY);
    setDisplay(true);
  };
  const onClick = () => {
    setDisplay(false);
  };
  document.addEventListener('contextmenu', changeDisplay);
  document.addEventListener('click', onClick);

  return (
    <div
      style={{
        display: display ? 'block' : 'none',
        top: `${menuTop}px`,
        left: `${menuLeft}px`,
      }}
    >
      <ul>
        <li>메모 추가</li>
      </ul>
    </div>
  );
}

export default ContextMenu;
