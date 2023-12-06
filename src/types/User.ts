export interface UserData {
  username: string;
  name: string;
  user_type: string;
  user_role: string;
}

export interface UserDataResponse {
  success: string;
  status_code: number;
  message: string;
  data: UserData;
}
