import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// export function userAuth(req: Request, res: Response, next: NextFunction) {
//   const ua = req.headers['user-agent'];

//   req['ua'] = ua;
//   req.body = 'authToken';
//   next();
// }

export class userAuth implements NestMiddleware {
  use(req: Request, res: Response, nest: NextFunction) {
    req.body.authToken = 'dd ';
    nest();
  }
}
