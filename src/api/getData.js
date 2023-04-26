import fetch from '@/config/fetch'


export const list = () => fetch('/index/article/artList', 'GET');


