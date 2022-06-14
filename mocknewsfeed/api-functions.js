const fs = require("fs");
const asyncfs = require("fs").promises;

module.exports = {
    collectionExists: function (collectionId) {
        if(!collectionId)
            return false;

        return fs.existsSync(`./collection/${collectionId}`);
    },

    getCollection: async function (collectionId) {
        const binary = await asyncfs.readFile(`./collection/${collectionId}/data.json`);
        return JSON.parse(binary);
    },

    getCollectionList: async function () {
        const binary = await asyncfs.readFile(`./collection/index.json`);
        return JSON.parse(binary);
    }
}