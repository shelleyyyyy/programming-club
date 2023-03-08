migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h2o1chdwcmaszmv")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h2o1chdwcmaszmv")

  collection.listRule = null

  return dao.saveCollection(collection)
})
