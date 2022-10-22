import '@testing-library/jest-dom';

import { toMatchDiffSnapshot } from 'snapshot-diff';

expect.extend({ toMatchDiffSnapshot });
