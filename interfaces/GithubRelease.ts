export interface GhRelease {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  id: number;
  author: Author;
  node_id: string;
  tag_name: string;
  target_commitish: TargetCommitish;
  name: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  assets: Asset[];
  tarball_url: string;
  zipball_url: string;
  body: string;
  reactions?: Reactions;
}

export interface Asset {
  url: string;
  id: number;
  node_id: string;
  name: string;
  label: null;
  uploader: Author;
  content_type: string;
  state: string;
  size: number;
  download_count: number;
  created_at: string;
  updated_at: string;
  browser_download_url: string;
}

export interface Author {
  login: Login;
  id: number;
  node_id: NodeID;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: FollowingURL;
  gists_url: GistsURL;
  starred_url: StarredURL;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: EventsURL;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
}

export enum EventsURL {
  HTTPSAPIGithubCOMUsersBastiaoEventsPrivacy = 'https://api.github.com/users/bastiao/events{/privacy}'
}

export enum FollowingURL {
  HTTPSAPIGithubCOMUsersBastiaoFollowingOtherUser = 'https://api.github.com/users/bastiao/following{/other_user}'
}

export enum GistsURL {
  HTTPSAPIGithubCOMUsersBastiaoGistsGistID = 'https://api.github.com/users/bastiao/gists{/gist_id}'
}

export enum Login {
  Bastiao = 'bastiao'
}

export enum NodeID {
  MDQ6VXNlcjExMDg3Mw = 'MDQ6VXNlcjExMDg3Mw=='
}

export enum StarredURL {
  HTTPSAPIGithubCOMUsersBastiaoStarredOwnerRepo = 'https://api.github.com/users/bastiao/starred{/owner}{/repo}'
}

export enum Type {
  User = 'User'
}

export interface Reactions {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export enum TargetCommitish {
  Dev = 'dev',
  Master = 'master',
  Release2X = 'release/2.X',
  Releases25X = 'releases/2.5.X',
  Releases3X = 'releases/3.X'
}
