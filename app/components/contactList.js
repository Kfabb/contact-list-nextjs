'use client'
import { ContactsAPI } from "../data/contactAPI";
import { useState } from "react";


export default function Contacts(){
  const [allContacts, _] = useState(ContactsAPI.all());

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Profile Pic</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
      {allContacts.map((c) => {
        return (
        <tr key=
        )
      })}
      </tbody>
    </table> 
  );
}