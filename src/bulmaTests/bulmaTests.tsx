import React from 'react';
import { BulmaHelpers } from '..';
import { foldClassNames } from '../utilities/listUtils';
import { render } from '@testing-library/react';

export type TestRenderFunction<TProps> = (
    props: TProps
) => ReturnType<typeof render>;

type BulmaHelper<T extends keyof BulmaHelpers> = BulmaHelpers[T];

export const testBulmaProps = <TProps extends BulmaHelpers = BulmaHelpers>(
    testId: string,
    myRender: TestRenderFunction<TProps>
) => {
    describe(`${testId} Bulma Helpers Tests`, () => {
        describe('textColor tests', () => {
            it('should have textColor in classNames when applied', () => {
                const expected: BulmaHelper<'textColor'> = 'has-text-primary';
                const { getByTestId } = myRender({
                    textColor: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('backgroundColor tests', () => {
            it('should have backgroundColor in classNames when applied', () => {
                const expected: BulmaHelper<'backgroundColor'> =
                    'has-background-danger-light';
                const { getByTestId } = myRender({
                    textColor: 'has-text-danger',
                    backgroundColor: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('margin tests', () => {
            it('should have margin in classNames when applied', () => {
                const expected: BulmaHelper<'margin'> = 'm-3';
                const { getByTestId } = myRender({
                    margin: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });

            it('should have margin in classNames when applied as an array', () => {
                const array: BulmaHelper<'margin'> = ['mb-0', 'my-4'];
                const expected: string = foldClassNames(array);
                const { getByTestId } = myRender({ margin: array } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('padding tests', () => {
            it('should have padding in classNames when applied', () => {
                const expected: BulmaHelper<'padding'> = 'p-3';
                const { getByTestId } = myRender({
                    padding: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });

            it('should have padding in classNames when applied as an array', () => {
                const array: BulmaHelper<'padding'> = ['pb-0', 'py-4'];
                const expected: string = foldClassNames(array);
                const { getByTestId } = myRender({ padding: array } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('fontSize tests', () => {
            it('should have fontSize in classNames when applied', () => {
                const expected: BulmaHelper<'fontSize'> = 'is-size-1';
                const { getByTestId } = myRender({
                    fontSize: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });

            it('should have fontSize in classNames when applied as an array', () => {
                const array: BulmaHelper<'fontSize'> = [
                    'is-size-1-desktop',
                    'is-size-2-fullhd',
                    'is-size-3-touch',
                ];
                const expected: string = foldClassNames(array);
                const { getByTestId } = myRender({ fontSize: array } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('fontAlignment tests', () => {
            it('should have fontAlignment in classNames when applied', () => {
                const expected: BulmaHelper<'fontAlignment'> =
                    'has-text-centered';
                const { getByTestId } = myRender({
                    fontAlignment: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });

            it('should have fontAlignment in classNames when applied as an array', () => {
                const array: BulmaHelper<'fontAlignment'> = [
                    'has-text-centered-desktop',
                    'has-text-justified-mobile',
                    'has-text-right-desktop-only',
                ];
                const expected: string = foldClassNames(array);
                const { getByTestId } = myRender({
                    fontAlignment: array,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('fontTransform tests', () => {
            it('should have fontTransform in classNames when applied', () => {
                const expected: BulmaHelper<'fontTransform'> = 'is-capitalized';
                const { getByTestId } = myRender({
                    fontTransform: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });

            it('should have fontTransform in classNames when applied as an array', () => {
                const array: BulmaHelper<'fontTransform'> = [
                    'is-italic',
                    'is-lowercase',
                    'is-underlined',
                ];
                const expected: string = foldClassNames(array);
                const { getByTestId } = myRender({
                    fontTransform: array,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('fontWeight tests', () => {
            it('should have fontWeight in classNames when applied', () => {
                const expected: BulmaHelper<'fontWeight'> =
                    'has-text-weight-bold';
                const { getByTestId } = myRender({
                    fontWeight: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('fontFamily tests', () => {
            it('should have fontFamily in classNames when applied', () => {
                const expected: BulmaHelper<'fontFamily'> = 'is-family-code';
                const { getByTestId } = myRender({
                    fontFamily: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('show tests', () => {
            it('should have show in classNames when applied', () => {
                const expected: BulmaHelper<'show'> = 'is-flex';
                const { getByTestId } = myRender({
                    show: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });

            it('should have show in classNames when applied as an array', () => {
                const array: BulmaHelper<'show'> = [
                    'is-flex-desktop',
                    'is-inline-block-mobile',
                    'is-block-tablet-only',
                ];
                const expected: string = foldClassNames(array);
                const { getByTestId } = myRender({
                    show: array,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('hide tests', () => {
            it('should have hide in classNames when applied', () => {
                const expected: BulmaHelper<'hide'> = 'is-hidden-touch';
                const { getByTestId } = myRender({
                    hide: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });

            it('should have hide in classNames when applied as an array', () => {
                const array: BulmaHelper<'hide'> = [
                    'is-hidden-fullhd',
                    'is-hidden-touch',
                    'is-hidden-widescreen-only',
                ];
                const expected: string = foldClassNames(array);
                const { getByTestId } = myRender({
                    hide: array,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('otherVisibility tests', () => {
            it('should have is-invisible in classNames when applied', () => {
                const expected: BulmaHelper<'otherVisibility'> = 'is-invisible';
                const { getByTestId } = myRender({
                    otherVisibility: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });

            it('should have is-sr-only in classNames when applied', () => {
                const expected: BulmaHelper<'otherVisibility'> = 'is-sr-only';
                const { getByTestId } = myRender({
                    otherVisibility: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });

            it('should have is-invisible and is-sr-only in classNames when applied as an array', () => {
                const array: BulmaHelper<'otherVisibility'> = [
                    'is-invisible',
                    'is-sr-only',
                ];
                const expected: string = foldClassNames(array);
                const { getByTestId } = myRender({
                    otherVisibility: array,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('flexDirection tests', () => {
            it('should have flexDirection in classNames when applied', () => {
                const expected: BulmaHelper<'flexDirection'> =
                    'is-flex-direction-column';
                const { getByTestId } = myRender({
                    flexDirection: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('flexWrap tests', () => {
            it('should have flexWrap in classNames when applied', () => {
                const expected: BulmaHelper<'flexWrap'> = 'is-flex-wrap-wrap';
                const { getByTestId } = myRender({
                    flexWrap: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('justifyContent tests', () => {
            it('should have justifyContent in classNames when applied', () => {
                const expected: BulmaHelper<'justifyContent'> =
                    'is-justify-content-center';
                const { getByTestId } = myRender({
                    justifyContent: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('alignContent tests', () => {
            it('should have alignContent in classNames when applied', () => {
                const expected: BulmaHelper<'alignContent'> =
                    'is-align-content-flex-end';
                const { getByTestId } = myRender({
                    alignContent: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('alignItems tests', () => {
            it('should have alignItems in classNames when applied', () => {
                const expected: BulmaHelper<'alignItems'> =
                    'is-align-items-flex-start';
                const { getByTestId } = myRender({
                    alignItems: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('alignSelf tests', () => {
            it('should have alignSelf in classNames when applied', () => {
                const expected: BulmaHelper<'alignSelf'> =
                    'is-align-self-baseline';
                const { getByTestId } = myRender({
                    alignSelf: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('flexGrow tests', () => {
            it('should have flexGrow in classNames when applied', () => {
                const expected: BulmaHelper<'flexGrow'> = 'is-flex-grow-3';
                const { getByTestId } = myRender({
                    flexGrow: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('flexShrink tests', () => {
            it('should have flexShrink in classNames when applied', () => {
                const expected: BulmaHelper<'flexShrink'> = 'is-flex-shrink-0';
                const { getByTestId } = myRender({
                    flexShrink: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });

        describe('otherHelper tests', () => {
            it('should have otherHelper in classNames when applied', () => {
                const expected: BulmaHelper<'otherHelper'> = 'is-shadowless';
                const { getByTestId } = myRender({
                    otherHelper: expected,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });

            it('should have otherHelper in classNames when applied as an array', () => {
                const array: BulmaHelper<'otherHelper'> = [
                    'is-clickable',
                    'is-pulled-left',
                    'is-radiusless',
                    'is-shadowless',
                ];
                const expected: string = foldClassNames(array);
                const { getByTestId } = myRender({
                    otherHelper: array,
                } as TProps);

                const component = getByTestId(testId);

                expect(component).toHaveClass(expected);
            });
        });
    });
};
