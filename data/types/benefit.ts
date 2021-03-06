import { Email } from './shared';

export type Benefit = {
  "id": string;
  "beneficiary": {
    name: string;
    email: Email;
  };
  "country": string;
  "city": string;
  "service": string;
  "monthlyFee": number;
  "subscribedAtDate": string;
};
