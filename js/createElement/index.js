"use strict";
exports.__esModule = true;
// Transforma um JsonTemplate em um HTMLElement
function createElement(element) {
    var _a;
    var _b, _c, _d;
    if (element instanceof HTMLElement) {
        return element;
    }
    else {
        var tagName = element.tag;
        var attributes = (_b = element === null || element === void 0 ? void 0 : element.attributes) !== null && _b !== void 0 ? _b : {};
        var events = (_c = element === null || element === void 0 ? void 0 : element.events) !== null && _c !== void 0 ? _c : {};
        var classes = element === null || element === void 0 ? void 0 : element.classes;
        var children = (_d = element === null || element === void 0 ? void 0 : element.children) !== null && _d !== void 0 ? _d : [];
        // Constrói os filhos de maneira recursiva
        var $children = children.map(function (child) {
            if (typeof child === 'string') {
                return child;
            }
            else {
                return createElement(child);
            }
        });
        var $element = document.createElement(tagName);
        for (var attrName in attributes)
            $element.setAttribute(attrName, attributes[attrName]);
        for (var eventName in events) {
            $element.addEventListener(eventName, events[eventName]);
        }
        classes && (_a = $element.classList).add.apply(_a, classes);
        $element.append.apply($element, $children);
        return $element;
    }
}
exports["default"] = createElement;