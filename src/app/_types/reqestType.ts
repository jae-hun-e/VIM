export interface LoginFormProps {
  username: string;
  password: string;
}

export interface AdminConfig {
  keys: ConfigKey[];
}
export interface ConfigKey {
  key: string;
  value: string;
}
