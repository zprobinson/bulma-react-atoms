import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Form from './Form';
import FormInput from './FormInput';
import FormCheckbox from './FormCheckbox';
import FormControl from './FormControl';
import FormField from './FormField';
import FormFieldLabel from './FormFieldLabel';
import {
    FormCheckboxProps,
    FormControlProps,
    FormFieldBodyProps,
    FormFieldLabelProps,
    FormFieldProps,
    FormFileIconProps,
    FormFileProps,
    FormIconProps,
    FormInputProps,
    FormProps,
    FormRadioProps,
    FormSelectProps,
    FormTextAreaProps,
} from './Form.types';
import { testBulmaProps } from '../bulmaTests/bulmaTests';
import FormFile from './FormFile';
import FormSelect from './FormSelect';
import FormTextArea from './FormTextArea';
import FormFieldBody from './FormFieldBody';
import FormFileIcon from './FormFileIcon';
import FormIcon from './FormIcon';
import FormRadio from './FormRadio';

describe('Form Component', () => {
    const renderComponent = (props: FormProps) => render(<Form {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('Form');

        expect(component).toHaveTextContent(expected);
    });
});

describe('Form Input Component', () => {
    const renderComponent = (props: FormInputProps) =>
        render(<FormInput {...props} />);

    it('should have input class', () => {
        const expected = 'input';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('FormInput');

        expect(component).toHaveClass(expected);
    });

    it('should render size class', () => {
        const expected: FormInputProps['size'] = 'is-large';
        const { getByTestId } = renderComponent({ size: expected });

        const component = getByTestId('FormInput');

        expect(component).toHaveClass(expected);
    });

    it('should render color class', () => {
        const expected: FormInputProps['color'] = 'is-danger';
        const { getByTestId } = renderComponent({ color: expected });

        const component = getByTestId('FormInput');

        expect(component).toHaveClass(expected);
    });

    it('should render is-static class', () => {
        const value: FormInputProps['isStatic'] = true;
        const expected = 'is-static';

        const { getByTestId } = renderComponent({ isStatic: value });

        const component = getByTestId('FormInput');

        expect(component).toHaveClass(expected);
    });

    it('should render is-loading class', () => {
        const value: FormInputProps['isLoading'] = true;
        const expected = 'is-loading';

        const { getByTestId } = renderComponent({ isLoading: value });

        const component = getByTestId('FormInput');

        expect(component).toHaveClass(expected);
    });

    it('should render is-rounded class', () => {
        const value: FormInputProps['isRounded'] = true;
        const expected = 'is-rounded';

        const { getByTestId } = renderComponent({ isRounded: value });

        const component = getByTestId('FormInput');

        expect(component).toHaveClass(expected);
    });

    it('should render state class', () => {
        const expected: FormInputProps['state'] = 'is-focused';

        const { getByTestId } = renderComponent({ state: expected });

        const component = getByTestId('FormInput');

        expect(component).toHaveClass(expected);
    });

    it('should have size attribute when provided', () => {
        const expected: FormInputProps['_innerInputSize'] = 5;

        const { getByTestId } = renderComponent({ _innerInputSize: expected });

        const component = getByTestId('FormInput');

        expect(component).toHaveAttribute('size', expected.toString());
    });

    testBulmaProps('FormInput', renderComponent);
});

describe('Form Checkbox Component', () => {
    const renderComponent = (props: FormCheckboxProps) =>
        render(<FormCheckbox {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('FormCheckboxLabel');

        expect(component).toHaveTextContent(expected);
    });

    it('should have checkbox class correctly', () => {
        const expected = 'checkbox';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('FormCheckboxLabel');

        expect(component).toHaveClass(expected);
    });

    it('should be checked when clicked', () => {
        const { getByTestId } = renderComponent({});

        const component = getByTestId('FormCheckbox');

        expect(component).not.toBeChecked();

        fireEvent.click(component);

        expect(component).toBeChecked();
    });

    it('should contain classNames on checkbox when _innerCheckboxClassName is passed', () => {
        const expected = 'foo bar-baz';
        const { getByTestId } = renderComponent({
            _innerCheckboxClassName: expected,
        });

        const component = getByTestId('FormCheckbox');

        expect(component).toHaveClass(expected);
    });

    it('should have style on checkbox label when _innerDisabledColor is passed and disabled is true', () => {
        const expected = 'red';
        const { getByTestId } = renderComponent({
            disabled: true,
            _innerDisabledColor: expected,
        });

        const component = getByTestId('FormCheckboxLabel');

        expect(component).toHaveStyle({
            cursor: 'not-allowed',
            color: expected,
        });
    });

    it('should have no style on checkbox label when _innerDisabledColor is passed and disable is false', () => {
        const redHerring = 'red';
        const { getByTestId } = renderComponent({
            disabled: false,
            _innerDisabledColor: redHerring,
        });

        const component = getByTestId('FormCheckboxLabel');

        expect(component).toHaveStyle({
            cursor: 'default',
            color: undefined,
        });
    });

    testBulmaProps('FormCheckboxLabel', renderComponent);
});

describe('Form Control Component', () => {
    const renderComponent = (props: FormControlProps) =>
        render(<FormControl {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('FormControl');

        expect(component).toHaveTextContent(expected);
    });

    it('should have control class', () => {
        const expected = 'control';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('FormControl');

        expect(component).toHaveClass(expected);
    });

    it('should have one iconAlignment class', () => {
        const expected: FormControlProps['iconAlignment'] = 'has-icons-left';
        const { getByTestId } = renderComponent({ iconAlignment: expected });

        const component = getByTestId('FormControl');

        expect(component).toHaveClass(expected);
    });

    it('should have multiple iconAlignment class', () => {
        const iconAlignment: FormControlProps['iconAlignment'] = [
            'has-icons-left',
            'has-icons-right',
        ];
        const expected = 'has-icons-left has-icons-right';
        const { getByTestId } = renderComponent({ iconAlignment });

        const component = getByTestId('FormControl');

        expect(component).toHaveClass(expected);
    });

    it('should have is-fullwidth class', () => {
        const isFullwidth: FormControlProps['isFullwidth'] = true;
        const expected = 'is-fullwidth';
        const { getByTestId } = renderComponent({ isFullwidth });

        const component = getByTestId('FormControl');

        expect(component).toHaveClass(expected);
    });

    it('should have is-loading class', () => {
        const isLoading: FormControlProps['isLoading'] = true;
        const expected = 'is-loading';
        const { getByTestId } = renderComponent({ isLoading });

        const component = getByTestId('FormControl');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('FormControl', renderComponent);
});

describe('Form Field Component', () => {
    const renderComponent = (props: FormFieldProps) =>
        render(<FormField {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('FormField');

        expect(component).toHaveTextContent(expected);
    });

    it('should have field class', () => {
        const expected = 'field';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('FormField');

        expect(component).toHaveClass(expected);
    });

    describe('Form Field Kind tests', () => {
        it('should not render kind class', () => {
            const kind: FormFieldProps['kind'] = undefined;
            const redHerringOne = 'has-addons';
            const redHerringTwo = 'is-grouped';
            const { getByTestId } = renderComponent({ kind });

            const component = getByTestId('FormField');

            expect(component).not.toHaveClass(redHerringOne);
            expect(component).not.toHaveClass(redHerringTwo);
        });

        it('should not render kind class even when passed alignment', () => {
            const kind: FormFieldProps['kind'] = undefined;
            const alignment: FormFieldProps['alignment'] = 'right';
            const redHerringOne = 'has-addons';
            const redHerringTwo = 'is-grouped';
            const { getByTestId } = renderComponent({ kind, alignment });

            const component = getByTestId('FormField');

            expect(component).not.toHaveClass(redHerringOne);
            expect(component).not.toHaveClass(redHerringTwo);
        });

        it('should render has-addons kind class', () => {
            const kind: FormFieldProps['kind'] = 'addons';
            const expected = 'has-addons';
            const { getByTestId } = renderComponent({ kind });

            const component = getByTestId('FormField');

            expect(component).toHaveClass(expected);
        });

        it('should render has-addons and alignment kind class', () => {
            const kind: FormFieldProps['kind'] = 'addons';
            const alignment: FormFieldProps['alignment'] = 'right';
            const expected = 'has-addons has-addons-right';
            const { getByTestId } = renderComponent({ kind, alignment });

            const component = getByTestId('FormField');

            expect(component).toHaveClass(expected);
        });

        it('should render is-expanded in addition to kind alignment class', () => {
            const kind: FormFieldProps['kind'] = 'addons';
            const alignment: FormFieldProps['alignment'] = 'right';
            const isExpanded: FormFieldProps['isExpanded'] = true;
            const expected = 'has-addons has-addons-right is-expanded';

            const { getByTestId } = renderComponent({
                kind,
                alignment,
                isExpanded,
            });

            const component = getByTestId('FormField');

            expect(component).toHaveClass(expected);
        });

        it('should render is-grouped kind class', () => {
            const kind: FormFieldProps['kind'] = 'grouped';
            const expected = 'is-grouped';
            const { getByTestId } = renderComponent({ kind });

            const component = getByTestId('FormField');

            expect(component).toHaveClass(expected);
        });

        it('should render is-grouped and alignment kind class', () => {
            const kind: FormFieldProps['kind'] = 'grouped';
            const alignment: FormFieldProps['alignment'] = 'centered';
            const expected = 'is-grouped is-grouped-centered';
            const { getByTestId } = renderComponent({ kind, alignment });

            const component = getByTestId('FormField');

            expect(component).toHaveClass(expected);
        });

        it('should render is-grouped-multiline in addition to is-grouped and alignment kind class', () => {
            const kind: FormFieldProps['kind'] = 'grouped';
            const alignment: FormFieldProps['alignment'] = 'centered';
            const groupMultiline: FormFieldProps['groupMultiline'] = true;
            const expected =
                'is-grouped is-grouped-centered is-grouped-multiline';
            const { getByTestId } = renderComponent({
                kind,
                alignment,
                groupMultiline,
            });

            const component = getByTestId('FormField');

            expect(component).toHaveClass(expected);
        });
    });

    it('should render is-horizontal class', () => {
        const isHorizontal: FormFieldProps['isHorizontal'] = true;
        const expected = 'is-horizontal';
        const { getByTestId } = renderComponent({ isHorizontal });

        const component = getByTestId('FormField');

        expect(component).toHaveClass(expected);
    });

    describe('Form Field Size tests', () => {
        // FormField passes the size property down into children via Context.
        const renderComponent = (props: FormFieldProps) =>
            render(
                <FormField {...props}>
                    <FormFieldLabel>Test Label</FormFieldLabel>
                    <FormControl>
                        <FormInput />
                        <FormFile />
                        <FormSelect />
                        <FormTextArea />
                    </FormControl>
                </FormField>
            );

        // Children of FormField can override context if they'd like.
        const renderComponentLabelOverriddenIsSmall = (props: FormFieldProps) =>
            render(
                <FormField {...props}>
                    <FormFieldLabel size="is-small">Test Label</FormFieldLabel>
                    <FormControl>
                        <FormInput />
                    </FormControl>
                </FormField>
            );

        it('should not have size class itself', () => {
            const redHerring: FormFieldProps['size'] = 'is-large';
            const { getByTestId } = renderComponent({ size: redHerring });

            const component = getByTestId('FormField');

            expect(component).not.toHaveClass(redHerring);
        });

        it('should pass size class down into relevant child components', () => {
            const expected: FormFieldProps['size'] = 'is-large';
            const { getByTestId } = renderComponent({ size: expected });

            expect(getByTestId('FormFieldLabel')).toHaveClass(expected);
            expect(getByTestId('FormControl')).toHaveClass(expected);
            expect(getByTestId('FormInput')).toHaveClass(expected);
            expect(getByTestId('FormFileDiv')).toHaveClass(expected);
            expect(getByTestId('FormSelectContainer')).toHaveClass(expected);
            expect(getByTestId('FormTextArea')).toHaveClass(expected);
        });

        it('should pass size class down into relevant child components unless overridden', () => {
            const expected: FormFieldProps['size'] = 'is-medium';
            const labelSize = 'is-small';
            const { getByTestId } = renderComponentLabelOverriddenIsSmall({
                size: expected,
            });

            expect(getByTestId('FormFieldLabel')).toHaveClass(labelSize);
            expect(getByTestId('FormControl')).toHaveClass(expected);
            expect(getByTestId('FormInput')).toHaveClass(expected);
        });
    });

    testBulmaProps('FormField', renderComponent);
});

describe('Form Field Body Component', () => {
    const renderComponent = (props: FormFieldBodyProps) =>
        render(<FormFieldBody {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('FormFieldBody');

        expect(component).toHaveTextContent(expected);
    });

    it('should have the field-body class', () => {
        const expected = 'field-body';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('FormFieldBody');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('FormFieldBody', renderComponent);
});

describe('Form Field Label Component', () => {
    const renderComponent = (props: FormFieldLabelProps) =>
        render(<FormFieldLabel {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('FormFieldLabel');

        expect(component).toHaveTextContent(expected);
    });

    it('should have the label class', () => {
        const expected = 'label';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('FormFieldLabel');

        expect(component).toHaveClass(expected);
    });

    it('should have size class', () => {
        const expected: FormFieldLabelProps['size'] = 'is-normal';
        const { getByTestId } = renderComponent({ size: expected });

        const component = getByTestId('FormFieldLabel');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('FormFieldLabel', renderComponent);
});

describe('Form File Component', () => {
    const renderComponent = (props: FormFileProps) =>
        render(<FormFile {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('FormFileCta');

        expect(component).toHaveTextContent(expected);
    });

    it('should contain a div with class of file', () => {
        const expected = 'file';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('FormFileDiv');

        expect(component).toHaveClass(expected);
        expect(component.tagName).toMatch(/div/i);
    });

    it('should contain a label with class of file-label', () => {
        const expected = 'file-label';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('FormFileLabel');

        expect(component).toHaveClass(expected);
        expect(component.tagName).toMatch(/label/i);
    });

    it('should contain an input with class of file-input', () => {
        const expected = 'file-input';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('FormFileInput');

        expect(component).toHaveClass(expected);
        expect(component.tagName).toMatch(/input/i);
    });

    it('should contain a span with class of file-cta for icons', () => {
        const expected = 'file-cta';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('FormFileCta');

        expect(component).toHaveClass(expected);
        expect(component.tagName).toMatch(/span/i);
    });

    it('should contain a span with class of file-label', () => {
        const expected = 'file-label';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('FormFileLabelDescription');

        expect(component).toHaveClass(expected);
        expect(component.tagName).toMatch(/span/i);
    });

    it('should contain default text of Choose a file... in LabelDescription', () => {
        const expected = 'Choose a file...';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('FormFileLabelDescription');

        expect(component).toHaveTextContent(expected);
    });

    it('should not contain a span with FormFileFileName if file name is not passed', () => {
        const { queryByTestId } = renderComponent({});

        const component = queryByTestId('FormFileFileName');

        expect(component).not.toBeInTheDocument();
    });

    it('should contain a span with class of file-name with given text', () => {
        const expected = 'file name here';
        const expectedClass = 'file-name';
        const { getByTestId } = renderComponent({ fileName: expected });

        const component = getByTestId('FormFileFileName');

        expect(component).toHaveTextContent(expected);
        expect(component).toHaveClass(expectedClass);
        expect(component.tagName).toMatch(/span/i);
    });

    it('should contain fileLabel when passed', () => {
        const expected = 'my file label';
        const { getByTestId } = renderComponent({ fileLabel: expected });

        const component = getByTestId('FormFileLabel');

        expect(component).toHaveTextContent(expected);
    });

    it('should contain fileIcon component when passed', () => {
        const expected = 'test icon';
        const fileIcon = <div data-testid="TestIcon">{expected}</div>;
        const { getByTestId } = renderComponent({ fileIcon });

        const component = getByTestId('TestIcon');

        expect(component).toHaveTextContent(expected);
    });

    it('should contain color class', () => {
        const expected: FormFileProps['color'] = 'is-primary';
        const { getByTestId } = renderComponent({ color: expected });

        const component = getByTestId('FormFileDiv');

        expect(component).toHaveClass(expected);
    });

    it('should contain size class', () => {
        const expected: FormFileProps['size'] = 'is-small';
        const { getByTestId } = renderComponent({ size: expected });

        const component = getByTestId('FormFileDiv');

        expect(component).toHaveClass(expected);
    });

    it('should contain alignment class', () => {
        const expected: FormFileProps['alignment'] = 'is-centered';
        const { getByTestId } = renderComponent({ alignment: expected });

        const component = getByTestId('FormFileDiv');

        expect(component).toHaveClass(expected);
    });

    it('should contain has-name class', () => {
        const expected = 'has-name';
        const hasName: FormFileProps['hasName'] = true;
        const { getByTestId } = renderComponent({ hasName });

        const component = getByTestId('FormFileDiv');

        expect(component).toHaveClass(expected);
    });

    it('should contain is-fullwidth class', () => {
        const expected = 'is-fullwidth';
        const isFullwidth: FormFileProps['isFullwidth'] = true;
        const { getByTestId } = renderComponent({ isFullwidth });

        const component = getByTestId('FormFileDiv');

        expect(component).toHaveClass(expected);
    });

    it('should contain is-boxed class', () => {
        const expected = 'is-boxed';
        const isBoxed: FormFileProps['isBoxed'] = true;
        const { getByTestId } = renderComponent({ isBoxed });

        const component = getByTestId('FormFileDiv');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('FormFileDiv', renderComponent);
});

describe('Form File Icon Component', () => {
    const renderComponent = (props: FormFileIconProps) =>
        render(<FormFileIcon {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('FormFileIcon');

        expect(component).toHaveTextContent(expected);
    });

    it('should contain file-icon class', () => {
        const expected = 'file-icon';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('FormFileIcon');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('FormFileIcon', renderComponent);
});

describe('Form Icon Component', () => {
    const renderComponent = (props: FormIconProps) =>
        render(<FormIcon {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('Icon');

        expect(component).toHaveTextContent(expected);
    });

    it('should have alignment class', () => {
        const expected: FormIconProps['alignment'] = 'is-left';
        const { getByTestId } = renderComponent({ alignment: expected });

        const component = getByTestId('Icon');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('Icon', renderComponent);
});

describe('Form Radio Component', () => {
    const renderComponent = (props: FormRadioProps) =>
        render(<FormRadio {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('FormRadioLabel');

        expect(component).toHaveTextContent(expected);
    });

    it('should have label element with radio class', () => {
        const expected = 'radio';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('FormRadioLabel');

        expect(component).toHaveClass(expected);
        expect(component.tagName).toMatch(/label/i);
    });

    it('should be checked when clicked', () => {
        const { getByTestId } = renderComponent({});

        const component = getByTestId('FormRadio');

        expect(component).not.toBeChecked();

        fireEvent.click(component);

        expect(component).toBeChecked();
    });

    it('should contain classNames on radio when _innerRadioClassName is passed', () => {
        const expected = 'foo bar-baz';
        const { getByTestId } = renderComponent({
            _innerRadioClassName: expected,
        });

        const component = getByTestId('FormRadio');

        expect(component).toHaveClass(expected);
    });

    it('should have style on radio label when _innerDisabledColor is passed and disabled is true', () => {
        const expected = 'red';
        const { getByTestId } = renderComponent({
            disabled: true,
            _innerDisabledColor: expected,
        });

        const component = getByTestId('FormRadioLabel');

        expect(component).toHaveStyle({
            cursor: 'not-allowed',
            color: expected,
        });
    });

    it('should have no style on radio label when _innerDisabledColor is passed and disable is false', () => {
        const redHerring = 'red';
        const { getByTestId } = renderComponent({
            disabled: false,
            _innerDisabledColor: redHerring,
        });

        const component = getByTestId('FormRadioLabel');

        expect(component).toHaveStyle({
            cursor: 'default',
            color: undefined,
        });
    });

    testBulmaProps('FormRadioLabel', renderComponent);
});

describe('Form Select Component', () => {
    const renderComponent = (props: FormSelectProps) =>
        render(<FormSelect {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({ children: expected });

        const component = getByTestId('FormSelect');

        expect(component).toHaveTextContent(expected);
    });

    it('should have outer div with select class', () => {
        const expected = 'select';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('FormSelectContainer');

        expect(component).toHaveClass(expected);
        expect(component.tagName).toMatch(/div/i);
    });

    it('should have size class', () => {
        const expected: FormSelectProps['size'] = 'is-large';
        const { getByTestId } = renderComponent({ size: expected });

        const component = getByTestId('FormSelectContainer');

        expect(component).toHaveClass(expected);
    });

    it('should have color class', () => {
        const expected: FormSelectProps['color'] = 'is-warning';
        const { getByTestId } = renderComponent({ color: expected });

        const component = getByTestId('FormSelectContainer');

        expect(component).toHaveClass(expected);
    });

    it('should have state class', () => {
        const expected: FormSelectProps['state'] = 'is-hovered';
        const { getByTestId } = renderComponent({ state: expected });

        const component = getByTestId('FormSelectContainer');

        expect(component).toHaveClass(expected);
    });

    it('should have is-multiple class', () => {
        const expected = 'is-multiple';
        const isMultiple: FormSelectProps['isMultiple'] = true;
        const { getByTestId } = renderComponent({ isMultiple });

        const component = getByTestId('FormSelectContainer');

        expect(component).toHaveClass(expected);
    });

    it('should have is-rounded class', () => {
        const expected = 'is-rounded';
        const isRounded: FormSelectProps['isRounded'] = true;
        const { getByTestId } = renderComponent({ isRounded });

        const component = getByTestId('FormSelectContainer');

        expect(component).toHaveClass(expected);
    });

    it('should container inner select class name', () => {
        const expected: FormSelectProps['_innerSelectClassName'] =
            'foo bar-baz';
        const { getByTestId } = renderComponent({
            _innerSelectClassName: expected,
        });

        const component = getByTestId('FormSelect');

        expect(component).toHaveClass(expected);
    });

    it('should have is-loading class on inner select', () => {
        const expected = 'is-loading';
        const isLoading: FormSelectProps['isLoading'] = true;
        const { getByTestId } = renderComponent({ isLoading });

        const component = getByTestId('FormSelect');

        expect(component).toHaveClass(expected);
    });

    it('should have size attribute when applied', () => {
        const expected: FormSelectProps['_innerSelectSize'] = 5;

        const { getByTestId } = renderComponent({ _innerSelectSize: expected });

        const component = getByTestId('FormSelect');

        expect(component).toHaveAttribute('size', expected.toString());
    });

    it('should have is-fullwidth class on container', () => {
        const expected = 'is-fullwidth';
        const isFullwidth: FormSelectProps['isFullwidth'] = true;

        const { getByTestId } = renderComponent({ isFullwidth });

        const component = getByTestId('FormSelectContainer');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('FormSelectContainer', renderComponent);
});

describe('Form Text Area Component', () => {
    const renderComponent = (props: FormTextAreaProps) =>
        render(<FormTextArea {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        const { getByTestId } = renderComponent({
            value: expected,
            readOnly: true,
        });

        const component = getByTestId('FormTextArea');

        expect(component).toHaveTextContent(expected);
    });

    it('should have textarea class', () => {
        const expected = 'textarea';
        const { getByTestId } = renderComponent({});

        const component = getByTestId('FormTextArea');

        expect(component).toHaveClass(expected);
    });

    it('should have size class', () => {
        const expected: FormTextAreaProps['size'] = 'is-normal';
        const { getByTestId } = renderComponent({ size: expected });

        const component = getByTestId('FormTextArea');

        expect(component).toHaveClass(expected);
    });

    it('should have color class', () => {
        const expected: FormTextAreaProps['color'] = 'is-info';
        const { getByTestId } = renderComponent({ color: expected });

        const component = getByTestId('FormTextArea');

        expect(component).toHaveClass(expected);
    });

    it('should have state class', () => {
        const expected: FormTextAreaProps['state'] = 'is-focused';
        const { getByTestId } = renderComponent({ state: expected });

        const component = getByTestId('FormTextArea');

        expect(component).toHaveClass(expected);
    });

    it('should have is-loading class', () => {
        const expected = 'is-loading';
        const isLoading: FormTextAreaProps['isLoading'] = true;
        const { getByTestId } = renderComponent({ isLoading });

        const component = getByTestId('FormTextArea');

        expect(component).toHaveClass(expected);
    });

    it('should have has-fixed-size class', () => {
        const expected = 'has-fixed-size';
        const hasFixedSize: FormTextAreaProps['hasFixedSize'] = true;
        const { getByTestId } = renderComponent({ hasFixedSize });

        const component = getByTestId('FormTextArea');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('FormTextArea', renderComponent);
});
