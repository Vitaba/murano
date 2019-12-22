import { FormControl } from '@angular/forms';

export interface InputControlConfig {
  placeholder: string;
  type: string;
  fControl: FormControl;
  mask?: string;
  min?: number;
  max?: number;
  step?: number;
}

export interface InputControlStyles {
  container: string;
  input: string;
}
