const baseurl = `https://api.github.com/repos/${process.env.GITHUB_REPO}`;

const headers = {
  Accept: 'application/vnd.github+json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
};

// https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28
export default async function getIssues(page = 1): Promise<Issue[]> {
  const response = await fetch(`${baseurl}/issues?page=${page}&per_page=30`, {
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
    // cache: 'no-store',
    next: {
      revalidate: 3600,
    },
  });
  const data = await response.json();
  return data;
}

export async function getAllIssues() {
  const issuesInfo = await getIssuesInfo();
  const issues: Issue[] = [];
  const pages = Math.ceil(issuesInfo.open_issues / 30);
  for (let i = 0; i < pages; i++) {
    issues.push(...(await getIssues(i + 1)));
  }
  return issues;
}

export async function getIssueBySlug(slug: string) {
  const issues = await getAllIssues();
  return issues.find((issue) => issue.slug === slug);
}

export async function getIssueComments(
  issueNumber: number,
): Promise<IssueComment[]> {
  const response = await fetch(`${baseurl}/issues/${issueNumber}/comments`, {
    method: 'GET',
    headers,
  });
  const data = await response.json();
  return data;
  // return data.map(({ body }: IssueComment) => body);
}
