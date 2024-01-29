"use strict";
const TextNode = {
    value: "three",
    next: {
        value: "six",
    },
};
const createLink = (value) => {
    return {
        value,
    };
};
const stringNode = createLink("h1");
const anotherNode = createLink(10);
