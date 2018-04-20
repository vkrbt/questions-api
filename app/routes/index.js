const Router = require('koa-router');
const user = require('./user');
const question = require('./question');
const answer = require('./answer');
const tag = require('./tag');

const { Question, Answer } = require('../models');
const { checkAdminOrOwner } = require('./helpers');

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
router.patch('/questions/:id', checkAdminOrOwner(Question), question.update);
router.post('/questions/:id/upvote', question.upvote);
router.post('/questions/:id/downvote', question.downvote);
router.delete('/questions/:id', checkAdminOrOwner(Question), question.remove);

router.post('/questions/:id/answers', answer.create);
router.get('/questions/:id/answers', answer.getAllByQuestionId);

router.post('/questions/:id/add-tag', question.addTag);
router.post('/questions/:id/remove-tag', question.removeTag);

router.get('/answers/:id', answer.getById);
router.patch('/answers/:id', checkAdminOrOwner(Answer), answer.update);
router.delete('/answers/:id', checkAdminOrOwner(Answer), answer.remove);
router.post('/answers/:id/upvote', answer.upvote);
router.post('/answers/:id/doenvote', answer.downvote);

router.get('/tags/', tag.getAll);
router.post('/tags/', tag.create);

module.exports = router;
