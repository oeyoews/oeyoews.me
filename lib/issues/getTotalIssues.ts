import { create } from '../fetch';

import config from '~config';

const baseurl = `https://api.github.com/search/issues?q=repo:${config.githubRepo}+type`;

const headers = {
  Accept: 'application/vnd.github+json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
};

const fetch = create(baseurl);

export const getIssuesInfo = async (): Promise<IssueInfo> => {
  const res = await fetch({
    url: ':issue+state:closed',
    options: {
      headers,
      next: {
        revalidate: 3600
      }
    }
  });
  return await res.json();
};
