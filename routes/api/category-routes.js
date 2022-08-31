const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories w/ findAll()
  // be sure to include its associated Products
  const categories = await Category.findAll({
    include: { model: Product, as: 'categoryProducts' }
  });

  res.json(categories);
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value w/ findByPk()
  // be sure to include its associated Products
  // Category.findByPk(req.params.id)
});

router.post('/', (req, res) => {
  // create a new category
  // Category.create(req.body)
  // Refer to models
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  // Category.update(req.body, {
  // where: { id: req.params.id }
  // } )
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  // Category.destroy( req.body, {
  // where: { id: req.params.id }
  // } )
});

module.exports = router;
