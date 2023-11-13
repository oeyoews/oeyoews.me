const baseurl = `https://api.github.com/repos/${process.env.GITHUB_REPO}`;

const headers = {
  Accept: 'application/vnd.github+json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
};

export default async function getIssues(): Promise<Issue[]> {
  const response = await fetch(`${baseurl}/issues`, {
    method: 'GET',
    headers,
  });
  const data = await response.json();
  return data.map((issue: Issue) => ({
    ...issue,
    date: new Date(issue.created_at),
    slug: issue.id.toString(),
  }));
}

export async function getIssuesInfo(): Promise<IssueInfo> {
  const response = await fetch(baseurl, {
    method: 'GET',
    headers,
  });
  const data = await response.json();
  return data;
}
