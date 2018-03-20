const Router = require('koa-router');
const question = require('./controllers/question/question.routes');
const user = require('./controllers/user/user.routes');
const tag = require('./controllers/tag/tag.routes');

const router = new Router();

router.get('/', (ctx) => {
  ctx.body = {
    message: 'Welcome!',
  };
});

router.get('/users', user.getAll);
router.post('/register', user.postRegister);
router.post('/login', user.postLogin);

router.get('/questions', question.getAll);
router.post('/questions', question.create);

router.get('/tags', tag.getAll);
router.get('/tags/:id', tag.get);
router.post('/tags', tag.create);

module.exports = router;
