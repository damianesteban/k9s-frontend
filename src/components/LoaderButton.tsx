import * as React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './LoaderButton.css';

// tslint:disable-next-line:variable-name
const LoaderButton = ({
  isLoading,
  text,
  loadingText,
  className = '',
  disabled = false,
  // tslint:disable-next-line:trailing-comma
  ...props
}: any) =>
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <Glyphicon glyph="refresh" className="spinning" />}
    {!isLoading ? text : loadingText}
  </Button>;

export { LoaderButton };
