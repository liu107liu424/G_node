
import db from '../db'
interface MaxImgValue {
  goodsId?: string;
  url?: string;
}
export default {
  /**添加商品 */
  addGoods: async (Array: Array<String>) => {
    const inSql = `INSERT INTO goods (goodsId,goodsName,type,class,brand,coverImg,coverlist,infoimg) VALUE (?,?,?,?,?,?,?,?)`
    return await db(inSql, Array)
  },
  /**修改商品 */
  setGoods: async (data: any) => {
    let upSql = `UPDATE goods SET `
    const WHERE = ` WHERE goodsId =${data.goodsId}`
    delete data.goodsId
    let arr = []
    for (let i in data) {
      upSql += `${i} =?,`
      arr.push(data[i])
    }
    upSql += WHERE
    upSql = upSql.replace(", WHERE", " WHERE")
    return await db(upSql, arr)
  },
  /**添加轮播图 */
  addMaxImg: async (url: string, id: string) => {
    const seleSql = `INSERT INTO maximg SET url=?, goodsId=?`
    return await db(seleSql, [url, id || null])
  },

  /**修改轮播图 */
  setMaxImg: async (val: MaxImgValue, id: string) => {
    let Upsql = 'UPDATE maximg SET '
    const where = ` WHERE id=${id}`
    Object.keys(val).forEach((key) => {
      if ((val as any)[key]) Upsql += `${key}='${(val as any)[key]}',`
    })
    Upsql = Upsql.slice(0, -1) + where
    return await db(Upsql)
  },
  /**删除轮播图 */
  deleMaxImg: async (req: Request) => {
    const seleSql = `INSERT INTO maximg SET url=?, goodsId=?`
    return await db(seleSql)
  }
}

