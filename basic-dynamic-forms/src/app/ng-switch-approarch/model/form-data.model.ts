export interface FormDataModel {
  id: string;
  controlName: string;
  controlType: string;
  currentValue?: string;
  placeholder?: string;
  options?: Array<{
    id?: string;
    optionName: string;
    value: string;
  }>;
  validators?: {
    required?: boolean;
    minlength?: number;
    maxlength?: number;
  };
}
