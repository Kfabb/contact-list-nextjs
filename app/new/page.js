"use client";
import { ContactsAPI } from "../../../app/data/contactsAPI";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddContact() {
  const [picture, setPicture] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [number, setNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const router = useRouter();

  const handleAddNewContactClick = () => {
    ContactsAPI.addContact({
      picture,
      firstName,
      lastName,
      number,
      email,
    });
    RouteMatcher.push("/");
  };

  return (
    <div>
      <form>
        <label>Picture URL</label>
        <input
          type="email"
          className="form-control"
          onChange={(event) => setEmail(event.target.value)}
        />

        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) => setFirstName(event.target.value)}
        />

        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) => setLastName(event.target.value)}
        />

        <label>Phone Number</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) => setNumber(event.target.value)}
        />

        <label>Email Address</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="button" onClick={handleAddNewContactClick}>
          Enter Contact
        </button>
      </form>

      <Link href="/"></Link>
    </div>
  );
}
