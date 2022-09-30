export interface PhoneNumberItem {
  id?: number;
  name: string;
  email: string;
  phoneNumber: string;
  date: string;
}

export const state = {
  phoneNumberList: [] as PhoneNumberItem[],
};

export type RootState = typeof state;
