export default function SectionHeader({ headerText, handler, isMinimized }) {
  const arrowUp = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="280 -600 400 200"
      width="24px"
      fill="#000000"
      onClick={handler}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handler();
      }}
      tabIndex={0}
    >
      <path d="m280-400 200-200 200 200H280Z" />
    </svg>
  );
  const arrowDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="280 -560 400 200"
      width="24px"
      fill="#000000"
      onClick={handler}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handler();
      }}
      tabIndex={0}
    >
      <path d="M480-360 280-560h400L480-360Z" />
    </svg>
  );

  return (
    <div className="section-header cursor" onClick={handler}>
      <h3>{headerText}</h3>
      {isMinimized ? arrowDown : arrowUp}
    </div>
  );
}
