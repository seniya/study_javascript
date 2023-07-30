import createStatementData from './createStatementData.js'

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
  return renderHtml(createStatementData(invoice, plays))
} 

function renderPlainText(data) {
  
  let result = `청구 내역 (고객명: ${data.customer})\n`
  for (let perf of data.performances) {
    result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience})석\n`
  }

  result += `총액: ${usd(data.totalAmount)}\n`
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`
  return result    
}

function renderHtml(data) {
  let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`
  result += '<table>\n'
  result += '<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>\n'

  for (let perf of data.performances) {
    result += '<tr>'
    result += `<td>${perf.play.name}</td><td>(${perf.audience})석</td>`
    result += `<td>${usd(perf.amount)}</td>`
    result += '</tr>\n'
  }

  result += '</table>\n'
  result += `<p>총액: ${usd(data.totalAmount)}</p>\n`
  result += `<p>적립 포인트: ${data.totalVolumeCredits}점</p>\n`

  return result
}

function usd(aNumber) {
  return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2}).format(aNumber/100)
}


const statementResult = statement(invoices[0], plays)
console.log(statementResult)