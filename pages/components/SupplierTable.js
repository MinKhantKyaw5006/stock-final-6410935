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
//         <button type="submit" className="btn btn-primary ml-2">Add supplier</button>
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
import { Navbar, Nav } from 'react-bootstrap';

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
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#add">Add</Nav.Link>
            <Nav.Link href="#supply-management">Supply Management</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container mt-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">Supplier name:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="name" value={name} onChange={event => setName(event.target.value)} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="phone" className="col-sm-2 col-form-label">Phone number:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="phone" value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address" className="col-sm-2 col-form-label">Address:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="address" value={address} onChange={event => setAddress(event.target.value)} />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary">Add supplier</button>
            </div>
          </div>
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
    </>
  );
}

export default SupplierTable;
