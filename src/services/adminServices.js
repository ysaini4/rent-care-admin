import { httpService, httpServiceLogin } from "./httpservices";
export const getProperties = async data => {
  return await httpService("POST", "/property/search", data);
};
export const updateProperty = async data => {
  return await httpService("PUT", "/property/updateproperty", data);
};
export const deleteProperty = async data => {
  return await httpService("DELETE", "/property", data);
};
export const login = async data => {
  return await httpServiceLogin("POST", "/user/login", data);
};
export const getBuyersProperties = async data => {
  return await httpService("POST", "/buyer/search", data);
};
export const validateUser = async () => {
  return await httpService("POST", "/user/validateuser");
};
