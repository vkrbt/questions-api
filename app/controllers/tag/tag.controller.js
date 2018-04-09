const { Tag } = require('../../models');

exports.getAll = () => Tag.all();

exports.create = (name) => Tag.create({name});
