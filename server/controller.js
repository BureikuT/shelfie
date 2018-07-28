module.exports = {
  
    readProducts:(req,res)=>{
    console.log('read me')
    const db = req.app.get('db')
    const { productName, imageUrl, price } = req.body
    console.log(req.body)
    db.create_product([ productName, imageUrl, price ])
      .then( product => {
        console.log(product)
        res.status(200).send(product)
      })
      .catch( () => res.status(500).send() );
  },
  createProduct: (req, res) => {
    console.log('Post')
    const db = req.app.get('db')
    const { productName, imageUrl, price } = req.body
    console.log(req.body)
    db.create_product([ productName, imageUrl, price ])
      .then( product => {
        console.log(product)
        res.status(200).send(product)
      })
      .catch( () => res.status(500).send() );
  }
}