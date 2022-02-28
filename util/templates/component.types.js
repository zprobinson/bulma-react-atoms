module.exports = (componentName) => ({
    content: `
export type ${componentName}Props = {
    foo: string;
}
`,
    extension: `.types.ts`,
});
