import React from 'react';
import CEUHeader from './CEUHeaderSection/CEUHeader';
import CourseRegistration from './courseRegistration/CourseRegistration';
import CEUsteps from './ceuSteps/CEUsteps';

const CEU = () => {
  return (
    <div>
        <CEUHeader/>
        <CourseRegistration/>
        <CEUsteps/>
    </div>
  )
}

export default CEU;