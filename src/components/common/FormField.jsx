import { memo, forwardRef } from "react";
import { fieldStyles } from "./../../config/contact";

function FieldWrapper({ label, htmlFor, required, error, children }) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={htmlFor} className={fieldStyles.label}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {children}
      {error && <span className={fieldStyles.errorMessage}>{error}</span>}
    </div>
  );
}

export const Input = memo(
  forwardRef(function Input(
    { label, error, required, className = "", ...props },
    ref,
  ) {
    return (
      <FieldWrapper
        label={label}
        htmlFor={props.id ?? props.name}
        required={required}
        error={error}
      >
        <input
          ref={ref}
          className={`${fieldStyles.input} ${error ? fieldStyles.error : ""} ${className}`}
          {...props}
        />
      </FieldWrapper>
    );
  }),
);
Input.displayName = "Input";

export const Textarea = memo(
  forwardRef(function Textarea(
    { label, error, required, rows = 5, className = "", ...props },
    ref,
  ) {
    return (
      <FieldWrapper
        label={label}
        htmlFor={props.id ?? props.name}
        required={required}
        error={error}
      >
        <textarea
          ref={ref}
          rows={rows}
          className={`${fieldStyles.input} ${error ? fieldStyles.error : ""} resize-vertical ${className}`}
          {...props}
        />
      </FieldWrapper>
    );
  }),
);
Textarea.displayName = "Textarea";

export const Select = memo(
  forwardRef(function Select(
    {
      label,
      error,
      required,
      options = [],
      placeholder = "Seleccione uma opção",
      className = "",
      ...props
    },
    ref,
  ) {
    return (
      <FieldWrapper
        label={label}
        htmlFor={props.id ?? props.name}
        required={required}
        error={error}
      >
        <div className="relative">
          <select
            ref={ref}
            className={`${fieldStyles.input} ${error ? fieldStyles.error : ""} appearance-none cursor-pointer ${className}`}
            {...props}
          >
            <option value="">{placeholder}</option>
            {options.map((opt) => (
              <option
                key={opt}
                value={opt}
                className="bg-[#0a0a0a] text-[#f5f5f0]"
              >
                {opt}
              </option>
            ))}
          </select>
          {/* Chevron decorativo */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#9B7BC4]">
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </FieldWrapper>
    );
  }),
);
Select.displayName = "Select";
