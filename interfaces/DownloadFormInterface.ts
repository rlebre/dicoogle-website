import Country from './Country';

export default interface ContactFormInterface {
  name: string;
  email: string;
  company: string;
  country: Country;
  interest: string;
  pluginsSourceCode: boolean;
  newsletter: boolean;
  gdprAgreed: boolean;
  recaptchaToken?: string;
}
