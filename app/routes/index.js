const Router = require('koa-router');
const user = require('./user');
const question = require('./question');
const answers = require('./answers');

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

router.post('/questions/:id/answers', answers.create);
router.get('/questions/:id/answers', answers.getAllByQuestionId);

router.get('/answers/:id', answers.getById);
router.patch('/answers/:id', answers.update);
router.delete('/answers/:id', answers.delete);

module.exports = router;
