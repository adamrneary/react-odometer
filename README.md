# react-odometer

A simple React component to insert Hubspot's Odometer

## I added no value

To be clear, I just dropped the code into a repo we can require easily. I (Adam
Neary) didn't add any value whatsoever.

Check out [https://github.com/HubSpot/odometer] for the valuable code.

## Getting started

Install via npm:

```bash
npm install --save react-odometer
```

Then simply require and pass a value.

```coffee
React.createElement(OdometerComponent, value: @state.data)
```

Note: I have not yet managed to get the core Odometer library to place nicely
with Browserify, so I have been including the original script as-is.
```html
<script src='odometer.js'></script>
```
