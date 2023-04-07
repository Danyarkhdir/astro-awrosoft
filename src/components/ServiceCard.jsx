export default function ServiceCard({
  id,
  svgIcon,
  cardTitle,
  style,
  additions,
}) {
  return (
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link ${style}`}
        id={id}
        data-bs-toggle="pill"
        data-bs-target={additions.dataBsTarget}
        type="button"
        role="tab"
        aria-controls={additions.ariaControls}
        aria-selected={additions.ariaSelected}
      >
        {svgIcon}
        <span>
          {cardTitle.substr(0, cardTitle.indexOf(" "))} <br />
          {cardTitle.substr(cardTitle.indexOf(" "), cardTitle.length)}
        </span>
      </button>
    </li>
  );
}
