const remove = (req, res) => {
  // exlcui o recurso
  res.send({
    success: true,
    data: 'id' + req.params.id
  })
}
const patch = (req, res) => {
  // alterar products - somente em alguns campos
  console.log(req.body)
  res.send({
    success: true,
    data: req.body
  })
}
const put = (req, res) => {
  // alterar products - troca objeto inteiro
  console.log(req.body)
  res.send({
    success: true,
    data: req.body
  })
}
const create = (req, res) => {
  console.log(req.body)
  res.send({
    success: true,
    data: req.body
  })
}
const getById = (req, res) => {
  res.send({
    name: 'Product 1'
  })
}
const getAll = (req, res) => {
  res.send({
    products: ['all products']
  })
}

module.exports = {
  remove,
  patch,
  put,
  create,
  getById,
  getAll
}
