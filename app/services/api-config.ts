export interface ApiConfig {
  url: string;
  timeout: number;
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: 'https://api.stripe.com/v1',
  timeout: 10000,
};
