import { NextResponse } from 'next/server';

import { kv } from '@vercel/kv';

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const user = searchParams.get('user');
  // if (!user) return NextResponse.json({ message: 'No params' });
  let originalUser;
  originalUser = await kv.incr('oeyoews');
  // if (user === 'oeyoews') {
  //   originalUser = await kv.incr(user);
  // } else {
  //   originalUser = 'The user is not found';
  // }
  return NextResponse.json({ oeyoews: { quantity: originalUser } });
}
