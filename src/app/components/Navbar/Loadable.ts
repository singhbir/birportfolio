/**
 *
 * Asynchronously loads the component for Navbar
 *
 */

import { lazyLoad } from 'utils/loadable';

export const NavbarPortfolio = lazyLoad(
  () => import('./index'),
  module => module.NavbarPortfolio,
);
