const React = require("react");
const render = require("react-dom").render;
const domready = require("domready");

/**
 * Bootstrap function that mounts a react element on a node #root
 *
 * @param {function} renderFn render function
 */
module.exports = function (renderFn) {

    return new Promise( (resolve,  reject) => {
        domready(
            function () {
                const elem = document.getElementById("root-data");
                const data = !!elem && JSON.parse(elem.innerHTML);

                Promise.resolve(renderFn(data))
                    .then( element => {

                    if (element !== false && !React.isValidElement(element))
                    {
                        throw new Error("Render function returned no  React Element, but " + element);
                    }

                    render(
                        element,
                        document.getElementById("root"),
                        resolve
                    );
                })
                .catch( reject );
            }
        );
    });
};
