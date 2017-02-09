# react-dual-range-slider

The react dual range slider is a UI input designed to set a range of values.

You can set the limits and the values by default. 
The reverse mode permits to get the highest limit value on the left, then the lowest on the right.
It is done to format yourself the output, easy to round the values.
Then an onChange event is triggered when the user stops to slide.

## Demo & Examples

![alt tag](/demo/demo.png)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:4000`](http://localhost:4000) in a browser.


## Installation

The easiest way to use react-dual-range-slider is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-dual-range-slider.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-dual-range-slider --save
```


## Usage

```
var ReactDualRangeSlider = require('react-dual-range-slider');

<ReactDualRangeSlider />
```

### Properties

Types
```
limits: PropTypes.arrayOf(PropTypes.number),
values: PropTypes.arrayOf(PropTypes.number),
reverse: PropTypes.bool,
formatFunc : PropTypes.func,
onChange: PropTypes.func
```

```
<ReactDualRangeSlider
limits={[0, 10]}
values={[2, 5]}
formatFunc={(v) => { return Math.round(v); }}
onChange={(values) => { console.log(values) }}
reverse={false}
/>
```

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

[MIT](http://spdx.org/licenses/MIT)
