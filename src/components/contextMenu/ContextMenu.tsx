type ContextMenuProps = {
  menuTop: number;
  menuLeft: number;
};

type Menu = {
  label: string;
  value: string;
};

function ContextMenu({ menuTop, menuLeft }: ContextMenuProps) {
  const UNORDERED_STYLE = {
    backgroundColor: 'whitesmoke',
    padding: 0,
    listStyle: 'none',
    width: '150px',
  };
  const LIST_STYLE = {
    lineHeight: '3',
    paddingLeft: '5px',
  };
  const MENU_LIST = [
    { label: 'Add', value: 'ADD' },
    { label: 'Delete', value: 'DELETE' },
  ];

  return (
    <div
      style={{
        position: 'absolute',
        top: `${menuTop}px`,
        left: `${menuLeft}px`,
      }}
    >
      <ul style={UNORDERED_STYLE}>
        {MENU_LIST.map((menu: Menu) => (
          <li key={menu.value} value={menu.value} style={LIST_STYLE}>
            {menu.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContextMenu;
