export interface JwtPayload {
  id: string;
  email: string;
  role: string;
  exp?: number;
  iat?: number;
}
