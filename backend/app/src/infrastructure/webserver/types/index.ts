export * from './http';

export const HttpResponse = (msg: object | string, options: { status?: number; headers?: HeadersInit } = {}) => {
  return new Response(
    typeof msg === 'string' ? msg : JSON.stringify({ ...msg, ...{ status: options.status ?? 200 } }),
    { ...options, headers: { ...options.headers, 'Content-Type': 'application/json' } }
  );
};

export class HttpException extends Error {
  public code: number;

  constructor(msg: string, code = 500) {
    super(msg);
    this.code = code;
  }
}

export const httpException = (msg: string, code = 500) => {
  throw new HttpException(msg, code);
};
