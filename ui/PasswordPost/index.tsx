'use client';

import { ReactElement, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

import useStore from '~lib/store';
import { DraftSkeleton } from '~ui/Skeleton';

function PasswordProtectedContent({
  post,
  children,
}: {
  post: any;
  children: ReactElement;
}) {
  const [enteredPassword, setEnteredPassword] = useState('');

  const passwordStore = useStore();
  const metadata = post.metadata;

  const handlePasswordSubmit = () => {
    if (metadata.password === enteredPassword) {
      passwordStore.setShowContent(true);
    } else {
      // alert('密码错误');
    }
  };

  return (
    <div>
      {/* 如果其他文章输入密码, 会影响 */}
      {!metadata.password && !metadata.draft && children}
      {metadata.draft && (
        <div className="prose max-w-none absolute">
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="text-center">正在努力编写中</p>
            <DraftSkeleton />
          </div>
        </div>
      )}
      {metadata.password && !passwordStore.showContent ? (
        <form className="flex justify-center items-center" autoComplete="off">
          <label>
            <input
              type="password"
              className="input input-bordered mx-1"
              autoFocus={true}
              placeholder="password"
              onChange={(e) => setEnteredPassword(e.target.value)}
            />
          </label>
          <button onClick={handlePasswordSubmit} className="btn">
            <AiOutlineSend className="h-5 w-5" />
          </button>
        </form>
      ) : (
        <>{passwordStore.showContent && children}</>
      )}
    </div>
  );
}

export default PasswordProtectedContent;
