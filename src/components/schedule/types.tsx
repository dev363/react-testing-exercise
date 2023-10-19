export interface scheduleObj {
  name: string[];
  date: string;
}
export interface scheduleProps {
  [key: number]: scheduleObj;
}

export interface ScheduleListProps {
  list: scheduleProps;
}

export const NAME_TEST_ID = "input-name-test-id";
export const CHECKIN_TEST_ID = "input-checkin-test-id";
export const CHECKOUT_TEST_ID = "input-checkout-test-id";
