export interface LoginUserData {
  email: string;
  password: string;
}

type RequestStatuses = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface UserState {
  loginUserStatus: RequestStatuses;
  loginUserError?: string;
  verifyTokenStatus: RequestStatuses;
  verifyTokenError?: string;
  token?: string;
}
