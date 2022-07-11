import './style.css';
import { MemoTypes } from 'recoil/memo';
import { MouseEvent } from 'react';

type ContextMenuProps = {
  menuTop: number;
  menuLeft: number;
};

type Menu = {
  label: string;
  value: string;
  clicked: (e: MouseEvent<HTMLLIElement>) => void;
};

function ContextMenu({ menuTop, menuLeft }: ContextMenuProps) {
  const MENU_LIST = [
    {
      label: 'Add',
      value: 'ADD',
      clicked: (e: MouseEvent<HTMLLIElement>) => {
        console.log(e);
      },
    },
    {
      label: 'Delete',
      value: 'DELETE',
      clicked: (e: MouseEvent<HTMLLIElement>) => {
        console.log(e);
      },
    },
  ];

  return (
    <div
      style={{
        position: 'absolute',
        top: `${menuTop}px`,
        left: `${menuLeft}px`,
      }}
    >
      <ul className="menu-list">
        {MENU_LIST.map((menu: Menu) => (
          <li
            key={menu.value}
            className="context-menu"
            value={menu.value}
            onMouseDown={menu.clicked}
          >
            {menu.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContextMenu;
