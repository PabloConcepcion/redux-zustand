import { j as jsxRuntimeExports } from './jsx-runtime-DgCD95QJ.js';
import { L as LayoutHeader } from './layoutHeader-DhnXaBnV.js';
import { createUseStyles } from 'react-jss';

var layout3ColumnsStyles = createUseStyles({
    container: {},
    leftContent: function (_a) {
        var leftSize = _a.leftSize;
        return ({
            flex: "1 1 ".concat(leftSize || "20%"),
            boxSizing: "border-box"
        });
    },
    centerContent: function (_a) {
        var centerSize = _a.centerSize;
        return ({
            flex: "1 1 ".concat(centerSize || "60%"),
            boxSizing: "border-box"
        });
    },
    rightContent: function (_a) {
        var rightSize = _a.rightSize;
        return ({
            flex: "1 1 ".concat(rightSize || "20%"),
            boxSizing: "border-box"
        });
    },
    content: {
        display: "flex",
        justifyContent: "stretch",
        alignItems: "stretch",
        flexFlow: "row nowrap",
        gap: 24,
        padding: 24,
        boxSizing: "border-box"
    }
});

var Layout3Columns = function (props) {
    var title = props.title, header = props.header, leftContent = props.leftContent, rightContent = props.rightContent, leftSize = props.leftSize, rightSize = props.rightSize, centerContent = props.centerContent, centerSize = props.centerSize;
    var styles = layout3ColumnsStyles({ rightSize: rightSize, leftSize: leftSize, centerSize: centerSize });
    return (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsxs("div", { className: styles.container, children: [jsxRuntimeExports.jsx(LayoutHeader, { title: title, header: header }), jsxRuntimeExports.jsxs("div", { className: styles.content, children: [jsxRuntimeExports.jsx("div", { className: styles.leftContent, children: leftContent }), jsxRuntimeExports.jsx("div", { className: styles.centerContent, children: centerContent }), jsxRuntimeExports.jsx("div", { className: styles.rightContent, children: rightContent })] })] }) }));
};

export { Layout3Columns as default };
