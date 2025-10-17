import React from 'react';

const Input = ({ name, type = 'text', placeholder, register, errors, isTextArea = false, icon }) => {
  const error = errors && errors[name];
  
  const commonProps = {
    id: name,
    ...register(name),
    placeholder,
    className: `w-full bg-light-surface dark:bg-surface border ${
      error ? 'border-red-500' : 'border-transparent'
    } text-light-text-primary dark:text-text-primary rounded-md py-3 ${icon ? 'pl-10' : 'px-4'} focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300`,
  };

  const inputWrapperClass = "relative w-full flex items-center";

  if (isTextArea) {
    return (
      <div className={inputWrapperClass}>
        <textarea {...commonProps} rows="4" />
        {error && <p className="mt-2 text-sm text-red-500">{error.message}</p>}
      </div>
    );
  }

  return (
    <div className={inputWrapperClass}>
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-light-text-secondary dark:text-text-secondary">{icon}</div>}
      <input {...commonProps} type={type} />
      {error && <p className="absolute -bottom-6 left-0 mt-2 text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default Input;

