import { NextResponse } from 'next/server';

import { kv } from '@vercel/kv';

// if no params, on dev is normal, but on prod is original value, if have params, all will be worked weired ???
// but if have params, in frond to fetch is failed, only no params is worked
export async function GET(request: Request) {
  // const originalUser = await kv.incr('oeyoews');
  // const d = originalUser;

  const { searchParams } = new URL(request.url);
  const user = searchParams.get('user');
  if (!user) return NextResponse.json({ message: 'No params' });
  let originalUser;
  if (user === 'oeyoews') {
    originalUser = await kv.incr(user);
  } else {
    originalUser = 'The user is not found';
  }
  return NextResponse.json({ oeyoews: { quantity: originalUser } });
}
