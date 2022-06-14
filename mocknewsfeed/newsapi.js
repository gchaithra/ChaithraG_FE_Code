const express = require("express");
const app = express();
const functions = require("./api-functions")

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.listen(3001, () => {
    console.log("The awesome news API now running on port 3001");
});


/**
 * Handle collection requests
 */
app.get('/collection/:collectionid', async (req, res) => {
    const collectionID      = req.params.collectionid;
    const collectionExists  = functions.collectionExists(collectionID);
    
    if(!collectionExists) {
        res.status(400);
        res.send({
            success: false,
            error: 'Invalid collection ID'
        });

        return;
    }

    const data = await functions.getCollection(collectionID);

    if(data === false) {
        res.status(400);
        res.send({
            success: false,
            error: 'Unable to read collection'
        });
    }

    res.status(200);

    res.send({        
        success: true,
        data: data        
    });
});


/**
 * Handle collection requests without collection ID
 */
app.get('/collection', async (req, res) => {
    const data = await functions.getCollectionList();

    res.status(200);
    res.send({
        success: true,
        data: data
    });
});


/**
 * Match all other potential calls
 */
app.get('*', (req, res) => {
    res.status(400);
    res.send({
        success: false,
        error: 'Invalid action'
    });
});
