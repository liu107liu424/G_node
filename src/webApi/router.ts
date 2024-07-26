import express from "express";
const router = express.Router(); // 2. 创建路由对象
import api from './api'

router.post('/api/login', api.login)
router.get('/api/maxImg', api.maxImg)
router.get('/api/getGoods', api.getGoods)
router.get('/api/goodsInfo', api.goodsInfo)

export default router
