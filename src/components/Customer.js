import React, { useState } from "react";


var arr_cus = [];

export function ShowData(props) {
  var  arr_row=[]
  return (
    <>
     <table className="table my-4">
       <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Mobile No</th>
        </tr>
       </thead>
     </table>
    </>
  )
}

 function CustomerForm (props) {
  var [txtId, setTxtId] = useState(0);
  var [txtName, setTxtName] = useState("");
  var [txtAddress, setTxtAddress] = useState("");
  var [txtMobileNo, setTxtMobileNo] = useState("");
  function idOnChange(event) {
    setTxtId(event.target.value);
  }
  function nameOnChange(event) {
    setTxtName(event.target.value);
  }
  function addressOnChange(event) {
    setTxtAddress(event.target.value);
  }
  function mobileNoOnChange(event) {
    setTxtMobileNo(event.target.value);
  }

  function addOnClick(event) {
    var cus = {
      id: txtId,
      cusname: txtName,
      address: txtAddress,
      mobileNo: txtMobileNo
    };
    arr_cus.push(cus);
    alert("Customer Added Sucessfully");
  }
  function searchOnClick(event) {
    for (var c of arr_cus) {
      if (txtId == c.id) {
        setTxtName(c.cusname);
        setTxtAddress(c.address);
        setTxtMobileNo(c.mobileNo);
      }
    }
  }

  return (
     <>
       <form>
        <div className="mb-3">
          <label htmlFor="txtid" className="form-label">
            Customer ID
          </label>
          <input
            type="text"
            className="form-control"
            id="txtid"
            placeholder="Enter Your ID"
            value={txtId}
            onChange={idOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nameTxt" className="form-label">
            Customer Name
          </label>
          <input
            type="text"
            className="form-control"
            id="txtname"
            placeholder="Enter Your Name"
            value={txtName}
            onChange={nameOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="addressTxt" className="form-label">
            Customer Address
          </label>
          <input
            type="text"
            className="form-control"
            id="txtaddress"
            placeholder="Enter Your Customer Address"
            value={txtAddress}
            onChange={addressOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobileNoTxt" className="form-label">
            Customer Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="txtMobileNo"
            placeholder="Enter Your Mobile Number"
            value={txtMobileNo}
            onChange={mobileNoOnChange}
          />
        </div>

        <button
          type="button"
          onClick={addOnClick}
          className="btn btn-primary mx-1 "
        >
          Add Customer
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={searchOnClick}
        >
          Search Customer
        </button>
      </form>
      <ShowData />
     </>
  );
}

export default CustomerForm;
