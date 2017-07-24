var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var publicRoutes = require("./routes/public")
var contactsRoutes = require("./routes/contacts")



var app = express();
app.use(express.static("../client/"));
app.use(bodyParser.json());



// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port http://localhost:" + port);
});

// CONTACTS API ROUTES BELOW


// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

// Routes
app.use('/', publicRoutes);
app.use('/api', contactsRoutes);

/*  "/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

// app.get("/contacts", function(req, res) {
//     db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
//         if (err) {
//             handleError(res, err.message, "Failed to get contacts.");
//         } else {
//             res.status(200).json(docs);
//         }
//     });
// });

// app.post("/contacts", function(req, res) {
//     var newContact = req.body;
//     newContact.createDate = new Date();

//     if (!(req.body.firstName || req.body.lastName)) {
//         handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
//     }

//     db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc) {
//         if (err) {
//             handleError(res, err.message, "Failed to create new contact.");
//         } else {
//             res.status(201).json(doc.ops[0]);
//         }
//     });
// });

// /*  "/contacts/:id"
//  *    GET: find contact by id
//  *    PUT: update contact by id
//  *    DELETE: deletes contact by id
//  */

// app.get("/contacts/:id", function(req, res) {
//     db.collection(CONTACTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
//         if (err) {
//             handleError(res, err.message, "Failed to get contact");
//         } else {
//             res.status(200).json(doc);
//         }
//     });
// });

// app.put("/contacts/:id", function(req, res) {
//     var updateDoc = req.body;
//     delete updateDoc._id;

//     db.collection(CONTACTS_COLLECTION).updateOne({ _id: new ObjectID(req.params.id) }, updateDoc, function(err, doc) {
//         if (err) {
//             handleError(res, err.message, "Failed to update contact");
//         } else {
//             res.status(204).end();
//         }
//     });
// });

// app.delete("/contacts/:id", function(req, res) {
//     db.collection(CONTACTS_COLLECTION).deleteOne({ _id: new ObjectID(req.params.id) }, function(err, result) {
//         if (err) {
//             handleError(res, err.message, "Failed to delete contact");
//         } else {
//             res.status(204).end();
//         }
//     });
// });