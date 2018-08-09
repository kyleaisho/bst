module.exports = {
  /**
   *
   * @param {*} root - node
   * @param {*} op - function to run on each node, console.log for instance
   */
  preorder(root, op) {
    if (!root) {
      return;
    }

    op(root);

    this.preorder(root.left, op);
    this.preorder(root.right, op);
  }
};
