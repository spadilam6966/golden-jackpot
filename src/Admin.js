import React from 'react';
import PrizeForm from './PrizeForm';
import DeletePrize from './deletePrize';
import UpdatePrizeForm from './UpdatePrizeForm';
import AllResults from './AllResults';

const Admin = () => {
  return (
    <>
      <PrizeForm />
      <AllResults />
      <DeletePrize />
      <UpdatePrizeForm />
    </>
  );
}

export default Admin;
