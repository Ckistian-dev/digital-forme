import React from 'react';
import { ChevronDown } from 'lucide-react';

const Select = ({ name, label, register, errors, children }) => {
  const error = errors && errors[name];

  return (
    <div className="relative w-full">
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <select
        id={name}
        {...register(name)}
        className={`w-full appearance-none bg-light-surface dark:bg-surface border ${
          error ? 'border-red-500' : 'border-transparent'
        } text-light-text-primary dark:text-text-primary rounded-md py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300`}
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-light-text-secondary dark:text-text-secondary">
        <ChevronDown className="h-5 w-5" />
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default Select;
