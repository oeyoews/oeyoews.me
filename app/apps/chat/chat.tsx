'use client';

import { useChat } from 'ai/react';
import { useEffect, useState } from 'react';
import { TbBrandGithubCopilot } from 'react-icons/tb';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import remarkGfm from 'remark-gfm';

export default function MyComponent() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (
      localStorage.getItem('chat-password') === process.env.NEXT_PUBLIC_PASSWORD
    ) {
      setIsAuthenticated(true);
    }
  }, []);
  const handlePasswordSubmit = (e: any) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('chat-password', password);
    } else {
      alert(`密码错误 ${password}`);
    }
  };
  const handlePasswordInput = (event: any) => {
    setPassword(event.target.value);
  };

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  return (
    <div className="max-w-xl mx-auto m-2 prose">
      <h1 className="bg-gradient-to-r from-indigo-500 via-purple-300 to-red-500 bg-clip-text text-transparent text-center">
        <TbBrandGithubCopilot className="mr-2 inline stroke-2 stroke-purple-400 align-middle" />
      </h1>
      <ul className="list-none mb-32">
        {messages.map((m, index) => (
          <li key={index} className="m-2 bg-neutral-100 p-4 rounded-md">
            <div className="inline">
              {m.role === 'user' ? 'User: ' : `AI: `}{' '}
              <ReactMarkdown
                // components={{
                //   code({ node, inline, className, children, ...props }) {
                //     const match = /language-(\w+)/.exec(className || '');
                //     return !inline && match ? (
                //       <SyntaxHighlighter
                //         {...props}
                //         // @ts-ignore
                //         children={String(children).replace(/\n$/, '')}
                //         style={oneDark}
                //         language={match[1]}
                //         PreTag="div"
                //       />
                //     ) : (
                //       <code {...props} className={className}>
                //         {children}
                //       </code>
                //     );
                //   },
                // }}
                className="inline-block"
                remarkPlugins={[remarkGfm]}
              >
                {m.content}
              </ReactMarkdown>
            </div>
          </li>
        ))}
      </ul>
      {!isAuthenticated && (
        <form
          onSubmit={handlePasswordSubmit}
          className="fixed left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2"
        >
          <input
            type="password"
            onChange={handlePasswordInput}
            className="border-none bg-neutral-100 p-4 rounded outline-none"
            placeholder="password"
          />
        </form>
      )}
      {isAuthenticated && (
        <form
          className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl bottom-0 fixed left-1/2 -translate-x-1/2 w-4/5 lg:w-2/5"
          onSubmit={handleSubmit}
        >
          <div className="relative flex h-full flex-1 items-stretch md:flex-col">
            <div className="flex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border bg-neutral-100 border-black/10 dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-xs dark:shadow-xs">
              <input
                autoFocus
                onChange={handleInputChange}
                value={input}
                tabIndex={0}
                placeholder="Send a message"
                className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0 outline-none"
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
