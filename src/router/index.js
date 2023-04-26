import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const appointment = r => require.ensure([], () => r(require('@/page/appointment')), 'appointment');
const artlist = r => require.ensure([], () => r(require('@/page/artlist')), 'artlist');
const publish = r => require.ensure([], () => r(require('@/page/publish')), 'publish');
const leaveWordList = r => require.ensure([], () => r(require('@/page/leaveWordList')), 'leaveWordList');
const publishLeaveWord = r => require.ensure([], () => r(require('@/page/publishLeaveWord')), 'publishLeaveWord');
const adminUser = r => require.ensure([], () => r(require('@/page/adminUser')), 'adminUser');


const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/appointment',
			component: appointment,
			meta: ['预约', '预约入院'],
		},{
            path: '/artlist',
            component: artlist,
            meta: ['文章', '文章列表'],
        },{
            path: '/publish',
            component: publish,
            meta: ['文章', '发布文章'],
        },{
            path: '/leaveWordList',
            component: leaveWordList,
            meta: ['留言', '留言列表'],
        },{
            path: '/publishLeaveWord',
            component: publishLeaveWord,
            meta: ['留言', '发布留言'],
        },{
            path: '/adminUser',
            component: adminUser,
            meta: ['用户', '用户列表'],
        }]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
