"use strict";
var Im = require('./models/im');

module.exports = function(app) {

	app.get('/api/ims', function(req, res) {

		Im.find(function(err, ims) {

			if (err) {
				res.send(err);
            }

            res.json(ims);
		});
	});

	app.post('/api/ims', function(req, res) {

		Im.create({
			text : req.body.text,
			done : false
		}, function(err, im) {
			if (err) {
				res.send(err);
            }

			Im.find(function(err, ims) {
				if (err) {
					res.send(err);
                }

                res.json(ims);
			});
		});

	});

	app.delete('/api/ims/:im_id', function(req, res) {

        Im.remove({
			_id : req.params.im_id
		}, function(err, im) {
			if (err) {
				res.send(err);
            }

            Im.find(function(err, ims) {
				if (err) {
					res.send(err);
                }

				res.json(ims);
			});
		});
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};