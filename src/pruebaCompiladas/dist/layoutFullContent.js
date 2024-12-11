import { _ as __rest } from './_tslib-DesQcqtQ.js';
import { j as jsxRuntimeExports } from './jsx-runtime-DgCD95QJ.js';
import { L as LayoutHeader } from './layoutHeader-DhnXaBnV.js';
import { createUseStyles } from 'react-jss';

var fullWidthLayoutStyles = createUseStyles({
    content: {
        padding: 24
    },
    container: {
        boxSizing: 'border-box',
    }
});

var LayoutFullContent = function (_a) {
    var props = __rest(_a, []);
    var title = props.title, header = props.header, content = props.content;
    var styles = fullWidthLayoutStyles();
    return (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsxs("div", { className: styles.container, children: [jsxRuntimeExports.jsx(LayoutHeader, { title: title, header: header }), jsxRuntimeExports.jsx("div", { className: styles.content, children: content })] }) }));
};

export { LayoutFullContent as default };
