/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import connectDB from '@/utils/database'
import { UserModel } from '@/utils/schemaModels'
import type { NextApiResponse } from 'next'
import type {
  ExtendedNextApiRequestUser,
  ResMessageType
} from '@/utils/types'

const registerUser = async (
  req: ExtendedNextApiRequestUser,
  res: NextApiResponse<ResMessageType>
): Promise<any> => {
  try {
    console.log(req.body)
    await connectDB()
    await UserModel.create(req.body)
    return res
      .status(200)
      .json({ message: 'ユーザー登録成功' })
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'ユーザー登録失敗' })
  }
}

export default registerUser
