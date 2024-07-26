
import db from '../db'
export default {
  /**登录sql */
  login: async (name: string, password: string) => {
    const selSql = `SELECT userName,userId FROM users WHERE userName='${name}' AND password=${password}`
    return await db(selSql)
  },
  /**获取首页轮播图 */
  maxImg: async () => {
    const seleSql = `SELECT * FROM maximg`
    return await db(seleSql)
  },
  /**获取商品 */
  getGoods: async (size: number, page: number) => {
    const seleSql = `SELECT goodsName,coverImg,goodsId,type FROM goods LIMIT ? OFFSET ?`
    return await db(seleSql, [size, size * page])
  },
  /**获取商品详情 */
  goodsInfo: async (id: string) => {
    const seleSql = `SELECT * FROM goods WHERE goodsId = ?`
    return await db(seleSql, [id])
  },
} 