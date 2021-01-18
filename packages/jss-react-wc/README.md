## CSS Modules

CSS Modules solves the problem with scope but still requires a static CSS and `<style src>` tag to inject the css into the shadow. It works, but ads complexity. It makes more sense when refactoring some older tools that has a lot of old css.

Not sure how to use this in dev mode since style-loader inject the css in the head on dev. But for a prod version the css would be output:ed and injected via tags.

## JSS

JSS is a hardcore JS to CSS. Not much tooling around it, does not solve how to load excisting css files into JS.
