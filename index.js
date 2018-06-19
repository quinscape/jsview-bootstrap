var React = require("react")
var render = require("react-dom").render;
var domready = require("domready")

/**
 * Bootstrap function that mounts a react element on a node #root
 *
 * @param {function} renderFn render function
 * @param {function} cb     callback to call after rendering
 */
module.exports = function (renderFn, cb) {
    domready(
        function () {
            const elem = document.getElementById("root-data");
            const data = !!elem && JSON.parse(elem.innerHTML);

            Promise.resolve(renderFn(data)).then(function (element) {

                if (element !== false && !React.isValidElement(element))
                {
                    throw new Error("Render function returned no React Element, but " + element);
                }

                render(
                    element,
                    document.getElementById("root"),
                    cb
                );
            });
        }
    );
}
