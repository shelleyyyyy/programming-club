migrate((db) => {
  const collection = new Collection({
    "id": "zwa360rn4op6ixt",
    "created": "2023-03-08 01:10:33.804Z",
    "updated": "2023-03-08 01:10:33.804Z",
    "name": "labs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "af9budqt",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5vtfhvc8",
        "name": "tags",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "vgoivyoz",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "yeoypsot",
        "name": "github",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "7rt2qhz5",
        "name": "img",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zwa360rn4op6ixt");

  return dao.deleteCollection(collection);
})
