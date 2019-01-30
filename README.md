# neural-color-picker
![Downloads shield](https://img.shields.io/npm/dt/neural-color-picker.svg)

NodeJS module using brain.js which takes background color as input in form of (red,green,blue) and gives output whether forefront text should be light or dark.

## Installation

> For Node

    $ npm i neural-color-picker --save

> For Browser

Use ```<meta charset="utf-8" />``` in the ```head``` tag,
and include this in your HTML

```html 
<script src="https://unpkg.com/neural-color-picker@1.1.4/dist/neural.js"></script>
```

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

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
