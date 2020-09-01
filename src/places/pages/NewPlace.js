import React, { useCallback, useReducer } from "react";
import Input from "../../shared/components/FormElement/Input";
import Button from "../../shared/components/FormElement/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./PlaceForm.css";
const NewPlace = () => {
  const formReducer = (state, action) => {
    switch (action.type) {
      case "INPUT_CHANGE":
        let formValid = true;

        //note: *** state.inputs = in useReducer inputs:{title,..} *** //
        for (const InputID in state.inputs) {
          if (InputID === action.InputID) {
            formValid = formValid && action.isValid;
          } else {
            formValid = formValid && state.inputs[InputID].isValid;
          }
        }

        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.InputID]: { value: action.val, isValid: action.isValid},
          },
          isValid: formValid,
        };
      default:
        return state;
    }
  };

  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
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
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      InputID: id,
      val: value,
      isValid: isValid,
    });
  }, []);

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(formState.inputs); // send this to Backend
  }

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
