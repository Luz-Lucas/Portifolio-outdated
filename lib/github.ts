interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  topics?: string[];
}

export interface GitHubProject {
  id: number;
  name: string;
  description: string;
  url: string;
  homepage: string | null;
  language: string;
  stars: number;
  forks: number;
  topics: string[];
}

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "Luz-Lucas";

export async function fetchGitHubProjects(): Promise<GitHubProject[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    return repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || "No description available yet.",
        url: repo.html_url,
        homepage: repo.homepage || null,
        language: repo.language || "Code",
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics?.slice(0, 3) ?? [],
      }));
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return [];
  }
}
