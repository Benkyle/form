import React from "react";
import ContactItem from "./ContactItem";

function Contacts(props) {
  return (
    <div>
      {props.contacts.map((contact, i) => {
        return (
          <div key={i}>
            <ContactItem contact={contact}/>
          </div>
        );
      })}
    </div>
  );
}

export default Contacts;
