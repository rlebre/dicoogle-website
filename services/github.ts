import axios from 'axios';
import { GhRelease } from '../interfaces/GithubRelease';

export async function getReleases(): Promise<GhRelease[]> {
  return (await axios.get('https://api.github.com/repos/bioinformatics-ua/dicoogle/releases')).data;
}
