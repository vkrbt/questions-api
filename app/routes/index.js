const Router = require('koa-router');
const user = require('./user');
const question = require('./question');
const answer = require('./answer');
const tag = require('./tag');

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
router.delete('/questions/:id', question.remove);

router.post('/questions/:id/answers', answer.create);
router.get('/questions/:id/answers', answer.getAllByQuestionId);

router.get('/answers/:id', answer.getById);
router.patch('/answers/:id', answer.update);
router.delete('/answers/:id', answer.remove);
router.post('/answers/:id/upvote', answer.upvote);
router.post('/answers/:id/doenvote', answer.downvote);

router.get('/tags/', tag.getAll);
router.post('/tags/', tag.create);

module.exports = router;
