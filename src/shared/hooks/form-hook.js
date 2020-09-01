import { useCallback, useReducer } from "react";

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
          [action.InputID]: { value: action.val, isValid: action.isValid },
        },
        isValid: formValid,
      };
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity,
      });


      const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
          type: "INPUT_CHANGE",
          InputID: id,
          val: value,
          isValid: isValid,
        });
      }, []);
      
      return [formState , inputHandler] 
};
