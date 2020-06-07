export interface IUseCase<Output, Input> {
  execute(params?: Input): Promise<Output>
}


interface BaseObject<T> {
  toJSON(): T
}

export interface ValueObject<T> extends BaseObject<T> {}
export interface Entity<T> extends BaseObject<T> {}
