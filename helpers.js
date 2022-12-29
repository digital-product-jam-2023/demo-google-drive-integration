import { FORM_VALID_FIELDS } from "./config";

export function getValidFormData(formElements) {
  const validElements = Array.from(formElements).filter(e => FORM_VALID_FIELDS.includes(e.name));
  const validData = {}
  for (const element of validElements) {
    validData[element.name] = element.value;
  }
  return validData;
}
