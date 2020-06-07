import {Entity} from '../../Common/DomainTypes'

export type TweetEntityJSON = {
  body: string;
  date: Date
} 

export class TweetEntity implements Entity<TweetEntityJSON> {
  constructor(public tweet: TweetEntityJSON){}

  isEqual(other: TweetEntity):boolean {
    return this.tweet.body === other.tweet.body
  }

  toJSON(): TweetEntityJSON{
    return this.tweet
  }
}
