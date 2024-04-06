/*//npm install reactjs-popup --save
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default Popup(ingredients,recipe) => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>{ingredients}</div>
    <div>{recipe}</div>
  </Popup>
);
*/
import  {  useState } from "react";
import PropTypes from "prop-types";

const PopUp = ({ idMessage, ingredients, recipe }) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn btn-primary">
        {idMessage}
      </button>
      {open && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h5 className="modal-title">{idMessage}</h5>
              <button onClick={toggleModal} className="btn-close" />
            </div>
            <div className="modal-body">
              <h6>Ingredients:</h6>
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h6>Recipe:</h6>
              <p>{recipe}</p>
            </div>
            <div className="modal-footer">
              <button onClick={toggleModal} className="btn btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

PopUp.propTypes = {
  idMessage: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  recipe: PropTypes.string.isRequired,
};

export default PopUp;