# `displayName` required for each styled component

## Rule Details

Examples of **incorrect** code for this rule:

```js

const Title = styled.h1`
  color: white;
`;

```

Examples of **correct** code for this rule:

```js

const Title = styled.h1.withConfig({
  displayName: 'Title'
})`
  color: white;
`;

```
