// import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function SupplierTable() {
//   const [suppliers, setSuppliers] = useState([]);
//   const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [address, setAddress] = useState('');

//   function handleSubmit(event) {
//     event.preventDefault();
//     const newSupplier = { name, phoneNumber, address };
//     setSuppliers([...suppliers, newSupplier]);
//     setName('');
//     setPhoneNumber('');
//     setAddress('');
//   }

//   function handleDelete(index) {
//     const newSuppliers = [...suppliers];
//     newSuppliers.splice(index, 1);
//     setSuppliers(newSuppliers);
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Supplier name:
//           <input type="text" value={name} onChange={event => setName(event.target.value)} />
//         </label>
//         <label>
//           Phone number:
//           <input type="text" value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} />
//         </label>
//         <label>
//           Address:
//           <input type="text" value={address} onChange={event => setAddress(event.target.value)} />
//         </label>
//         <button type="submit" className="btn btn-primary">Add supplier</button>
//       </form>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Phone number</th>
//             <th>Address</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {suppliers.map((supplier, index) => (
//             <tr key={index}>
//               <td>{supplier.name}</td>
//               <td>{supplier.phoneNumber}</td>
//               <td>{supplier.address}</td>
//               <td><button onClick={() => handleDelete(index)}>Delete</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default SupplierTable;



import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SupplierTable.css';

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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">Supplier name:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="name" value={name} onChange={event => setName(event.target.value)} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="phone" className="col-sm-2 col-form-label">Phone number:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="phone" value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="address" className="col-sm-2 col-form-label">Address:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="address" value={address} onChange={event => setAddress(event.target.value)} />
          </div>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button type="submit" className="btn btn-primary">Add supplier</button>
        </div>
      </form>
      <table className="table table-striped mt-3">
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
              <td><button onClick={() => handleDelete(index)} className="btn btn-danger">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SupplierTable;
