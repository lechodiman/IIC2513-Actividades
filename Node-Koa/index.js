let Koa = require('koa');
let Router = require('koa-router');

let app = new Koa();
let router = new Router();

let users = [
	{
		name: 'Jacob',
		email: 'info@geeklaunch.net'
	},
	{
		name: 'Kenny',
		email: 'kenny@geeklaunch.net'
	},
	{
		name: 'Joe',
		email: 'joe@geeklaunch.net'
	}
];

// localhost:3000
router.get('/user/:id', ctx => {
	ctx.body = users[ctx.params.id];
})

router.post('/user/:id', ctx => {
	// ctx.request.body is not accesible if que do not require koa-body
	ctx.body = Object.assign(users[ctx.params.id], ctx.request.body);
})


app
	.use(router.allowedMethods())
	.use(router.routes())
	.use(require('koa-body')());

PORT = 3000
app.listen(PORT);