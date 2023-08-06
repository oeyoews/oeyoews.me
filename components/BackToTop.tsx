'use client';

import { useEffect, useState } from 'react';
import { AiOutlineVerticalAlignTop } from 'react-icons/ai';

import { Button } from './ui/button';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 监听页面滚动事件
  const handleScroll = () => {
    // 判断用户是否已滚动到指定阈值（例如200px），来决定 Back to Top 按钮是否显示
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 添加滚动事件监听器
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 返回页面顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 可选：平滑滚动效果
    });
  };

  return (
    <div className={`${isVisible ? 'show' : 'hide'} fixed bottom-4 right-4`}>
      <Button onClick={scrollToTop} variant="secondary">
        <AiOutlineVerticalAlignTop className="" />
      </Button>
    </div>
  );
};

export default BackToTop;
