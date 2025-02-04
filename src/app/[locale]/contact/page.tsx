import ContactForm from "./components/contact-form";

export default function Page() {
  return (
    <>
      <section
        id="contact-banner"
        className="bg-amethyst-200 flex flex-col basis-1/2 p-4 justify-end gap-4 rounded-lg h-[724px]"
      >
        <h1 className="text-h1 font-bold text-woodsmoke-700 leading-[81px]">
          Your thoughts matter to me!
        </h1>
        <p className="text-large text-woodsmoke-500">
          Whether you’re looking for information or have a project in mind, drop
          me a message below, and I’ll get back to you as soon as I can.
        </p>
      </section>
      <section id="id-form" className="flex flex-col basis-1/2 w-full">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-h2 font-bold">Get in Touch</h2>
          <p className="text-large font-medium">Reach me anytime</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
