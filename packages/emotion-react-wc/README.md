- Webpack basic config via just-scripts (microsoft's)
- Simple webcomponent's via LitElement (shadow enabled)
- Emotion singleton via React context
- Emotion singleton in a Webcomponent

React-select does not work until they have changed to Emotion 11,
https://github.com/JedWatson/react-select/pull/4283 is done (React-select v4)

It's important that all use the same cache version. E.g. you need to set it in your yarn resolutions.

```
"resolutions": {
    "@emotion/react": "^11",
    "@emotion/cache": "^11"
  }
```

`npm install`

`npm start`
