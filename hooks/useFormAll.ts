import { useEffect, useState } from "react";

export const useFormAll = (initialStates = {}, data = {}) => {

  const [values, setValues] = useState(initialStates);

  useEffect(() => {
    if (data) {
      setValues({ ...values, ...data });
    } else {
      setValues({ ...values });
    }
  }, [setValues]);

  // reset
  const reset = (newFormState = initialStates) => {
    setValues(newFormState);
  };

  // handleInputChange
  const handleInputChange = ({ target }: any) => {
    setValues({ ...values, [target.name]: target.value });
  };

  return {
    values,
    handleInputChange,
    reset,
  };
};
