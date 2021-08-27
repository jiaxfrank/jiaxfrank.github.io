// 测试面积计算可行性和准确性

// 以L形为例
document.getElementById('output').innerText = ''

function calArea() {
  const x = document.getElementById('x').value
  const y = document.getElementById('y').value
  const a = document.getElementById('a').value
  const b = document.getElementById('b').value
  const c = document.getElementById('c').value
  const d = document.getElementById('d').value


  if (!a || !b || !c || !d || !x || !y) {
    document.getElementById('output').innerText = `Please fill in the numbers`
  } else {
    const matArea = x * y
    const partArea = a * d + (b - d) * c

    console.log(matArea)
    console.log(partArea)

    rate = partArea / matArea
    qty = Math.ceil(rate)

    document.getElementById('output').innerText = `You need ${qty} slabs`
    console.log(`You need ${qty} slabs`)
  }
}