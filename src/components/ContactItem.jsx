import React from 'react'

function ContactItem(props) {
  return (
    <div>
      <p>{props.contact.first_name}</p>
      <p>{props.contact.last_name}</p>
      <p>{props.contact.dob}</p>
      <p>{props.contact.phoneNumber}</p>
    </div>
  )
}

export default ContactItem
