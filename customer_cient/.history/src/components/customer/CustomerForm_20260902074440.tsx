import { useState } from "react";
import "./CustomerForm.scss";

function CustomerForm() {
  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [name, setName] = useState("");
  const [name, setName] = useState("");
  return (
    <div className="customer-form">
      <form action="">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label>Mobile</label>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />

        <label>NIC Number</label>
        <input
          type="text"
          value={nic}
          onChange={(e) => setNic(e.target.value)}
        />
        <br />

        <label>Date of Birth</label>
        <input
          type="date"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label>Gender</label>
        <label>
          <input type="radio" value="Male" name="gender" /> Male
        </label>
        <label>
          <input type="radio" value="Female" name="gender" /> Female
        </label>
        <br />

        <label>City</label>
        <input type="text" />
        <br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default CustomerForm;
