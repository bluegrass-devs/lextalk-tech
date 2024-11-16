export default function AddressMap({ date }: { date?: string }){
  return (
    <div className="my-12 mx-auto max-w-screen-xl px-4">
      <h2 className="text-3xl">Location:</h2>
      <div className="flex flex-col md:flex-row justify-center items-center max-w-screen-xl mx-auto my-12">
        <div className="w-full md:w-1/2 h-96">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.236842997967!2d-84.50669982410395!3d38.041567371919385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88424522fafce13d%3A0xfec16cb4172a8bfd!2sThe%20Cornerstone!5e0!3m2!1sen!2sus!4v1691424457551!5m2!1sen!2sus"
            width=""
            height=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="text-2xl my-8 md:mx-8">
          <h3 className="text-3xl font-bold py-2">The Cornerstone</h3>
          <div>401 South Limestone</div>
          <div>Lexington, KY 40508</div>
          <div>6PM - 8PM</div>
          <div>{date ? date : "TBD"}</div>
        </div>
      </div>
    </div>
  );
};
