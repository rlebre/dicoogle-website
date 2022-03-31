import axios from 'axios';
import Release from '../interfaces/GithubRelease';

export async function getReleases(): Promise<Release[]> {
  return (await axios.get('https://api.github.com/repos/bioinformatics-ua/dicoogle/releases')).data;
}
