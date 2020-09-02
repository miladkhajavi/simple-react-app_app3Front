import React, { useState } from "react";
import "./Auth.css";
import Card from "../../shared/components/UIelement/card";
import Input from "../../shared/components/FormElement/Input";
import Button from "../../shared/components/FormElement/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler,setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    /**
     * when we are switching 
     * from login to sign up
     * check your 'isValid'
     * for name and disable
     * button if is not valid
     */

    // ***** switch comment 1 ***** //
      if(!isLoginMode){
        setFormData({
            ...formState.inputs,
            name:undefined
        },
            formState.inputs.email.isValid && formState.inputs.password.isValid
        )
      }else{
          setFormData({
              ...formState.inputs,
              name:{
                  value:'',
                  isValid:false
              }
          },
          false
          )
      }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className="authentication">
      <h2>{isLoginMode ? "Login" : "Register"}</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && <Input  element="input"
          label="Your Name"
          id="name"
          type="text"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Name field is require"/>}
        <Input
          element="input"
          label="Email"
          id="email"
          type="email"
          onInput={inputHandler}
          validators={[VALIDATOR_EMAIL()]}
          errorText="please enter a valid email address "
        />
        <Input
          element="input"
          label="Password"
          id="password"
          type="password"
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="please enter a valid password at least 5 characters  "
        />

        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "Login" : "SignUp"}
        </Button>
      </form>
      <p className="p-item">
        you {isLoginMode ? "have not" : "have"} Account? click button and switch
        it{" "}
      </p>
      <Button inverse onClick={switchModeHandler}>
        Switch To {isLoginMode ? "SignUp" : "Login"}
      </Button>
    </Card>
  );
};

export default Auth;
