export interface CardListItemProps {
  id: string;
  object?: string;
  brand?: string;
  country?: string;
  customer?: string;
  exp_month?: number;
  exp_year?: number;
  fingerprint?: string;
  funding?: string;
  last4?: string;
  address_city?: string;
  address_country?: string;
  address_line1?: string;
  address_line1_check?: string;
  address_line2?: string;
  address_state?: string;
  address_zip?: string;
  address_zip_check?: string;
  name?: string;
  tokenization_method?: string;
  cvc_check?: string;
  metadata?: any;
  dynamic_last4?: string;
}
