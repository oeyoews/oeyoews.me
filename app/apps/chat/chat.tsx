'use client';

// support textarea multi line to enter
import { useChat } from 'ai/react';
import { useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { TbBrandGithubCopilot } from 'react-icons/tb';
import ReactMarkdown from 'react-markdown';

import { CodeBlock } from '@/components/chat/CodeBlock';

import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

export default function MyComponent() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    if (
      localStorage.getItem('chat-password') !== process.env.NEXT_PUBLIC_PASSWORD
    ) {
      setIsAuthenticated(false);
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
    <div className="max-w-xl mx-auto prose dark:prose-invert">
      <h1 className="bg-gradient-to-r from-indigo-500 via-purple-300 to-red-500 bg-clip-text text-center">
        <TbBrandGithubCopilot className="mr-2 inline stroke-2 stroke-purple-400 align-middle" />
      </h1>
      <div className="m-4 flex-1 space-y-8 overflow-hidden px-1">
        {messages.map((m, index) => (
          <div key={index}>
            <div className="flex flex-row">
              <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow mr-4">
                {m.role === 'user' ? <FiUser /> : <TbBrandGithubCopilot />}{' '}
              </div>
              <div className="flex flex-col ml-2 items-center">
                <ReactMarkdown
                  className="break-words prose-p:leading-relaxed prose-pre:p-0"
                  remarkPlugins={[remarkGfm, remarkMath]}
                  components={{
                    p({ children }) {
                      return (
                        <p className="mb-2 last:mb-0 py-0 my-0 indent-0">
                          {children}
                        </p>
                      );
                    },
                    code({ node, inline, className, children, ...props }) {
                      if (children.length) {
                        if (children[0] == '▍') {
                          return (
                            <span className="mt-1 animate-pulse cursor-default">
                              ▍
                            </span>
                          );
                        }
                        children[0] = (children[0] as string).replace(
                          '`▍`',
                          '▍',
                        );
                      }

                      const match = /language-(\w+)/.exec(className || '');

                      if (inline) {
                        return (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      }

                      return (
                        <CodeBlock
                          key={Math.random()}
                          language={(match && match[1]) || ''}
                          value={String(children).replace(/\n$/, '')}
                          {...props}
                        />
                      );
                    },
                  }}
                >
                  {m.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!isAuthenticated && (
        <form
          onSubmit={handlePasswordSubmit}
          className="fixed left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 rounded"
        >
          <input
            type="password"
            onChange={handlePasswordInput}
            className="border-none p-4 rounded-md outline-none"
            placeholder="password"
          />
        </form>
      )}
      {isAuthenticated && (
        <form
          className="flex flex-row bottom-0 fixed left-1/2 -translate-x-1/2 w-4/5 lg:w-2/5 border rounded mb-4"
          onSubmit={handleSubmit}
        >
          <div className="relative flex h-full flex-1 items-stretch">
            <div className="flex flex-col w-full flex-grow relative border-none rounded-md shadow-xs">
              <input
                autoFocus
                onChange={handleInputChange}
                value={input}
                tabIndex={0}
                // rows={1}
                placeholder="Send a message"
                className="m-0 w-full resize-none border-2 p-4 pr-10 focus:ring-0 focus-visible:ring-0 outline-none border-none rounded-md dark:bg-black"
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
