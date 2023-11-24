import { useState } from "react";
import PropTypes from "prop-types";

function Form({ onAddItem }) {
  const [list, setList] = useState("");

  function submit(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name: list,
      value: false,
    };

    onAddItem(newItem);
    setList("");
  }

  return (
    <form className="add-form" onSubmit={submit}>
      <h3>Apa yang ingin kamu list?</h3>
      <input
        type="text"
        name="name"
        value={list}
        onChange={(e) => setList(e.target.value)}
      />
      <button type="submit">Kirim</button>
    </form>
  );
}

// Menambahkan prop-types untuk memastikan tipe prop yang diterima sesuai
Form.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default Form;
