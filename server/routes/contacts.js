var express = require('express');
var router = express.Router();

var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var DATABASE = "contactless";
var CONTACTS_COLLECTION = "contacts";

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server. process.env.MONGODB_URI
mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/' + DATABASE, function(err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    // Save database object from the callback for reuse.
    db = database;
    //console.log("Database connection ready");
});

/*  "/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

router.get("/contacts", function(req, res) {
    db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get contacts.");
        } else {
            res.status(200).json(docs);
        }
    });
});

router.post("/contacts", function(req, res) {
    var newContact = req.body;
    newContact.createDate = new Date();

    if (!(req.body.firstName || req.body.lastName)) {
        handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
    }

    db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to create new contact.");
        } else {
            res.status(201).json(doc.ops[0]);
        }
    });
});

/*  "/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

router.get("/contacts/:id", function(req, res) {
    db.collection(CONTACTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to get contact");
        } else {
            res.status(200).json(doc);
        }
    });
});

router.put("/contacts/:id", function(req, res) {
    var updateDoc = req.body;
    delete updateDoc._id;

    db.collection(CONTACTS_COLLECTION).updateOne({ _id: new ObjectID(req.params.id) }, updateDoc, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to update contact");
        } else {
            res.status(204).end();
        }
    });
});

router.delete("/contacts/:id", function(req, res) {
    db.collection(CONTACTS_COLLECTION).deleteOne({ _id: new ObjectID(req.params.id) }, function(err, result) {
        if (err) {
            handleError(res, err.message, "Failed to delete contact");
        } else {
            res.status(204).end();
        }
    });
});

// Exports
module.exports = router;