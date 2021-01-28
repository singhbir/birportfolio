/**
 *
 * Asynchronously loads the component for TextField
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TextField = lazyLoad(
  () => import('./index'),
  module => module.CustomTextField,
);
