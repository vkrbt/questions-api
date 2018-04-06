const { Tag } = require('../../models');

exports.create = (name) => Tag.create({name});
