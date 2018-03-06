const Router = require('koa-router');
const question = require('./question');
const user = require('./user');

const router = new Router();

router.get('/users', user.getAll);
router.post('/register', user.postRegister);
router.post('/login', user.postLogin);

router.get('/questions', question.getAll);
router.post('/questions', question.create);

module.exports = router;
