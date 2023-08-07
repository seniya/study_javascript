class Order {
  constructor(data) {
    this._priority = data.priority;
    // 나머지 생략
  }
  get priorityString() {
    return this._priority.toString();
  }
  get priority() {
    return this._priority;
  }
  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) {
      this._value = value;
    } else {
      throw new Error(`<${value}>는 유효하지 않은 우선순위입니다.`);
    }
  }

  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }  

  get _index() {
    return Priority.legalValues().findIndex((s) => s === this._value);
  }

  toString() {
    return this._value
  }

  equals(other) {
    this._index === other._index;
  }

  higherThan(other) {
    return this._index > other._index;
  }

  lowerThan(other) {
    return this._index < other._index;
  }

  
}

highPriorityCount = orders.filter(
  (o) => 'high' === o.priorityString || 'rush' === o.priorityString
).length;

highPriorityCount = orders.filter(o => o.priority.higherThan(new Priority("normal"))).length