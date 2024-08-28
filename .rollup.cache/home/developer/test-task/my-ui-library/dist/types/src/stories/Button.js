import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './button.css';
/**
 * Primary UI component for user interaction
 */
export var Button = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, backgroundColor = _a.backgroundColor, label = _a.label, props = __rest(_a, ["primary", "size", "backgroundColor", "label"]);
    var mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (_jsxs("button", __assign({ type: "button", className: ['storybook-button', "storybook-button--".concat(size), mode].join(' ') }, props, { children: [label, _jsx("style", { jsx: true, children: "\n        button {\n          background-color: ".concat(backgroundColor, ";\n        }\n      ") })] })));
};
//# sourceMappingURL=Button.js.map