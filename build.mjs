import { spawn } from 'child_process';
import ci from 'ci-info';

if (ci.isCI) {
  spawn('pnpm', ['tiged', 'oeyoews/nextjs-mdx-blog-content', 'content'], {
    stdio: 'inherit',
  }).on('close', () => {
    spawn('pnpm', ['next', 'build'], { stdio: 'inherit' });
  });
} else {
  spawn('pnpm', ['next', 'build'], { stdio: 'inherit' });
}
