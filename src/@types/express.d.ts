// sobescrevendo uma tipagem do express
declare namespace Express {
  // adicionando uma informação parao tipo express
  export interface Request {
    user: {
      id: string;
    };
  }
}
