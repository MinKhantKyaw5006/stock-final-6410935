import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function SupplierTable() {
  const [suppliers, setSuppliers] = useState([]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const newSupplier = { name, phoneNumber, address };
    setSuppliers([...suppliers, newSupplier]);
    setName('');
    setPhoneNumber('');
    setAddress('');
  }

  function handleDelete(index) {
    const newSuppliers = [...suppliers];
    newSuppliers.splice(index, 1);
    setSuppliers(newSuppliers);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Supplier name:
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>
        <label>
          Phone number:
          <input type="text" value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={event => setAddress(event.target.value)} />
        </label>
        <button type="submit" className="btn btn-primary ml-2">Add supplier</button>
      </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone number</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier, index) => (
            <tr key={index}>
              <td>{supplier.name}</td>
              <td>{supplier.phoneNumber}</td>
              <td>{supplier.address}</td>
              <td><button onClick={() => handleDelete(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SupplierTable;
