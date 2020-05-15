export interface FormDataModel {
  id: FormValueId;
  controlName: string;
  controlType: string;
  currentValue?: string;
  placeholder?: string;
  options?: Array<{
    id?: string;
    optionName: string;
    value: string;
  }>;
}

export enum FormValueId {
  Name = "name",
  Phone = "phone",
  Email = "email",
  Gender = "gender",
  Vehicle = "vehicle",
}
