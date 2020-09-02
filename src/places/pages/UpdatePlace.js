import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElement/Input";
import Button from "../../shared/components/FormElement/Button";
import Card from "../../shared/components/UIelement/card";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Eslamshahr City :)",
    description: "One of the Most famous Cities in Iran :)",
    // imageURL:"https://i.pinimg.com/564x/f8/a7/8c/f8a78c0859db7dc60bc8a1f70bfd171f.jpg",
    imageURL:
      "https://islamshahr.ostan-th.ir//Uploads/User/495/other/islamshahr/mn.jpg",
    address:
      "Iran ,Tehran ,Jadeh Saveh ,Namaz sq, kashani st, imam mohamad taghi st",
    location: {
      lat: 35.558039099999995,
      lng: 51.236116499999994,
    },
    creator: "uid2",
  },
  {
    id: "p2",
    title: "empire State Building",
    description: "One of the Most famous sky scrapers in the world!",
    imageURL:
      "https://i.pinimg.com/564x/31/9c/d0/319cd08487bc3a960cc91deb2dc02934.jpg",
    address: "United State America, NY St 34th w20",
    location: {
      lat: 40.748817,
      lng: -73.985428,
    },
    creator: "uid2",
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);

  const placeId = useParams().placeId;

  //hooks
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  //***

  const identifiedPlace = DUMMY_PLACES.find((e) => e.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: false,
          },
          description: {
            value: identifiedPlace.description,
            isValid: false,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card className="paddingCard">
          <h2>could'nt find Place</h2>
        </Card>
      </div>
    );
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs); // send this to Backend
  };

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={submitHandler}>
      <Input
        id="title"
        label="Title"
        element="input"
        type="text"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter a Valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />

      <Input
        id="description"
        label="Description"
        element="textarea"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter a Valid description (at least 5 character)"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />

      <Button type="submit" disabled={!formState.isValid}>
        Update Place
      </Button>

      <Button inverse to="/">Back</Button>
    </form>
  );
};

export default UpdatePlace;
