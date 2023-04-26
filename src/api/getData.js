import fetch from '@/config/fetch'

// 登录
export const login = data => fetch('/index/article/login',data, 'POST');


