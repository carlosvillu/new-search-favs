import {ValueObject} from '../../Common/DomainTypes'
import {TweetEntityJSON, TweetEntity} from '../Entities/TweetEntity'

export type TweetListValueObjectJSON = {
  tweets: TweetEntityJSON[]
}

export class TweetListValueObject implements ValueObject<TweetListValueObjectJSON>{
  constructor(public tweets: TweetEntity[]) {
  }

  toJSON(): TweetListValueObjectJSON{
    return {tweets: this.tweets.map(tweet => tweet.toJSON())}
  }
}
