import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

export default class User extends BaseModel {
  static accessTokens = DbAccessTokensProvider.forModel(User)
}
