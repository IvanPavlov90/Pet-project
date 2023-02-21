"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("../../style/components/_Header.scss");
var Search_1 = require("../Search/Search");
var Header = function () {
    return (React.createElement("header", null,
        React.createElement("div", { className: "d-flex justify-content-between" },
            React.createElement("ul", { className: "list-group list-group-horizontal justify-content-between info-list" },
                React.createElement("li", { className: "list-group-item flex-fill info-list__item" }, "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"),
                React.createElement("li", { className: "list-group-item flex-fill info-list__item" }, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"),
                React.createElement("li", { className: "list-group-item flex-fill info-list__item" }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438"),
                React.createElement("li", { className: "list-group-item flex-fill info-list__item" }, "\u0410\u043A\u0446\u0438\u0438"),
                React.createElement("li", { className: "list-group-item flex-fill info-list__item" }, "\u0423\u0441\u043B\u0443\u0433\u0438")),
            React.createElement("button", { type: "button", className: "btn btn-primary info-btn" }, "\u0412\u043E\u0439\u0442\u0438")),
        React.createElement("div", { className: "d-flex justify-content-between" },
            React.createElement("button", { type: "button", className: "btn btn-success catalog-btn" }, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433"),
            React.createElement(Search_1.default, null),
            React.createElement("img", { src: "/img/icons/basket.png", alt: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430", className: "basket-img" }),
            React.createElement("div", { className: "d-flex flex-column" },
                React.createElement("span", null, "\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u043A\u0443\u043F\u043E\u043A"),
                React.createElement("span", null, "0 \u0440\u0443\u0431.")))));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map