import axios from 'axios';
import APIStatus from '../interfaces/APIStatus';
import DownloadFormInterface from '../interfaces/DownloadFormInterface';

export function requestDownload(body: DownloadFormInterface): Promise<APIStatus> {
  return axios.post(`${process.env.NEXT_PUBLIC_API}/request-download`, body);
}
