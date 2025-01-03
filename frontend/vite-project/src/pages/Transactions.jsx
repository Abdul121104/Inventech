import React, { useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';

const Transactions = () => {
  const [refresh, setRefresh] = useState(false);

  const handleTransactionAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="p-4">
      <TransactionForm onTransactionAdded={handleTransactionAdded} />
      <TransactionList key={refresh} />
    </div>
  );
};

export default Transactions;
