import { UserAuthInterceptor } from './user-auth-interceptor.interceptor';

describe('UserAuthInterceptor', () => {
  it('should be defined', () => {
    expect(new UserAuthInterceptor()).toBeDefined();
  });
});
