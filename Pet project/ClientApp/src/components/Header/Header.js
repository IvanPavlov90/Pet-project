"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
require("../../style/components/_Header.scss");
var Catalog_1 = require("../Catalog/Catalog");
var Search_1 = require("../Search/Search");
var Header = function () {
    var _a = react_1.useState({
        catalogShow: false
    }), headerState = _a[0], setHeaderState = _a[1];
    var renderCatalog = function () {
        return headerState.catalogShow ? React.createElement(Catalog_1.default, null) : null;
    };
    var renderInfoList = function () {
        var links = ["О компании", "Доставка", "Новости", "Акции", "Услуги"];
        return (React.createElement("ul", { className: "list-group list-group-horizontal justify-content-between info-list" }, links.map(function (link) { return React.createElement("li", { className: "list-group-item flex-fill info-list__item" }, link); })));
    };
    return (React.createElement("header", null,
        React.createElement("div", { className: "d-flex justify-content-between" },
            renderInfoList(),
            React.createElement("button", { type: "button", className: "btn btn-primary info-btn" }, "\u0412\u043E\u0439\u0442\u0438")),
        React.createElement("div", { className: "d-flex justify-content-between" },
            React.createElement("button", { type: "button", className: "btn btn-success catalog-btn", onClick: function () { return setHeaderState(__assign(__assign({}, headerState), { catalogShow: !headerState.catalogShow })); } }, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433"),
            React.createElement(Search_1.default, null),
            React.createElement("button", { className: "basket-btn" },
                React.createElement("span", { className: "badge badge-pill badge-success basket-counter" }, "0"),
                React.createElement("img", { src: "/img/icons/basket.png", alt: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430", className: "basket-img" })),
            React.createElement("div", { className: "d-flex flex-column basket-info" },
                React.createElement("span", null, "\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u043A\u0443\u043F\u043E\u043A"),
                React.createElement("span", null, "0 \u0440\u0443\u0431."))),
        renderCatalog()));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map