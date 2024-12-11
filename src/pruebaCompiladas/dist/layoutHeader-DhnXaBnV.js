import { j as jsxRuntimeExports } from './jsx-runtime-DgCD95QJ.js';
import { createUseStyles } from 'react-jss';

var layoutHeaderStyles = createUseStyles({
    header: {
        fontSize: 40,
        lineHeight: "48px",
        fontWeight: 700,
        color: "#282828",
        padding: "48px 24px 0px 24px",
    },
    title: {
        paddingBottom: "24px",
        borderBottom: "4px solid #F2F2F2",
    },
});

var LayoutHeader = function (_a) {
    var title = _a.title, header = _a.header;
    var styles = layoutHeaderStyles();
    if (header) {
        return header;
    }
    if (!title)
        return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
    return jsxRuntimeExports.jsx("header", { className: styles.header, children: jsxRuntimeExports.jsx("div", { className: styles.title, children: title }) });
};

export { LayoutHeader as L };
