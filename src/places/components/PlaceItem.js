import React, { useState } from "react";
import Card from "../../shared/components/UIelement/card";
import Button from "../../shared/components/FormElement/Button";
import Modal from "../../shared/components/UIelement/Modal";
import Map from "../../shared/components/UIelement/Map"
import "./PlaceItem.css";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const openModalMap = () => setShowMap(true);
  const closeModalMap = () => setShowMap(false);
  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeModalMap}
        header={props.address}
        contentClass="place-item__modal__content"
        footerClass="place-item__modal-action"
        footer={<Button onClick={closeModalMap} >close</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={18} />
        </div>
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
            <Button inverse onClick={openModalMap}>view on map</Button>
            <Button to={`/places/${props.id}`}>edit</Button>
            <Button danger>delete</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};
export default PlaceItem;
