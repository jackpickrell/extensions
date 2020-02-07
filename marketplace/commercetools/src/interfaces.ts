import { FieldsConfig } from './AppConfig/fields';

export interface ConfigurationParameters {
  projectKey?: string;
  clientId?: string;
  clientSecret?: string;
  apiEndpoint?: string;
  authApiEndpoint?: string;
  locale?: string;
  fieldsConfig?: FieldsConfig;
}

export type Hash = Record<string, any>;

export interface Product {
  sku: string;
  image: string;
  id: string;
  name: string;
  externalLink?: string;
}

export type ProductPreviewsFn = (
  skus: string[],
  config: ConfigurationParameters
) => Promise<Product[]>;

export type DeleteFn = (index: number) => void;
