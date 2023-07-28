import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h3>home page</h3>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}