import { getCurrentEnvironment, getCurrentVersion } from '@/utils/environment';

export const IS_PRODUCTION = getCurrentEnvironment() === 'production'; // Enables analytics, etc.

export const IS_DEBUG = import.meta.env.VITE_DEBUG === 'true'; // Enables logging, etc.
export const EMULATE_SLOW_NETWORK = import.meta.env.VITE_EMULATE_SLOW_NETWORK === 'true'; // Emulates slow network for testing

export const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL;

export const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

IS_DEBUG &&
  console.log('@/config', {
    environment: getCurrentEnvironment(),
    version: getCurrentVersion(),
    PUBLIC_URL,
    TMDB_ACCESS_TOKEN,
    IS_PRODUCTION,
    IS_DEBUG,
    EMULATE_SLOW_NETWORK,
  });
