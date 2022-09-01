const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tag = await Tag.findAll()
  res.json(tag);
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tag = await Tag.findByPk(req.params.id, {
    include: Tag
  });
  res.json(tag);
});

router.post('/', (req, res) => {
  // create a new tag
  const tag = await Tag.create(req.body);
  res.json(tag);
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  const tag = await Tag.update(req.body, {
    include: Tag
  });
  res.json(tag);
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  const tag = await Tag.destroy( req.body, {
    where: { id: req.params.id }
  });
  res.json(tag);
});

module.exports = router;
