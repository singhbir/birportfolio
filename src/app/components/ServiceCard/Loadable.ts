/**
*
* Asynchronously loads the component for ServiceCard
*
*/

import { lazyLoad } from 'utils/loadable';

export const ServiceCard = lazyLoad(() => import('./index'), module => module.ServiceCard);