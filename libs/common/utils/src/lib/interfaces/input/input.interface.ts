import { FormControl } from '@angular/forms';

export interface InputConfig {
  placeholder: string;
  type: string;
  fControl: FormControl;
  mask?: string;
  min?: number;
  max?: number;
  step?: number;
}

export interface InputStyles {
  container: string;
  input: string;
}
