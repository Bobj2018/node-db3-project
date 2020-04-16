const db = require('../data/db-config.js');

function find() {
	return db('schemes');
}

function findById(id) {
	return db('schemes').where({ id }).first();
}

function findSteps(id) {
	return db('steps as t')
		.join('schemes as s', { 't.scheme_id': 's.id' })
		.where({ 't.scheme_id': id })
		.select('t.id', 't.step_number', 's.scheme_name', 't.instructions')
		.orderBy('t.step_number');
}

function add(data) {
	return db('schemes').insert(data);
}

function addStep(data, scheme_id) {
	return db('steps').insert({ ...data, scheme_id });
}

function update(data, id) {
	return db('schemes').where({ id }).update(data);
}

function remove(id) {
	return db('schemes').where({ id }).del();
}

module.exports = {
	find,
	findById,
	findSteps,
	add,
	addStep,
	update,
	remove,
};
