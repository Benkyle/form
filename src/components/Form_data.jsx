import React, { useState } from "react";

function FormData() {
  const [form, setForm] = useState({});

  const FormFields = [
    {
      id: "first_name",
      label: "First Name",
      placeholder: "Enter First Name",
      type: "text",
    },
    {
      id: "last_name",
      label: "Last Name",
      placeholder: "Enter Last Name",
      type: "text",
    },
    { id: "dob", label: "DOB", placeholder: "Select DOB", type: "date" },
    {
      id: "phoneNumber",
      label: "Phone Number",
      placeholder: "Enter Phone Number",
      type: "number",
    },
  ];

  function handlerFormValues(e, field) {
    const value = e.target.value;
    setForm((oldValues) => {
      return {
        ...oldValues,
        [field]: value,
      };
    });
  }

  function addContacts(e) {
    e.preventDefault();
    alert("Hi");
  }

  return (
    <div>
        <p>{JSON.stringify(form)}</p>
      <form onSubmit={addContacts}>
        {FormFields.map((field) => {
          return (
            <div key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              <div>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  onInput={(e) => handlerFormValues(e, field.id)}
                />
              </div>
              <br />
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormData;
