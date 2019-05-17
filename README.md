<div align = "center">
<img src="https://raw.githubusercontent.com/shubham-saudolla/media/master/neural-color-picker/neuralColorPickerIcon.png" width = "200" />

<h1>Neural Color Picker</h1>

[![npm](https://img.shields.io/npm/v/neural-color-picker.svg?style=for-the-badge&labelColor=000000&color=4505ff)](https://www.npmjs.com/package/neural-color-picker)
[![Downloads](https://img.shields.io/npm/dt/neural-color-picker.svg?style=for-the-badge&labelColor=000000)](https://www.npmjs.com/package/neural-color-picker)
[![License](https://img.shields.io/npm/l/neural-color-picker.svg?style=for-the-badge&labelColor=000000&color=ff0666)](https://www.npmjs.com/package/neural-color-picker)
</div>

---

# neural-color-picker

A JavaScript library using a **Recurrent Neural Network**, which receives a background color as input in the form of (Red, Green, Blue) and outputs whether the foreground text should be light or dark.

---

## Installation

### Using npm

```console
npm i neural-color-picker --save
```

### Using the browser

```html
<script src="https://unpkg.com/neural-color-picker@1.2.1/dist/neural.js"></script>
```

---

## Usage

Your input will be the color of the background

### Node

```javascript
const color = require('neural-color-picker')
console.log(color(255, 255, 255))
```

### Browser

```javascript
console.log(neuralColor(255, 255, 255))
```

### Output

Output is what color your foreground text should be

```console
dark
```

---

## Support the project

To show support for the project, you can do any (or many!) of the following:

- [Star the repository.](https://github.com/akash-joshi/neural-color-picker)
- [Follow me on twitter, and say hi!](https://twitter.com/akashtrikon)
- [Donate via PayPal.](http://paypal.me/akashsjoshi)

---

## License

MIT License (MIT)