import React, { useState, useContext } from "react";
import Card from "../../shared/components/UIelement/card";
import Button from "../../shared/components/FormElement/Button";
import Modal from "../../shared/components/UIelement/Modal";
import Map from "../../shared/components/UIelement/Map";
import { AuthContext } from "../../shared/context/auth-context";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const openModalMap = () => setShowMap(true);
  const closeModalMap = () => setShowMap(false);
  const showConfirmDelete = () => setShowConfirm(true);
  const cancelConfirmDelete = () => setShowConfirm(false);
  const confirmDelete = () => {
    setShowConfirm(false);
    alert(`${props.title} deleted success`);
  };
  return (
    <React.Fragment>
      {/* modal show map */}
      <Modal
        show={showMap}
        onCancel={closeModalMap}
        header={props.address}
        contentClass="place-item__modal__content"
        footerClass="place-item__modal-action"
        footer={<Button onClick={closeModalMap}>close</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={18} />
        </div>
      </Modal>
      {/* Modal delete */}
      <Modal
        show={showConfirm}
        onCancel={cancelConfirmDelete}
        header="Are you sure?"
        footerClass="place-item__modal-action"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelConfirmDelete}>
              Cancel
            </Button>
            <Button danger onClick={confirmDelete}>
              Delete
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete '{props.title}' place? please note
          that it can't be undone thereafter
        </p>
      </Modal>

      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>

          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>

          <div className="place-item__actions">
            <Button inverse onClick={openModalMap}>
              view on map
            </Button>
            {auth.isLoggedIn && (
              <Button to={`/places/${props.id}`}>Edit</Button>
            )}
            {auth.isLoggedIn && (
              <Button danger onClick={showConfirmDelete}>
                Delete
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};
export default PlaceItem;
