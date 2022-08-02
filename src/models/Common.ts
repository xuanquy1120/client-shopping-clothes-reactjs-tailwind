export interface APIResponse<Type = any> {
  message: string;
  statusCode: number;
  success: true;
  results: Type;
}
