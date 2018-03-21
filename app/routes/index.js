const Router = require('koa-router');
const question = require('./question.routes');
const user = require('./user.routes');
const tag = require('./tag.routes');

const router = new Router();

router.get('/', (ctx) => {
  ctx.body = {
    message: 'Welcome!',
  };
});

router.get('/users', user.getAll);
router.post('/register', user.postRegister);
router.post('/login', user.postLogin);

router.get('/questions/:id', question.get);
router.get('/questions', question.getAll);
router.post('/questions', question.create);

router.get('/tags/:id', tag.get);
router.get('/tags', tag.getAll);
router.post('/tags', tag.create);
router.put('/tags', tag.update);

module.exports = router;
