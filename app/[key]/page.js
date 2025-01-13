// app/[id]/page.js
"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ContactsAPI } from "../data/contactAPI";

export default function Contact( {params}) {
  const { key } = useParams();
  const contact = ContactsAPI.get(parseInt(key, 10));

  if (!contact) {
    return <div>Sorry, but the contact was not found</div>;
  }

  return (
    <main>
      <div>
        <h1>
          <img width="200" height="200" src={contact.picture} alt="profile pic"/>
          {contact.name} ({contact.number})
        </h1>
        <h2>Email: {contact.email}</h2>
        <Link href="/">Back</Link>
      </div>
    </main>
  );
}

