import { Request, Response, response } from 'express'
import mysqlData from './operateSql'
import utils from '../utils/utils';
export default {
  /**添加商品 */
  addGoods: async (req: Request, res: Response) => {
    const data = req.body
    const goodsId = await utils.goodsId()
    if (!goodsId) return res.send({ code: 201, data: '网络延迟，稍后再试' })
    const Array = [goodsId, data.goodsName, data.type, data.class, data.brand, data.coverImg, JSON.stringify(data.coverlist), JSON.stringify(data.infoimg)]
    const results: any = await mysqlData.addGoods(Array)
    let obj = { code: 200, data: '添加成功' }
    if (!results.affectedRows) {
      obj.code = 201;
      obj.data = '添加失败，稍后再试';
    }
    res.send(obj)
  },
  /**修改商品 */
  setGoods: async (req: Request, res: Response) => {
    const data = req.body
    const results: any = await mysqlData.setGoods(data)
    let obj = { code: 200, data: '修改成功' }
    if (!results.affectedRows) {
      obj.code = 201;
      obj.data = '修改失败，稍后再试';
    }
    res.send(obj)
  },
  /**添加轮播图 */
  addMaxImg: async (req: Request, res: Response) => {
    const { url, goodsId } = req.body
    const results: any = await mysqlData.addMaxImg(url, goodsId)
    let obj = { code: 200, data: '添加成功' }
    if (!results.affectedRows) {
      obj.code = 201;
      obj.data = '添加失败，稍后再试';
    }
    res.send(obj)
  },
  /**修改轮播图 */
  setMaxImg: async (req: Request, res: Response) => {
    const { id, ...body } = req.body
    const results: any = await mysqlData.setMaxImg(body, id)
    let obj = { code: 200, data: '修改成功' }
    if (!results.affectedRows) {
      obj.code = 201;
      obj.data = '修改失败，稍后再试';
    }
    res.send(obj)
  },
  /**删除轮播图 */
  deleMaxImg: async (req: Request, res: Response) => {
    const { url, goodsId } = req.body
    const results: any = await mysqlData.addMaxImg(url, goodsId)
    let obj = { code: 200, data: '添加成功' }
    if (!results.affectedRows) {
      obj.code = 201;
      obj.data = '添加失败，稍后再试';
    }
    res.send(obj)
  },
}