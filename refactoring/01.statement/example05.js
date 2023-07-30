/**
 * 1.6 계산 단계와 포맷팅 단계 분리하기
 * page 52
 */
const plays = {
  'hamlet': {'name': 'Hamlet', 'type': 'tragedy'},
  'as-like': {'name': 'As you Like It', 'type': 'comedy'},
  'othello': {'name': 'Othello', 'type': 'tragedy'}
}

const invoices = [
  {
    'customer': 'BigCo',
    'performances': [
      {
        'playID': 'hamlet',
        'audience': 55
      },
      {
        'playID': 'as-like',
        'audience': 35
      },
      {
        'playID': 'othello',
        'audience': 40
      },
    ]
  }
]

function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays))
} 

function createStatementData(invoice, plays) {

  const statementData = {}
  statementData.customer = invoice.customer
  statementData.performances = invoice.performances.map(enrichPerformances)
  statementData.totalAmount = totalAmount(statementData)
  statementData.totalVolumeCredits = totalVolumeCredits(statementData)
  return statementData

  function enrichPerformances(aPerformance) {
    const result = Object.assign({}, aPerformance)
    result.play = playFor(result)
    result.amount = amountFor(result)
    result.volumeCredits = volumeCreditsFor(result)
    return result
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID]
  }

  function amountFor(aPerformance) {
    let result = 0
  
    switch (aPerformance.play.type) {
      case 'tragedy': // 비극
        result = 40000
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30)
        }
        break;
  
      case 'comedy':  // 희극
        result = 30000
        if (aPerformance.audience > 20) {
          result += 1000 + 500 * (aPerformance.audience - 20)
        }
        result += 300 * aPerformance.audience      
        break;
    
      default:
        throw new Error('알 수 없는 장르: ${aPerformance.play.type}')
        break;
    }
    return result
  }

  function volumeCreditsFor(aPerformance) {
    let volumeCredits = 0
    volumeCredits += Math.max(aPerformance.audience - 30, 0)
    if ('comedy' === aPerformance.play.type) volumeCredits += Math.floor(aPerformance.audience / 5)
    return volumeCredits
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

function renderPlainText(data, plays) {
  
  let result = `청구 내역 (고객명: ${data.customer})\n`
  for (let perf of data.performances) {
    result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience})석\n`
  }

  result += `총액: ${usd(data.totalAmount)}\n`
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`
  return result
  
  function usd(aNumber) {
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2}).format(aNumber/100)
  }
    
}

const statementResult = statement(invoices[0], plays)
console.log(statementResult)