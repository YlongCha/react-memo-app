import './style.css';
import { MouseEvent, useState } from 'react';

function Memo() {
  const [hoverNoteState, setHoverNoteState] = useState(false);

  const mouseOverOnNote = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as Element;
    const classList = target.classList;

    if (!classList.contains('note')) return;

    setHoverNoteState(true);
  };

  const mouseLeaveOnNote = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as Element;
    const classList = target.classList;

    if (!classList.contains('note')) return;

    setHoverNoteState(false);
  };

  return (
    <div className="perspective">
      <div
        className={`note
        ${hoverNoteState ? 'mouse-entered' : ''}
        `}
        onMouseOverCapture={mouseOverOnNote}
        onMouseOutCapture={mouseLeaveOnNote}
      >
        <input />
        <textarea></textarea>
      </div>
    </div>
  );
}

export default Memo;
