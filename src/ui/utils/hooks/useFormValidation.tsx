import { FormInstance } from "antd";
import { useState } from "react";

export function useFormValidation(
  form: FormInstance,
  initialValue = false,
  requiredFields?: string[]
) {
  const [isFormValid, setIsFormValid] = useState(initialValue);
  const checkFormValid = async (condition = true) => {
    const isFieldsTouched = requiredFields
      ? form.isFieldsTouched(
          requiredFields?.filter(
            (requiredField) => !form.getFieldValue(requiredField)
          ),
          true
        )
      : form.isFieldsTouched([], true);
    setTimeout(() => {
      if (
        isFieldsTouched &&
        form
          .getFieldsError()
          .every((fieldErr) => fieldErr.errors.length === 0) &&
        condition
      ) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    }, 0);
  };

  return {
    isFormValid,
    checkFormValid,
    setIsFormValid,
  };
}
