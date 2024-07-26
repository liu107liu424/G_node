import { Request, Response, response } from 'express'
import config from '../../config';
import mysqlData from './operateSql'
export default {
  /**登录 */
  login: async (req: Request, res: Response) => {
    const { userName, password } = req.body
    mysqlData.login(userName, password).then((results: any) => {
      if (results.length > 0) {
        const token = config.token({ userName })
        results[0].token = token
        res.send({ code: 200, data: results[0] })
        return
      }
      res.send({ code: 201, data: { msg: '账号或密码有误，请重试' } })
    })
  },
  /**获取首页轮播图 */
  maxImg: async (req: Request, res: Response) => {
    const results: any = await mysqlData.maxImg()
    let obj = { code: 200, data: results }
    if (!results.length) {
      obj.code = 201;
      obj.data = '获取失败，稍后再试';
    }
    res.send(obj)
  },
  /**获取商品 */
  getGoods: async (req: Request, res: Response) => {
    const { size, page } = req.query
    const results: any = await mysqlData.getGoods(Number(size), Number(page))
    let obj = { code: 200, data: results }
    if (!results.length) {
      obj.code = 201;
      obj.data = '稍后再试';
    }
    res.send(obj)
  },
  /**获取商品详情 */
  goodsInfo: async (req: Request, res: Response) => {
    const { id } = req.query as { id: '' }
    const results: any = await mysqlData.goodsInfo(id)
    let obj = { code: 200, data: results }
    if (!results.length) {
      obj.code = 201;
      obj.data = '稍后再试';
    }
    res.send(obj)
  }

}