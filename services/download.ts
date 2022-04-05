import axios from 'axios';
import APIStatus from '../interfaces/APIStatus';
import DownloadFormInterface from '../interfaces/DownloadFormInterface';
import Release from '../interfaces/GithubRelease';

export function requestDownload(body: DownloadFormInterface, release: Release): Promise<APIStatus> {
  return axios.post(`${process.env.NEXT_PUBLIC_API}/download`, { ...body, release });
}
