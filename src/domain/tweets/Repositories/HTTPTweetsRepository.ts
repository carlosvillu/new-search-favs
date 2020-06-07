import {TweetListValueObject, TweetListValueObjectJSON} from '../ValueObjects/TweetListValueObject'
import {TweetsRepository} from './TweetsRepository'

import {response} from './response'


export class HTTPTweetsRepository extends TweetsRepository {

  constructor(public tweetListFactory: (tweets: TweetListValueObjectJSON) => TweetListValueObject) {
    super()
  }

  async favorites(): Promise<TweetListValueObject> {

    const entryFactory = {tweets: response.map(entry => {return {
      date: new Date(entry.created_at),
      body: entry.text
    }})}

    return this.tweetListFactory(entryFactory)
  
  }
}
