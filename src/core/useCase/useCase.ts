import { Either } from "../either";

export abstract class UseCase<Type, Params> {
  abstract call(params: Params): Promise<Either<Error, Type>>;
}

export class NoParams {}
