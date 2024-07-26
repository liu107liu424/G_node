import express from "express";
const router = express.Router(); // 2. 创建路由对象
import api from './api'

router.post('/addMaxImg', api.addMaxImg)
router.post('/addGoods', api.addGoods)
router.post('/setGoods', api.setGoods)
router.post('/setMaxImg', api.setMaxImg)

export default router
