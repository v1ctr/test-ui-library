import * as React from 'react';
import { useButton } from '@react-aria/button';
import { AriaButtonProps } from '@react-types/button';
import { classNames } from './utils';
import './index.css';

export interface CustomButtonProps extends AriaButtonProps {
  /** Whether the button should be displayed with a loading indicator. */
  isLoading?: boolean;
  /** The style variant of the button. */
  variant?: 'primary' | 'secondary' | 'text';
}

export const Button = React.forwardRef((props: CustomButtonProps, ref: any) => {
  let buttonRef = React.useRef<HTMLButtonElement>(null);
  if (ref) {
    buttonRef = ref;
  }
  const { buttonProps } = useButton(props, buttonRef);
  const { children, variant = 'primary', isLoading } = props;

  return (
    <button
      {...buttonProps}
      disabled={isLoading}
      className={classNames(
        'w-full inline-flex px-4 py-2 justify-center rounded-md text-base font-medium focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm',
        variant === 'primary'
          ? 'shadow-sm border border-blue-600 text-white bg-blue-600 hover:bg-blue-700 hover:border-blue-700'
          : '',
        variant === 'secondary'
          ? 'shadow-sm border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
          : '',
        variant === 'text'
          ? ' text-blue-600 hover:text-blue-700 hover:bg-blue-50'
          : ''
      )}
      ref={buttonRef}
    >
      {isLoading && (
        <svg
          className={classNames(
            'animate-spin -ml-1 mr-3 h-5 w-5',
            variant === 'primary' ? 'text-white' : '',
            variant === 'secondary' ? 'text-gray-700' : '',
            variant === 'text' ? 'text-blue-600' : ''
          )}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
});
