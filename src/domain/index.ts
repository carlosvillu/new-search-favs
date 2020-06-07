import {IUseCase} from './Common/DomainTypes'

import {TweetsUseCasesFactory} from './tweets/UseCases/factory'
import {GetFavoritesTweetsUseCase} from './tweets/UseCases/GetFavoritesTweetsUseCase'


class NullUseCase implements IUseCase<void, void> {
  execute() {return Promise.resolve()}
}

type Executor = GetFavoritesTweetsUseCase

const useCases: {
  [val: string]: Executor
} = {
  'getFavoritesTweetsUseCase': TweetsUseCasesFactory.getFavoritesUseCase()
}

export class Domain {
  get(name: string): Executor {
    if(useCases[name]){
      return useCases[name]
    }

    return new NullUseCase()
  }
}
