import { useDispatch, useSelector } from 'react-redux';
import { deleteCustomersAction } from 'store/customerReducer';
import { addCustomersAction } from 'store/customerReducer';

export const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = cash => {
    dispatch({ type: 'ADD_CASH', payload: cash });
  };

  const getCash = cash => {
    dispatch({ type: 'GET_CASH', payload: cash });
  };

  const addCustomer = name => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomersAction(customer));
  };

  const deleteCustomer = customer => {
    dispatch(deleteCustomersAction(customer.id));
  };

  return (
    <div className="app">
      <div style={{ display: 'flex' }}>
        <div style={{ fontSize: '3rem' }}>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>Add Cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Get Cash</button>
        <button onClick={() => addCustomer(prompt())}>Add Customer</button>
        <button onClick={() => deleteCustomer(Number(prompt()))}>
          Delete Customer
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map(customer => (
            <div onClick={() => deleteCustomer(customer)}>{customer.name}</div>
          ))}
        </div>
      ) : (
        <div>No customers yet</div>
      )}
      <div></div>
    </div>
  );
};
