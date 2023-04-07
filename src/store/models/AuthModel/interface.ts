export interface ILoginParams {
  username: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
  tokenType: string;
  createdAt: number;
  expiresIn: number;
  joinedAt: number;
}
