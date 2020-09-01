import React from "react";
import Input from "../../shared/components/FormElement/Input";
import Button from "../../shared/components/FormElement/Button";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./PlaceForm.css";
const NewPlace = () => {
  // hooks input

  const [formState, inputHandler] = useForm(
    {
      title: {
        val: "",
        isValid: false,
      },
      description: {
        val: "",
        isValid: false,
      },
      address: {
        val: "",
        isValid: false,
      },
    },
    false
  );

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs); // send this to Backend
  };

  return (
    <form className="place-form" onSubmit={submitHandler}>
      <Input
        id="title"
        type="text"
        label="Title"
        element="input"
        placeholder="title"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter valid title"
      />
      <Input
        id="address"
        type="text"
        label="Address"
        element="input"
        placeholder="write an address"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter valid Address"
      />
      <Input
        id="description"
        label="Description"
        element="textarea"
        onInput={inputHandler}
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter valid Description (at least 5 characters)"
      />
      <Button type="submit" disabled={!formState.isValid}>
        Add Place
      </Button>
    </form>
  );
};

export default NewPlace;
