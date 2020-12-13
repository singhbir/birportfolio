import { AboutmeState } from 'app/containers/Aboutme/types';
import { ResumeState } from 'app/containers/Resume/types';

// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  aboutme?: AboutmeState;
  resume?: ResumeState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
