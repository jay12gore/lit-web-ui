# Web Component Library

A simple and lightweight web component library. Currently, the library includes an Accordion & Button components.

## Installation

You can install the library via npm:

```sh
npm i lit-web-ui
```

Or with yarn:

```sh
yarn add lit-web-ui
```

## Usage

### Importing the Component

To use the Accordion component, first import the library into your project:

```javascript
import 'lit-web-ui';
```

### Example Usage

Here is an example of how to use the Accordion component in your project:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accordion Example</title>
</head>
<body>
    <lit-accordion header="Accordion 1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </lit-accordion>
    <lit-accordion header="Accordion 2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae.
    </lit-accordion>
    <lit-accordion header="Accordion 3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae. Donec nec odio vitae.
    </lit-accordion>

    <script type="module">
        import 'lit-web-ui';
    </script>
</body>
</html>
```

## Attributes and Properties

### `<lit-accordion>`

- `header`: Sets the header of the accordion section. This is required.

### `<lit-button>`

- `variant`: Sets the variant of the button. Default variant is primary
- `disabled`: Sets the disabled of the button to make it disabled.

## Features

- Lightweight and reusable.
- Fully customizable with CSS custom properties.
- Compatible with modern frameworks like React, Angular, and Vue.

## License

This library is licensed under the MIT License.

## Author

Jayesh Gore