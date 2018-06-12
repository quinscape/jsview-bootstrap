# JsView Bootstrap

Application bootstrap for [spring-jsview](https://intern.quinscape.de/bitbucket/projects/XCD/repos/spring-jsview/browse)

## Usage

```js
    import bootstrap from "jsview-bootstrap"

    bootstrap( data => <App initial={ data } />)
```

bootstrap(render, cb)

The bootstrap module calls the `render` function with the jsview initial data payload and the render function returns the initial application component hierarchy.

The optional second function is called when the initial rendering has finished.
