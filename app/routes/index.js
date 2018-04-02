const Router = require('koa-router');
const user = require('./user');
const question = require('./question');

const router = new Router();

router.get('/', ctx => {
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
router.post('/questions/:id/upvote', question.upvote);
router.post('/questions/:id/downvote', question.downvote);
router.delete('/questions/:id', question.delete);

module.exports = router;
