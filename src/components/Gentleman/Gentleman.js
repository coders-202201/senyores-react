import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const Gentleman = ({
  gentleman: {
    name,
    picture,
    alternativeText,
    status,
    profession,
    twitter,
    selected,
  },
  actionOnClick,
  actionOnRemove,
}) => {
  const getInitial = () => {
    const nameParts = name.split(" ");
    if (nameParts[0].length <= 3) {
      return nameParts[1].charAt(0).toUpperCase();
    }
    return nameParts[0].charAt(0).toUpperCase();
  };

  const removeGentleman = (event) => {
    event.stopPropagation();
    actionOnRemove();
  };

  return (
    <li
      className={`gentleman${selected ? " selected" : ""}`}
      onClick={actionOnClick}
    >
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={`img/${picture}`}
          alt={alternativeText}
        />
        <span className="gentleman__initial">{getInitial()}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profesión:</span>
            {profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Estado:</span> {status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span> {twitter}
          </li>
        </ul>
      </div>
      <FontAwesomeIcon
        icon={faCheck}
        className="icon gentleman__icon"
        size="2x"
      />
      <FontAwesomeIcon
        icon={faTimes}
        className="icon gentleman__icon gentleman__icon--delete"
        onClick={removeGentleman}
      />
    </li>
  );
};

export default Gentleman;
