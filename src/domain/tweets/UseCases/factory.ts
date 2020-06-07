import {TweetsRepositoriesFactory} from '../Repositories/factory'


import {GetFavoritesTweetsUseCase} from './GetFavoritesTweetsUseCase'

export class TweetsUseCasesFactory {
  static getFavoritesUseCase(): GetFavoritesTweetsUseCase {
    return new GetFavoritesTweetsUseCase(TweetsRepositoriesFactory.httpTweetRepository())
  }
}
