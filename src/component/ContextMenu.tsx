type ContextMenuProps = {
  menuTop: number;
  menuLeft: number;
};

function ContextMenu({ menuTop, menuLeft }: ContextMenuProps) {
  return (
    <div
      style={{
        position: 'absolute',
        top: `${menuTop}px`,
        left: `${menuLeft}px`,
      }}
    >
      <ul>
        <li>메모 추가</li>
        <li>메모 삭제</li>
        <li>Hi</li>
        <li>My</li>
      </ul>
    </div>
  );
}

export default ContextMenu;
