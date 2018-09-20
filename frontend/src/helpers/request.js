const { REACT_APP_API_URL: API_URL } = process.env

const parseUrl = endpoint => (
  /^http/.test(endpoint) ? endpoint : `${API_URL}/${endpoint}`
)

const getOptions = (method, data) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  }

  if (data) {
    options.body = JSON.stringify(data)
  }

  return options
}

const fetchData = (method, url, data) =>
  fetch(parseUrl(url), getOptions(method, data))
    .then(res => res.json())

const request = url => fetchData('GET', url)
const methods = ['GET', 'POST', 'PUT', 'DELETE']

methods.forEach(method => {
  request[method.toLowerCase()] = fetchData.bind(null, method)
})

export default request
