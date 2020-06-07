import {TweetEntity, TweetEntityJSON, } from './TweetEntity'

export class TweetsEntitiesFactory {

  static tweetEntity(tweet: TweetEntityJSON): TweetEntity {
    return new TweetEntity(tweet)
  }
}
