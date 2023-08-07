class Order {
  constructor(data) {
    this.priority = data.priority;
    // 나머지 생략
  }
}

// client
highPriorityCount = orders.filter(
  (o) => 'high' === o.priority || 'rush' === o.priority
).length;