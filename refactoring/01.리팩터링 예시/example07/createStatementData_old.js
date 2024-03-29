class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance
    this.play = aPlay
  }

  get amount() {
    let result = 0

    switch (this.play.type) {
      case 'tragedy': // 비극
        result = 40000
        if (this.performance.audience > 30) {
          result += 1000 * (this.performance.audience - 30)
        }
        break;
  
      case 'comedy':  // 희극
        result = 30000
        if (this.performance.audience > 20) {
          result += 1000 + 500 * (this.performance.audience - 20)
        }
        result += 300 * this.performance.audience      
        break;
    
      default:
        throw new Error('알 수 없는 장르: ${aPerformance.play.type}');
    }
    return result
  }

  get volumeCredits() {
    let volumeCredits = 0
    volumeCredits += Math.max(this.performance.audience - 30, 0)
    if ('comedy' === this.play.type) volumeCredits += Math.floor(this.performance.audience / 5)
    return volumeCredits
  }
}

export default function createStatementData(invoice, plays) {

  const statementData = {}
  statementData.customer = invoice.customer
  statementData.performances = invoice.performances.map(enrichPerformances)
  statementData.totalAmount = totalAmount(statementData)
  statementData.totalVolumeCredits = totalVolumeCredits(statementData)
  return statementData

  function enrichPerformances(aPerformance) {
    const calculator = new PerformanceCalculator(aPerformance, playFor(aPerformance))
    const result = Object.assign({}, aPerformance)
    result.play = calculator.play
    //result.amount = amountFor(result)
    result.amount = calculator.amount    
    //result.volumeCredits = volumeCreditsFor(result)
    result.volumeCredits = calculator.volumeCredits
    return result
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID]
  }

  function amountFor(aPerformance) {
    return new PerformanceCalculator(aPerformance, playFor(aPerformance)).amount
  }

  function volumeCreditsFor(aPerformance) {
    return new PerformanceCalculator(aPerformance, playFor(aPerformance)).volumeCredits
  }

  function totalAmount(data) {    
    return data.performances
    .reduce((total, p) => total + p.amount, 0)
  }
  
  function totalVolumeCredits(data) {
    return data.performances
    .reduce((total, p) => total + p.volumeCredits, 0)
  }
}