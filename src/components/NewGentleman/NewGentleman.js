import { useState } from "react";
import useAPI from "../../hooks/useAPI";
import "./NewGentleman.css";

const NewGentleman = () => {
  const { addGentlemanAPI } = useAPI();

  const blankFields = {
    name: "",
    profession: "",
    status: "",
    twitter: "",
    picture: "",
    alt: "",
    selected: false,
  };

  const [formData, setFormData] = useState(blankFields);

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    addGentlemanAPI(formData);
    resetForm();
  };

  const resetForm = () => {
    setFormData(blankFields);
  };

  const isFilled =
    formData.name !== "" &&
    formData.profession !== "" &&
    formData.status !== "" &&
    formData.twitter !== "" &&
    formData.picture !== "" &&
    formData.alt !== "";

  return (
    <form
      className="new-gentlemen"
      onSubmit={onFormSubmit}
      autoComplete="off"
      noValidate
    >
      <div className="form-group">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          className="form-input"
          value={formData.name}
          onChange={changeData}
        />
      </div>
      <div className="form-group">
        <label htmlFor="profession">Profession: </label>
        <input
          type="text"
          id="profession"
          className="form-input"
          value={formData.profession}
          onChange={changeData}
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status: </label>
        <input
          type="text"
          id="status"
          className="form-input"
          value={formData.status}
          onChange={changeData}
        />
      </div>
      <div className="form-group">
        <label htmlFor="twitter">Twitter: </label>
        <input
          type="text"
          id="twitter"
          className="form-input"
          value={formData.twitter}
          onChange={changeData}
        />
      </div>
      <div className="form-group">
        <label htmlFor="picture">Picture: </label>
        <input
          type="url"
          id="picture"
          className="form-input"
          value={formData.picture}
          onChange={changeData}
        />
      </div>
      <div className="form-group">
        <label htmlFor="alt">Alternative text: </label>
        <input
          type="text"
          id="alt"
          className="form-input"
          value={formData.alt}
          onChange={changeData}
        />
      </div>
      <div className="form-group">
        <input
          type="checkbox"
          id="selected"
          checked={formData.selected}
          onChange={changeData}
        />
        <label htmlFor="selected">Selected</label>
      </div>
      <button type="submit" disabled={!isFilled}>
        Create
      </button>
    </form>
  );
};

export default NewGentleman;
