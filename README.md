# JsView Bootstrap

Application bootstrap for [spring-jsview](https://github.com/quinscape/spring-jsview)

## Usage

```js
    import bootstrap from "jsview-bootstrap"

    bootstrap( data => <App initial={ data } />)
```

bootstrap(render, cb)

The bootstrap module calls the `render` function with the jsview initial data payload and the render function returns the initial application element hierarchy. It can also
return a promise resolving to a react element hierarchy.

The optional second function is called when the initial rendering has finished.
