import { jsx as _jsx } from "react/jsx-runtime";
import { Inter } from "next/font/google";
import "./globals.css";
var inter = Inter({ subsets: ["latin"] });
export var metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};
export default function RootLayout(_a) {
    var children = _a.children;
    return (_jsx("html", { lang: "en", children: _jsx("body", { className: inter.className, children: children }) }));
}
//# sourceMappingURL=layout.js.map