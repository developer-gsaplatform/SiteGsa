import { useState, useCallback } from 'react';

const VALIDATION_RULES = {
  required: (value) => value?.trim() ? null : 'Este campo é obrigatório',
  email: (value) => {
    if (!value) return 'Email é obrigatório';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? null : 'Email inválido';
  },
  phone: (value) => {
    if (!value) return 'Telefone é obrigatório';
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(value) && value.length >= 9
      ? null
      : 'Telefone inválido';
  },
  minLength: (min) => (value) => {
    return value?.length >= min
      ? null
      : `Mínimo ${min} caracteres necessários`;
  },
  maxLength: (max) => (value) => {
    return value?.length <= max
      ? null
      : `Máximo ${max} caracteres permitidos`;
  },
};

export function useFormValidation(initialValues = {}, onSubmit = null) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback((fieldName, value, rules = []) => {
    for (const rule of rules) {
      const error = rule(value);
      if (error) return error;
    }
    return null;
  }, []);

  const handleChange = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;
      const fieldValue = type === 'checkbox' ? checked : value;

      setValues((prev) => ({
        ...prev,
        [name]: fieldValue,
      }));

      if (touched[name]) {
        const error = validateField(name, fieldValue, []);
        setErrors((prev) => ({
          ...prev,
          [name]: error,
        }));
      }
    },
    [touched, validateField]
  );

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  }, []);

  const validate = useCallback(
    (validationRules) => {
      const newErrors = {};

      Object.entries(validationRules).forEach(([fieldName, rules]) => {
        const fieldValue = values[fieldName];
        const error = validateField(fieldName, fieldValue, rules);
        if (error) {
          newErrors[fieldName] = error;
        }
      });

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [values, validateField]
  );

  const handleSubmit = useCallback(
    (validationRules = {}) => (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      const isValid = validate(validationRules);

      if (isValid && onSubmit) {
        onSubmit(values);
      }

      setIsSubmitting(false);
    },
    [values, validate, onSubmit]
  );

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setValues,
    validate,
    validateField,
  };
}

export { VALIDATION_RULES };
