export default class BinaryHeap {
  constructor() {
    this.content = [];
    this.scoreFunction = (node) => node.f;
  }

  push(el) {
    this.content.push(el);
    this.sinkDown(this.content.length - 1);
  }

  pop() {
    const result = this.content[0];
    const end = this.content.pop();

    if (this.content.length > 0) {
      this.content[0] = end;
      this.bubbleUp(0);
    }

    return result;
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
    let number = n;

    while (number > 0) {
      const parentN = parseInt((number - 1) / 2, 10);
      const parent = this.content[parentN];

      if (this.scoreFunction(element) < this.scoreFunction(parent)) {
        this.content[parentN] = element;
        this.content[number] = parent;
        number = parentN;
      } else {
        break;
      }
    }
  }

  bubbleUp(n) {
    const elLength = this.content.length;
    let number = n;
    const element = this.content[number];
    const elScore = this.scoreFunction(element);

    while (true) {
      const leftChildIdx = 2 * number + 1;
      const rightChildIdx = 2 * number + 2;
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

      this.content[number] = this.content[swap];
      this.content[swap] = element;
      number = swap;
    }
  }
}
