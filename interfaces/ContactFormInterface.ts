export default interface ContactFormInterface {
  name: string;
  email: string;
  subject?: string;
  message: string;
  gdprAgreed: boolean;
  token?: string;
}
