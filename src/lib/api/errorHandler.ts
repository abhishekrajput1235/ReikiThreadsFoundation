import { NextResponse } from 'next/server';

export class ApiError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

export function handleError(error: unknown) {
  console.error('API Error:', error);

  if (error instanceof ApiError) {
    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode }
    );
  }

  if (error instanceof SyntaxError) {
    return NextResponse.json(
      { error: 'Invalid JSON' },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { error: 'Internal server error' },
    { status: 500 }
  );
}

export function apiResponse<T>(data: T, statusCode = 200) {
  return NextResponse.json(data, { status: statusCode });
}

export function apiError(message: string, statusCode = 400) {
  return NextResponse.json({ error: message }, { status: statusCode });
}
