import React, { forwardRef } from 'react';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { FormFileProps } from './Form.types';
import useFormFieldContext from './useFormFieldContext';

const FormFile: React.FC<
    FormFileProps & { innerRef?: React.Ref<HTMLInputElement> }
> = ({
    children,
    fileName,
    fileLabel,
    fileIcon,
    color,
    size,
    alignment,
    hasName = false,
    isFullwidth = false,
    isBoxed = false,
    innerRef,
    ...props
}) => {
    const context = useFormFieldContext();
    const { classNames, rest } = useInnerBulmaProps(
        props,
        color ?? '',
        size ?? context.size ?? '',
        alignment ?? '',
        hasName ? 'has-name' : '',
        isFullwidth ? 'is-fullwidth' : '',
        isBoxed ? 'is-boxed' : ''
    );

    return (
        <div data-testid="FormFileDiv" className={`file ${classNames}`}>
            <label data-testid="FormFileLabel" className={`file-label`}>
                <input
                    data-testid="FormFileInput"
                    className={`file-input`}
                    type="file"
                    ref={innerRef}
                    {...rest}
                />
                <span data-testid="FormFileCta" className="file-cta">
                    {fileIcon ?? children}
                    <span
                        data-testid="FormFileLabelDescription"
                        className="file-label"
                    >
                        {fileLabel ?? 'Choose a file...'}
                    </span>
                </span>
                {fileName !== undefined && (
                    <span data-testid="FormFileFileName" className="file-name">
                        {fileName}
                    </span>
                )}
            </label>
        </div>
    );
};

export default forwardRef<HTMLInputElement, Parameters<typeof FormFile>[0]>(
    (props, ref) => {
        return <FormFile {...props} innerRef={ref} />;
    }
);
