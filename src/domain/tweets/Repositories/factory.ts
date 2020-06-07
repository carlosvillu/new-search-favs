import {TweetsValueObjectsFactory} from '../ValueObjects/factory'
import {HTTPTweetsRepository} from './HTTPTweetsRepository'

export class TweetsRepositoriesFactory {
  static httpTweetRepository(): HTTPTweetsRepository{
    return new HTTPTweetsRepository(TweetsValueObjectsFactory.tweetList)
  }
}
