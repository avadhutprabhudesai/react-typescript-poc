declare module '*.module.css';

declare type Address = {
  city?: string;
  country: string;
};

interface UserBaseProps {
  id: number;
  name: string;
  address?: Address;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
type FreeUserProps = UserBaseProps & {
  type: 'free';
  trialPeriodEndsInDays: number;
};
type PremiumUserProps = UserBaseProps & {
  type: 'paid';
  subscription: number;
  plan: 'Silver' | 'Golden' | 'Platinum';
  features: string[];
};
type UserProps = FreeUserProps | PremiumUserProps;
