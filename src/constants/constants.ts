export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';
export const isBrowser = typeof window !== 'undefined';

export const showLogger = isLocal ? true : process.env.GATSBY_PUBLIC_SHOW_LOGGER === 'true' ?? false;
