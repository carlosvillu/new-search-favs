import {TweetListValueObject} from '../ValueObjects/TweetListValueObject'

export abstract class TweetsRepository {
  abstract favorites(): Promise<TweetListValueObject>
}
