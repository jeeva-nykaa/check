import { fetchUserDetails } from '../userDetails';

export const checkAuth = async () => {
  const data = await fetchUserDetails();
  if (data) {
    return true;
  }
  return false;
};
