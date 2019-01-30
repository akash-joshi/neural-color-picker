# neural-color-picker
![Downloads shield](https://img.shields.io/npm/dt/neural-color-picker.svg)

JavaScript library using a Recurrent Neural Network which takes background color as input in form of (red,green,blue) and gives output whether forefront text should be light or dark.

## Installation

> For Node

    $ npm i neural-color-picker --save

> For Browser

	<script src="https://unpkg.com/neural-color-picker@1.2.1/dist/neural.js"></script>


## Usage
Your input will be the color of the background

> For Node

```javascript
const color=require('neural-color-picker')
console.log(color(255,255,255))
```

> For Browser

```javascript
console.log(neuralColor(255,255,255))
```

## Output
Output is what color your foreground text should be
```
dark
```

## License
The MIT License (MIT)
