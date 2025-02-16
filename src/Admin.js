import React from 'react';
import PrizeForm from './PrizeForm';
import DeletePrize from './deletePrize';
import UpdatePrizeForm from './UpdatePrizeForm';
import AllResults from './AllResults';
import DeletePrizeByDate from './DeletePrizeByDate';

const Admin = () => {
  return (
    <>
      <PrizeForm />
      <AllResults />
      <DeletePrize />
      <UpdatePrizeForm />
      <DeletePrizeByDate />
    </>
  );
}

export default Admin;
