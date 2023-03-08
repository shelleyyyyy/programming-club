migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tb9l6zpw3wuxhg6")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tb9l6zpw3wuxhg6")

  collection.listRule = null

  return dao.saveCollection(collection)
})
