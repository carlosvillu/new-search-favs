import {TweetsEntitiesFactory} from '../Entities/factory'
import {TweetListValueObject, TweetListValueObjectJSON} from './TweetListValueObject'


export class TweetsValueObjectsFactory {
  static tweetList({tweets}: TweetListValueObjectJSON): TweetListValueObject {
    return new TweetListValueObject(tweets.map(TweetsEntitiesFactory.tweetEntity))
  }
}
