const Node = require('./Node');
const Tree = require('./Tree');
const traversal = require('./traversal');

const vals = [5, 6, 4, 7, 3, 8, 2, 9, 1, 0];

const tree = new Tree();
tree.insertChildren(vals);
traversal.preorder(tree.getRoot(), ({ val }) => console.log(`Node: ${val}`));
