import axios from 'axios';
import APIStatus from '../interfaces/APIStatus';
import ContactFormInterface from '../interfaces/ContactFormInterface';

export function sentMessage(body: ContactFormInterface): Promise<APIStatus> {
  return axios.post(`${process.env.NEXT_PUBLIC_API}/sendMail`, body);
}
