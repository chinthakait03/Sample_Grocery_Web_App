import "./CustomerForm.scss";

function CustomerForm() {
  return (
    <div className="customer-form">
      <form action="">
        <label>Name</label>
        <input type="text" />
        <br />

        <label>Mobile</label>
        <input type="text" />
        <br />

        <label>NIC Number</label>
        <input type="text" />
        <br />

        <label>Date of Birth</label>
        <input type="date" />
        <br />

        <label>Gender</label>
        <label>
          <input type="radio" value="Male" name="gender" />{" "}
        </label>
        <label>
          <input type="radio" value="Female" name="gender" />{" "}
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
