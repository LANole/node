var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var eventData = [ {
        name: 'Event1',
        date: '2017.01.01',
        time: '12:00 PM',
        description: 'New Years Day Bowl games',
        location: {
            street: '1122 Oh Yeah Ave.',
            city: 'Footballville',
            state: 'FL',
            zip: '23777'
            },
        },
        {
        name: 'Event2',
        date: '2017.01.16',
        time: '4:00 PM',
        description: 'BDay Happy Hr & Dinner',
        location: {
            street: '3939 Funtime Rd.',
            city: 'GettingOldburg',
            state: 'CA',
            zip: '03939'
            },
        },
        {
        name: 'Event3',
        date: '2017.01.21',
        time: '12:00 PM',
        description: 'BDay Weekend Celebration BBQ & Games',
        location: {
            street: '29 Wish I Was Ln.',
            city: 'GettingOldburg',
            state: 'CA',
            zip: '03939'
            },
        },
        {
        name: 'Event4',
        date: '2017.01.22',
        time: '1:00 PM',
        description: 'BDay Hangover Lunch',
        location: {
            street: '21 AreNotAnyMore Ct.',
            city: 'BloodyMary Falls',
            state: 'CA',
            zip: '03939'
            },
        },
];



dbRouter.route('/AddEventData') 
    .get(function(req, res){
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db){
            var collection = db.collection('events');
            collection.insertMany(eventData, function(err, results){
                res.send(results);
                db.close();
            });
        });
    });


module.exports = dbRouter;
