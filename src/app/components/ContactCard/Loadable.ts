/**
*
* Asynchronously loads the component for ContactCard
*
*/

import { lazyLoad } from 'utils/loadable';

export const ContactCard = lazyLoad(() => import('./index'), module => module.ContactCard);