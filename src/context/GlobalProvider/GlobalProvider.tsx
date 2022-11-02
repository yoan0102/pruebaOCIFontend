import React from 'react';
export interface GlobalProviderInterface {}

const GlobalProvider: React.FC<GlobalProviderInterface> = () => {
  return <div>GlobalProvider</div>;
};

export default GlobalProvider;
