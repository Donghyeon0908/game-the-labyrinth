class BinaryHeap {
  constructor() {
    this.content = [];
    this.scoreFunction = (node) => node.f;
  }

  push(el) {
    this.content.push(el);
    this.sinkDown(this.content.length - 1);
  }

  pop() {
    const min = this.content[0];
    const end = this.content.pop();

    if (this.content.length > 0) {
      this.content[0] = end;
      this.bubbleUp(0);
    }

    return min;
  }

  remove(node) {
    const idx = this.content.indexOf(node);
    const end = this.content.pop();

    if (idx !== this.content.length - 1) {
      this.content[idx] = end;

      this.scoreFunction(end) < this.scoreFunction(node)
        ? this.sinkDown(idx)
        : this.bubbleUp(idx);
    }
  }

  size() {
    return this.content.length;
  }

  rescoreElement(node) {
    this.sinkDown(this.content.indexOf(node));
  }

  sinkDown(n) {
    const element = this.content[n];
    let idx = n;

    while (idx > 0) {
      const parentIdx = parseInt((idx - 1) / 2, 10);
      const parent = this.content[parentIdx];

      if (this.scoreFunction(element) < this.scoreFunction(parent)) {
        this.content[parentIdx] = element;
        this.content[idx] = parent;
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  bubbleUp(n) {
    const elLength = this.content.length;
    let idx = n;
    const element = this.content[idx];
    const elScore = this.scoreFunction(element);

    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChildScore;
      let swap = null;

      if (leftChildIdx < elLength) {
        const leftChild = this.content[leftChildIdx];
        leftChildScore = this.scoreFunction(leftChild);

        if (leftChildScore < elScore) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < elLength) {
        const rightChild = this.content[rightChildIdx];
        const rightChildScore = this.scoreFunction(rightChild);
        if (rightChildScore < (swap === null ? elScore : leftChildScore)) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.content[idx] = this.content[swap];
      this.content[swap] = element;
      idx = swap;
    }
  }
}

export default BinaryHeap;
