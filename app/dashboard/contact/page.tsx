import { db } from "@/server";
import ContactForm from "@/components/contact/ContactForm";

export default async function ContactEditPage() {
  const contactData = await db.query.contact.findFirst();
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Edit Contact</h1>
      <ContactForm
        initialData={
          contactData
            ? {
                email: contactData.email ?? "",
                phone: contactData.phone ?? "",
                linkIn: contactData.linkIn ?? "",
              }
            : undefined
        }
      />
    </div>
  );
}
