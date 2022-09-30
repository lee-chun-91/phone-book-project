export interface PhoneNumberItem {
  name: string;
  email: string;
  phoneNumber: string;
  date: string;
  id?: number;
}

export const state = {
  phoneNumberList: [] as PhoneNumberItem[],
};

export type RootState = typeof state;
