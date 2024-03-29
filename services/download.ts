import axios from 'axios';
import APIStatus from '../interfaces/APIStatus';
import DownloadFormInterface from '../interfaces/DownloadFormInterface';
import { GhRelease } from '../interfaces/GithubRelease';

export function requestDownload(body: DownloadFormInterface, release: GhRelease): Promise<APIStatus> {
  return axios.post(`${process.env.NEXT_PUBLIC_API}/download/request`, { ...body, resource: release.tag_name });
}
