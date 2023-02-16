let net

async function classfication() {
  console.log('Loading mobilenet...')

  net = await mobilenet.load()
  console.log('Sucess loaded model')

  const img = document.getElementById('img')
  const result = await net.classify(img)

  const name = document.getElementById('name')
  const proba = document.getElementById('prob')
  name.innerHTML += result[0].className.substring(0, 30)
  proba.innerHTML += result[0].probability.toFixed(2) * 100 + '%'
}

classfication()
