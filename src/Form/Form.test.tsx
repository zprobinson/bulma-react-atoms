import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

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
import { FormHelpProps } from './Form.types';
import FormHelp from './FormHelp';

describe('Form Component', () => {
    const renderComponent = (props: FormProps) => render(<Form {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Form');

        expect(component).toHaveTextContent(expected);
    });
});

describe('Form Input Component', () => {
    const renderComponent = (props: FormInputProps) =>
        render(<FormInput {...props} />);

    it('should have input class', () => {
        const expected = 'input';
        renderComponent({});

        const component = screen.getByTestId('FormInput');

        expect(component).toHaveClass(expected);
    });

    it('should render size class', () => {
        const expected: FormInputProps['size'] = 'is-large';
        renderComponent({ size: expected });

        const component = screen.getByTestId('FormInput');

        expect(component).toHaveClass(expected);
    });

    it('should render color class', () => {
        const expected: FormInputProps['color'] = 'is-danger';
        renderComponent({ color: expected });

        const component = screen.getByTestId('FormInput');

        expect(component).toHaveClass(expected);
    });

    it('should render is-static class', () => {
        const value: FormInputProps['isStatic'] = true;
        const expected = 'is-static';

        renderComponent({ isStatic: value });

        const component = screen.getByTestId('FormInput');

        expect(component).toHaveClass(expected);
    });

    it('should render is-loading class', () => {
        const value: FormInputProps['isLoading'] = true;
        const expected = 'is-loading';

        renderComponent({ isLoading: value });

        const component = screen.getByTestId('FormInput');

        expect(component).toHaveClass(expected);
    });

    it('should render is-rounded class', () => {
        const value: FormInputProps['isRounded'] = true;
        const expected = 'is-rounded';

        renderComponent({ isRounded: value });

        const component = screen.getByTestId('FormInput');

        expect(component).toHaveClass(expected);
    });

    it('should render state class', () => {
        const expected: FormInputProps['state'] = 'is-focused';

        renderComponent({ state: expected });

        const component = screen.getByTestId('FormInput');

        expect(component).toHaveClass(expected);
    });

    it('should have size attribute when provided', () => {
        const expected: FormInputProps['_innerInputSize'] = 5;

        renderComponent({ _innerInputSize: expected });

        const component = screen.getByTestId('FormInput');

        expect(component).toHaveAttribute('size', expected.toString());
    });

    testBulmaProps('FormInput', renderComponent);
});

describe('Form Checkbox Component', () => {
    const renderComponent = (props: FormCheckboxProps) =>
        render(<FormCheckbox {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('FormCheckboxLabel');

        expect(component).toHaveTextContent(expected);
    });

    it('should have checkbox class correctly', () => {
        const expected = 'checkbox';
        renderComponent({});

        const component = screen.getByTestId('FormCheckboxLabel');

        expect(component).toHaveClass(expected);
    });

    it('should be checked when clicked', () => {
        renderComponent({});

        const component = screen.getByTestId('FormCheckbox');

        expect(component).not.toBeChecked();

        fireEvent.click(component);

        expect(component).toBeChecked();
    });

    it('should contain classNames on checkbox when _innerCheckboxClassName is passed', () => {
        const expected = 'foo bar-baz';
        renderComponent({
            _innerCheckboxClassName: expected,
        });

        const component = screen.getByTestId('FormCheckbox');

        expect(component).toHaveClass(expected);
    });

    it('should have style on checkbox label when _innerDisabledColor is passed and disabled is true', () => {
        const expected = 'red';
        renderComponent({
            disabled: true,
            _innerDisabledColor: expected,
        });

        const component = screen.getByTestId('FormCheckboxLabel');

        expect(component).toHaveStyle({
            cursor: 'not-allowed',
            color: expected,
        });
    });

    it('should have no style on checkbox label when _innerDisabledColor is passed and disable is false', () => {
        const redHerring = 'red';
        renderComponent({
            disabled: false,
            _innerDisabledColor: redHerring,
        });

        const component = screen.getByTestId('FormCheckboxLabel');

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
        renderComponent({ children: expected });

        const component = screen.getByTestId('FormControl');

        expect(component).toHaveTextContent(expected);
    });

    it('should have control class', () => {
        const expected = 'control';
        renderComponent({});

        const component = screen.getByTestId('FormControl');

        expect(component).toHaveClass(expected);
    });

    it('should have one iconAlignment class', () => {
        const expected: FormControlProps['iconAlignment'] = 'has-icons-left';
        renderComponent({ iconAlignment: expected });

        const component = screen.getByTestId('FormControl');

        expect(component).toHaveClass(expected);
    });

    it('should have multiple iconAlignment class', () => {
        const iconAlignment: FormControlProps['iconAlignment'] = [
            'has-icons-left',
            'has-icons-right',
        ];
        const expected = 'has-icons-left has-icons-right';
        renderComponent({ iconAlignment });

        const component = screen.getByTestId('FormControl');

        expect(component).toHaveClass(expected);
    });

    it('should have is-fullwidth class', () => {
        const isFullwidth: FormControlProps['isFullwidth'] = true;
        const expected = 'is-fullwidth';
        renderComponent({ isFullwidth });

        const component = screen.getByTestId('FormControl');

        expect(component).toHaveClass(expected);
    });

    it('should have is-loading class', () => {
        const isLoading: FormControlProps['isLoading'] = true;
        const expected = 'is-loading';
        renderComponent({ isLoading });

        const component = screen.getByTestId('FormControl');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('FormControl', renderComponent);
});

describe('Form Field Component', () => {
    const renderComponent = (props: FormFieldProps) =>
        render(<FormField {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('FormField');

        expect(component).toHaveTextContent(expected);
    });

    it('should have field class', () => {
        const expected = 'field';
        renderComponent({});

        const component = screen.getByTestId('FormField');

        expect(component).toHaveClass(expected);
    });

    describe('Form Field Kind tests', () => {
        it('should not render kind class', () => {
            const kind: FormFieldProps['kind'] = undefined;
            const redHerringOne = 'has-addons';
            const redHerringTwo = 'is-grouped';
            renderComponent({ kind });

            const component = screen.getByTestId('FormField');

            expect(component).not.toHaveClass(redHerringOne);
            expect(component).not.toHaveClass(redHerringTwo);
        });

        it('should not render kind class even when passed alignment', () => {
            const kind: FormFieldProps['kind'] = undefined;
            const alignment: FormFieldProps['alignment'] = 'right';
            const redHerringOne = 'has-addons';
            const redHerringTwo = 'is-grouped';
            renderComponent({ kind, alignment });

            const component = screen.getByTestId('FormField');

            expect(component).not.toHaveClass(redHerringOne);
            expect(component).not.toHaveClass(redHerringTwo);
        });

        it('should render has-addons kind class', () => {
            const kind: FormFieldProps['kind'] = 'addons';
            const expected = 'has-addons';
            renderComponent({ kind });

            const component = screen.getByTestId('FormField');

            expect(component).toHaveClass(expected);
        });

        it('should render has-addons and alignment kind class', () => {
            const kind: FormFieldProps['kind'] = 'addons';
            const alignment: FormFieldProps['alignment'] = 'right';
            const expected = 'has-addons has-addons-right';
            renderComponent({ kind, alignment });

            const component = screen.getByTestId('FormField');

            expect(component).toHaveClass(expected);
        });

        it('should render is-expanded in addition to kind alignment class', () => {
            const kind: FormFieldProps['kind'] = 'addons';
            const alignment: FormFieldProps['alignment'] = 'right';
            const isExpanded: FormFieldProps['isExpanded'] = true;
            const expected = 'has-addons has-addons-right is-expanded';

            renderComponent({
                kind,
                alignment,
                isExpanded,
            });

            const component = screen.getByTestId('FormField');

            expect(component).toHaveClass(expected);
        });

        it('should render is-grouped kind class', () => {
            const kind: FormFieldProps['kind'] = 'grouped';
            const expected = 'is-grouped';
            renderComponent({ kind });

            const component = screen.getByTestId('FormField');

            expect(component).toHaveClass(expected);
        });

        it('should render is-grouped and alignment kind class', () => {
            const kind: FormFieldProps['kind'] = 'grouped';
            const alignment: FormFieldProps['alignment'] = 'centered';
            const expected = 'is-grouped is-grouped-centered';
            renderComponent({ kind, alignment });

            const component = screen.getByTestId('FormField');

            expect(component).toHaveClass(expected);
        });

        it('should render is-grouped-multiline in addition to is-grouped and alignment kind class', () => {
            const kind: FormFieldProps['kind'] = 'grouped';
            const alignment: FormFieldProps['alignment'] = 'centered';
            const groupMultiline: FormFieldProps['groupMultiline'] = true;
            const expected =
                'is-grouped is-grouped-centered is-grouped-multiline';
            renderComponent({
                kind,
                alignment,
                groupMultiline,
            });

            const component = screen.getByTestId('FormField');

            expect(component).toHaveClass(expected);
        });
    });

    it('should render is-horizontal class', () => {
        const isHorizontal: FormFieldProps['isHorizontal'] = true;
        const expected = 'is-horizontal';
        renderComponent({ isHorizontal });

        const component = screen.getByTestId('FormField');

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
            renderComponent({ size: redHerring });

            const component = screen.getByTestId('FormField');

            expect(component).not.toHaveClass(redHerring);
        });

        it('should pass size class down into relevant child components', () => {
            const expected: FormFieldProps['size'] = 'is-large';
            renderComponent({ size: expected });

            expect(screen.getByTestId('FormFieldLabel')).toHaveClass(expected);
            expect(screen.getByTestId('FormControl')).toHaveClass(expected);
            expect(screen.getByTestId('FormInput')).toHaveClass(expected);
            expect(screen.getByTestId('FormFileDiv')).toHaveClass(expected);
            expect(screen.getByTestId('FormSelectContainer')).toHaveClass(
                expected
            );
            expect(screen.getByTestId('FormTextArea')).toHaveClass(expected);
        });

        it('should pass size class down into relevant child components unless overridden', () => {
            const expected: FormFieldProps['size'] = 'is-medium';
            const labelSize = 'is-small';
            renderComponentLabelOverriddenIsSmall({
                size: expected,
            });

            expect(screen.getByTestId('FormFieldLabel')).toHaveClass(labelSize);
            expect(screen.getByTestId('FormControl')).toHaveClass(expected);
            expect(screen.getByTestId('FormInput')).toHaveClass(expected);
        });
    });

    testBulmaProps('FormField', renderComponent);
});

describe('Form Field Body Component', () => {
    const renderComponent = (props: FormFieldBodyProps) =>
        render(<FormFieldBody {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('FormFieldBody');

        expect(component).toHaveTextContent(expected);
    });

    it('should have the field-body class', () => {
        const expected = 'field-body';
        renderComponent({});

        const component = screen.getByTestId('FormFieldBody');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('FormFieldBody', renderComponent);
});

describe('Form Field Label Component', () => {
    const renderComponent = (props: FormFieldLabelProps) =>
        render(<FormFieldLabel {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('FormFieldLabel');

        expect(component).toHaveTextContent(expected);
    });

    it('should have the label class', () => {
        const expected = 'label';
        renderComponent({});

        const component = screen.getByTestId('FormFieldLabel');

        expect(component).toHaveClass(expected);
    });

    it('should have size class', () => {
        const expected: FormFieldLabelProps['size'] = 'is-normal';
        renderComponent({ size: expected });

        const component = screen.getByTestId('FormFieldLabel');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('FormFieldLabel', renderComponent);
});

describe('Form File Component', () => {
    const renderComponent = (props: FormFileProps) =>
        render(<FormFile {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('FormFileCta');

        expect(component).toHaveTextContent(expected);
    });

    it('should contain a div with class of file', () => {
        const expected = 'file';
        renderComponent({});

        const component = screen.getByTestId('FormFileDiv');

        expect(component).toHaveClass(expected);
        expect(component.tagName).toMatch(/div/i);
    });

    it('should contain a label with class of file-label', () => {
        const expected = 'file-label';
        renderComponent({});

        const component = screen.getByTestId('FormFileLabel');

        expect(component).toHaveClass(expected);
        expect(component.tagName).toMatch(/label/i);
    });

    it('should contain an input with class of file-input', () => {
        const expected = 'file-input';
        renderComponent({});

        const component = screen.getByTestId('FormFileInput');

        expect(component).toHaveClass(expected);
        expect(component.tagName).toMatch(/input/i);
    });

    it('should contain a span with class of file-cta for icons', () => {
        const expected = 'file-cta';
        renderComponent({});

        const component = screen.getByTestId('FormFileCta');

        expect(component).toHaveClass(expected);
        expect(component.tagName).toMatch(/span/i);
    });

    it('should contain a span with class of file-label', () => {
        const expected = 'file-label';
        renderComponent({});

        const component = screen.getByTestId('FormFileLabelDescription');

        expect(component).toHaveClass(expected);
        expect(component.tagName).toMatch(/span/i);
    });

    it('should contain default text of Choose a file... in LabelDescription', () => {
        const expected = 'Choose a file...';
        renderComponent({});

        const component = screen.getByTestId('FormFileLabelDescription');

        expect(component).toHaveTextContent(expected);
    });

    it('should not contain a span with FormFileFileName if file name is not passed', () => {
        renderComponent({});

        const component = screen.queryByTestId('FormFileFileName');

        expect(component).not.toBeInTheDocument();
    });

    it('should contain a span with class of file-name with given text', () => {
        const expected = 'file name here';
        const expectedClass = 'file-name';
        renderComponent({ fileName: expected });

        const component = screen.getByTestId('FormFileFileName');

        expect(component).toHaveTextContent(expected);
        expect(component).toHaveClass(expectedClass);
        expect(component.tagName).toMatch(/span/i);
    });

    it('should contain fileLabel when passed', () => {
        const expected = 'my file label';
        renderComponent({ fileLabel: expected });

        const component = screen.getByTestId('FormFileLabel');

        expect(component).toHaveTextContent(expected);
    });

    it('should contain fileIcon component when passed', () => {
        const expected = 'test icon';
        const fileIcon = <div data-testid="TestIcon">{expected}</div>;
        renderComponent({ fileIcon });

        const component = screen.getByTestId('TestIcon');

        expect(component).toHaveTextContent(expected);
    });

    it('should contain color class', () => {
        const expected: FormFileProps['color'] = 'is-primary';
        renderComponent({ color: expected });

        const component = screen.getByTestId('FormFileDiv');

        expect(component).toHaveClass(expected);
    });

    it('should contain size class', () => {
        const expected: FormFileProps['size'] = 'is-small';
        renderComponent({ size: expected });

        const component = screen.getByTestId('FormFileDiv');

        expect(component).toHaveClass(expected);
    });

    it('should contain alignment class', () => {
        const expected: FormFileProps['alignment'] = 'is-centered';
        renderComponent({ alignment: expected });

        const component = screen.getByTestId('FormFileDiv');

        expect(component).toHaveClass(expected);
    });

    it('should contain has-name class', () => {
        const expected = 'has-name';
        const hasName: FormFileProps['hasName'] = true;
        renderComponent({ hasName });

        const component = screen.getByTestId('FormFileDiv');

        expect(component).toHaveClass(expected);
    });

    it('should contain is-fullwidth class', () => {
        const expected = 'is-fullwidth';
        const isFullwidth: FormFileProps['isFullwidth'] = true;
        renderComponent({ isFullwidth });

        const component = screen.getByTestId('FormFileDiv');

        expect(component).toHaveClass(expected);
    });

    it('should contain is-boxed class', () => {
        const expected = 'is-boxed';
        const isBoxed: FormFileProps['isBoxed'] = true;
        renderComponent({ isBoxed });

        const component = screen.getByTestId('FormFileDiv');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('FormFileDiv', renderComponent);
});

describe('Form File Icon Component', () => {
    const renderComponent = (props: FormFileIconProps) =>
        render(<FormFileIcon {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('FormFileIcon');

        expect(component).toHaveTextContent(expected);
    });

    it('should contain file-icon class', () => {
        const expected = 'file-icon';
        renderComponent({});

        const component = screen.getByTestId('FormFileIcon');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('FormFileIcon', renderComponent);
});

describe('Form Icon Component', () => {
    const renderComponent = (props: FormIconProps) =>
        render(<FormIcon {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('Icon');

        expect(component).toHaveTextContent(expected);
    });

    it('should have alignment class', () => {
        const expected: FormIconProps['alignment'] = 'is-left';
        renderComponent({ alignment: expected });

        const component = screen.getByTestId('Icon');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('Icon', renderComponent);
});

describe('Form Radio Component', () => {
    const renderComponent = (props: FormRadioProps) =>
        render(<FormRadio {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId('FormRadioLabel');

        expect(component).toHaveTextContent(expected);
    });

    it('should have label element with radio class', () => {
        const expected = 'radio';
        renderComponent({});

        const component = screen.getByTestId('FormRadioLabel');

        expect(component).toHaveClass(expected);
        expect(component.tagName).toMatch(/label/i);
    });

    it('should be checked when clicked', () => {
        renderComponent({});

        const component = screen.getByTestId('FormRadio');

        expect(component).not.toBeChecked();

        fireEvent.click(component);

        expect(component).toBeChecked();
    });

    it('should contain classNames on radio when _innerRadioClassName is passed', () => {
        const expected = 'foo bar-baz';
        renderComponent({
            _innerRadioClassName: expected,
        });

        const component = screen.getByTestId('FormRadio');

        expect(component).toHaveClass(expected);
    });

    it('should have style on radio label when _innerDisabledColor is passed and disabled is true', () => {
        const expected = 'red';
        renderComponent({
            disabled: true,
            _innerDisabledColor: expected,
        });

        const component = screen.getByTestId('FormRadioLabel');

        expect(component).toHaveStyle({
            cursor: 'not-allowed',
            color: expected,
        });
    });

    it('should have no style on radio label when _innerDisabledColor is passed and disable is false', () => {
        const redHerring = 'red';
        renderComponent({
            disabled: false,
            _innerDisabledColor: redHerring,
        });

        const component = screen.getByTestId('FormRadioLabel');

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
        renderComponent({ children: expected });

        const component = screen.getByTestId('FormSelect');

        expect(component).toHaveTextContent(expected);
    });

    it('should have outer div with select class', () => {
        const expected = 'select';
        renderComponent({});

        const component = screen.getByTestId('FormSelectContainer');

        expect(component).toHaveClass(expected);
        expect(component.tagName).toMatch(/div/i);
    });

    it('should have size class', () => {
        const expected: FormSelectProps['size'] = 'is-large';
        renderComponent({ size: expected });

        const component = screen.getByTestId('FormSelectContainer');

        expect(component).toHaveClass(expected);
    });

    it('should have color class', () => {
        const expected: FormSelectProps['color'] = 'is-warning';
        renderComponent({ color: expected });

        const component = screen.getByTestId('FormSelectContainer');

        expect(component).toHaveClass(expected);
    });

    it('should have state class', () => {
        const expected: FormSelectProps['state'] = 'is-hovered';
        renderComponent({ state: expected });

        const component = screen.getByTestId('FormSelectContainer');

        expect(component).toHaveClass(expected);
    });

    it('should have is-multiple class', () => {
        const expected = 'is-multiple';
        const isMultiple: FormSelectProps['isMultiple'] = true;
        renderComponent({ isMultiple });

        const component = screen.getByTestId('FormSelectContainer');

        expect(component).toHaveClass(expected);
    });

    it('should have is-rounded class', () => {
        const expected = 'is-rounded';
        const isRounded: FormSelectProps['isRounded'] = true;
        renderComponent({ isRounded });

        const component = screen.getByTestId('FormSelectContainer');

        expect(component).toHaveClass(expected);
    });

    it('should container inner select class name', () => {
        const expected: FormSelectProps['_innerSelectClassName'] =
            'foo bar-baz';
        renderComponent({
            _innerSelectClassName: expected,
        });

        const component = screen.getByTestId('FormSelect');

        expect(component).toHaveClass(expected);
    });

    it('should have is-loading class on inner select', () => {
        const expected = 'is-loading';
        const isLoading: FormSelectProps['isLoading'] = true;
        renderComponent({ isLoading });

        const component = screen.getByTestId('FormSelect');

        expect(component).toHaveClass(expected);
    });

    it('should have size attribute when applied', () => {
        const expected: FormSelectProps['_innerSelectSize'] = 5;

        renderComponent({ _innerSelectSize: expected });

        const component = screen.getByTestId('FormSelect');

        expect(component).toHaveAttribute('size', expected.toString());
    });

    it('should have is-fullwidth class on container', () => {
        const expected = 'is-fullwidth';
        const isFullwidth: FormSelectProps['isFullwidth'] = true;

        renderComponent({ isFullwidth });

        const component = screen.getByTestId('FormSelectContainer');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('FormSelectContainer', renderComponent);
});

describe('Form Text Area Component', () => {
    const renderComponent = (props: FormTextAreaProps) =>
        render(<FormTextArea {...props} />);

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({
            value: expected,
            readOnly: true,
        });

        const component = screen.getByTestId('FormTextArea');

        expect(component).toHaveTextContent(expected);
    });

    it('should have textarea class', () => {
        const expected = 'textarea';
        renderComponent({});

        const component = screen.getByTestId('FormTextArea');

        expect(component).toHaveClass(expected);
    });

    it('should have size class', () => {
        const expected: FormTextAreaProps['size'] = 'is-normal';
        renderComponent({ size: expected });

        const component = screen.getByTestId('FormTextArea');

        expect(component).toHaveClass(expected);
    });

    it('should have color class', () => {
        const expected: FormTextAreaProps['color'] = 'is-info';
        renderComponent({ color: expected });

        const component = screen.getByTestId('FormTextArea');

        expect(component).toHaveClass(expected);
    });

    it('should have state class', () => {
        const expected: FormTextAreaProps['state'] = 'is-focused';
        renderComponent({ state: expected });

        const component = screen.getByTestId('FormTextArea');

        expect(component).toHaveClass(expected);
    });

    it('should have is-loading class', () => {
        const expected = 'is-loading';
        const isLoading: FormTextAreaProps['isLoading'] = true;
        renderComponent({ isLoading });

        const component = screen.getByTestId('FormTextArea');

        expect(component).toHaveClass(expected);
    });

    it('should have has-fixed-size class', () => {
        const expected = 'has-fixed-size';
        const hasFixedSize: FormTextAreaProps['hasFixedSize'] = true;
        renderComponent({ hasFixedSize });

        const component = screen.getByTestId('FormTextArea');

        expect(component).toHaveClass(expected);
    });

    testBulmaProps('FormTextArea', renderComponent);
});

describe('Form Help Component', () => {
    const renderComponent = (props: FormHelpProps) =>
        render(<FormHelp {...props} />);
    const TEST_ID = 'FormHelp';

    it('should render children correctly', () => {
        const expected = 'harvey was here';
        renderComponent({ children: expected });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveTextContent(expected);
    });

    it('should have embedded help class name', () => {
        const expected = 'help';
        renderComponent({});

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    it('should have color class when provided', () => {
        const expected: FormHelpProps['color'] = 'is-danger';
        renderComponent({ color: expected });

        const component = screen.getByTestId(TEST_ID);

        expect(component).toHaveClass(expected);
    });

    testBulmaProps(TEST_ID, renderComponent);
});
