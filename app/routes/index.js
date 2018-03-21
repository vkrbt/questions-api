const Router = require('koa-router');
const user = require('./user');
const question = require('./question');

const router = new Router();

router.get('/', (ctx) => {
  ctx.body = {
    message: 'Welcome!',
  };
});
router.post('/register', user.register);
router.post('/login', user.login);
router.get('/users', user.getAll);

router.post('/questions', question.create);
router.get('/questions', question.getAll);
router.get('/questions/:id', question.getById);
router.patch('/questions/:id', question.update);

module.exports = router;
