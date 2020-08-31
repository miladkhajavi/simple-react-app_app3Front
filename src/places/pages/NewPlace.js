import React from "react";
import Input from '../../shared/components/FormElement/Input'
import './NewPlace.css'
const NewPlace = () => {
  return (
    <form className="place-form">
      <Input type="text" label="Title" element="input" placeholder="title" />
    </form>
  )
};

export default NewPlace;
