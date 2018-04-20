const { Tag } = require('../../models');
const { removeById } = require('../common');

exports.getAll = () => Tag.all();

exports.create = name => Tag.create({ name });

exports.remove = id => removeById(Tag, id);
