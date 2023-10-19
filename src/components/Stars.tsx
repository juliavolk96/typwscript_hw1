import React, { FunctionComponent } from 'react';
import Star from './Star';

interface StarsProps {
  count: number;
}

const Stars: FunctionComponent<StarsProps> = ({ count }) => {
  if (isNaN(count) || count < 1 || count > 5) {
    return null;
  }

  const starElements: JSX.Element[] = [];

  for (let i = 0; i < count; i++) {
    starElements.push(<Star key={i} fillColor="#eeff04" />);
  }

  return (
    <ul className='card-body-stars u-clearfix'>
      {starElements}
    </ul>
  );
};

export default Stars;
