import { InjectionToken } from '@angular/core';

export interface ApiConfig {
  apiBaseUrl: string;
  chatUseMock: boolean;
}

export const API_CONFIG = new InjectionToken<ApiConfig>('API_CONFIG');

export interface RuntimeAppConfig {
  apiBaseUrl?: string;
  chatUseMock?: boolean;
}

export function getRuntimeAppConfig(): RuntimeAppConfig {
  const scope = globalThis as typeof globalThis & {
    __APP_CONFIG__?: RuntimeAppConfig;
  };

  return scope.__APP_CONFIG__ ?? {};
}

export function getDefaultApiConfig(): ApiConfig {
  const runtime = getRuntimeAppConfig();

  return {
    apiBaseUrl: runtime.apiBaseUrl ?? 'http://localhost:8080/api',
    chatUseMock: runtime.chatUseMock ?? false
  };
}
