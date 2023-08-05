'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="prose prose-indigo mx-auto my-4 max-w-xl">
      <h1>Chat</h1>
      {messages.map((m) => (
        <div key={m.id} className="bg-neutral-100 m-2 rounded p-4">
          {m.role}: {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit} className="fixed bottom-0">
        <div className="flex flex-col w-full py-0 flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-xs dark:shadow-xs">
          <input
            // rows={1}
            tabIndex={0}
            className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0 outline-none"
            value={input}
            placeholder="Send a message"
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}
