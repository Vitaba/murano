export interface GuardError {
  errors?: GuardError[];
  guard: string;
  message?: string;
  valid: boolean;
  // tslint:disable-next-line:no-any
  value: any;
}
