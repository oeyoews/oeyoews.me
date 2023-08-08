import { ImageResponse } from 'next/server';

// not support cn
const title = 'why blog not journal';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = title;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
          fontSize: 60,
          letterSpacing: -2,
          fontWeight: 700,
          textAlign: 'center',
          // @ts-ignore
          textWrap: 'balance',
        }}
      >
        <div
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
            backgroundClip: 'text',
            // @ts-ignore
            '-webkit-background-clip': 'text',
            color: 'transparent',
          }}
        >
          {title.toUpperCase()}
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
