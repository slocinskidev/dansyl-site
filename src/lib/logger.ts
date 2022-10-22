import { isBrowser, showLogger } from '@/constants';

export const logger = (object: unknown, comment?: string): void => {
  if (!showLogger) return;

  // eslint-disable-next-line no-console
  console.log(
    '%c ======== INFO LOG ======== \n',
    'color: green',
    `=== ${isBrowser && window?.location.pathname} ===\n`,
    `=== ${comment ?? ''} ===\n`,
    object,
  );
};
