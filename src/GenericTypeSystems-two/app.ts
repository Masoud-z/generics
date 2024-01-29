type LinkedNode<T> = {
  value: T;
  next?: LinkedNode<T>;
};

const TextNode: LinkedNode<string> = {
  value: "three",
  next: {
    value: "six",
  },
};

const createLink = <T>(value: T): LinkedNode<T> => {
  return {
    value,
  };
};

const stringNode = createLink("h1");
const anotherNode = createLink(10);
