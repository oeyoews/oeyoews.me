import { Suspense } from 'react';

import { OpenAIStream } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';

// Optional, but recommended: run on the edge runtime.
// See https://vercel.com/docs/concepts/functions/edge-functions
export const runtime = 'edge';

const apiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY!,
});

const openai = new OpenAIApi(apiConfig);

export default async function AISummary({ message = '总结一下人类历史' }) {
  // Request the OpenAI API for the response based on the prompt
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo-0301',
    stream: true,
    messages: [
      {
        role: 'system',
        content: message,
      },
    ],
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  const reader = stream.getReader();

  // We recursively render the stream as it comes in
  return (
    <div className="p-2 h-24 w-full bg-neutral-100">
      <Suspense>
        <Reader reader={reader} />
      </Suspense>
    </div>
  );
}

async function Reader({
  reader,
}: {
  reader: ReadableStreamDefaultReader<any>;
}) {
  const { done, value } = await reader.read();

  if (done) {
    return null;
  }

  const text = new TextDecoder().decode(value);

  return (
    <span>
      {text}
      <Suspense>
        <Reader reader={reader} />
      </Suspense>
    </span>
  );
}
