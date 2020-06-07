import {IUseCase} from '../../Common/DomainTypes'
import {TweetListValueObjectJSON, TweetListValueObject} from '../ValueObjects/TweetListValueObject'
import {TweetsRepository} from '../Repositories/TweetsRepository' 


export interface GetFavoritesParamsJSON {
  username: string;
  count: number;
}

export class GetFavoritesTweetsUseCase implements IUseCase<TweetListValueObjectJSON, GetFavoritesParamsJSON> {

  constructor(public repository: TweetsRepository) {
  }

  async execute(params: GetFavoritesParamsJSON) {
    console.log(params)
    const list: TweetListValueObject = await this.repository.favorites()
    return list.toJSON()
  }

}
