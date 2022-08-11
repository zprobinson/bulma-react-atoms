import React from 'react';
import Button from '../Button/Button';
import { FormSubmitButtonProps } from './Form.types';
import { ButtonDefault } from '../Button/Button.types';

/**
 * Notice that because this button should exist as a child of the Form component,
 * the onClick prop is omitted because the Form's onSubmit callback will be triggered
 * when this button is clicked by default.
 */
const SubmitButton: React.FC<FormSubmitButtonProps> = ({
    children,
    ...props
}) => {
    return (
        <Button<ButtonDefault>
            data-testid="SubmitButton"
            type="submit"
            {...props}
        >
            {children ?? 'Submit'}
        </Button>
    );
};

export default SubmitButton;
