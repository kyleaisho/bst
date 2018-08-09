const Node = require('./Node');

class Tree {
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  insertChildren(children) {
    if (!Array.isArray(children) || children.length < 1) {
      return;
    }

    children.forEach(child => this.insertNode(child, this.root));
  }

  insertNode(val, root) {
    if (!this.root) {
      this.root = new Node({ val });
      return;
    }

    if (!root) {
      root = new Node({ val });
      return;
    }

    if (val <= root.val) {
      if (!root.left) {
        root.left = new Node({ val });
      } else {
        this.insertNode(val, root.left);
      }
    } else {
      if (!root.right) {
        root.right = new Node({ val });
      } else {
        this.insertNode(val, root.right);
      }
    }
  }
}

module.exports = Tree;
