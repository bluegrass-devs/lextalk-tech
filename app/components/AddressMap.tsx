export default function AddressMap({ date }: { date?: string }){
  return (
    <div className="text-3xl max-w-screen-xl flex flex-col gap-4 mb-8">
      <h2 className="my-8" id="location">Location</h2>
      <div className="flex flex-col md:grid grid-cols-3">
         <div className="w-full md:col-span-1">
			 <a href="https://maps.app.goo.gl/C4EsyQ1jtaKxAVYa7">
				<h3 className="font-bold">The Cornerstone</h3>
				<div>401 South Limestone</div>
				<div>Lexington, KY 40508</div>
				<div>6PM - 8PM</div>
				<div>{date ? date : "TBD"}</div>
			 </a>
    	</div>
       <div className="w-full md:col-span-2 h-96">
          <iframe
            className="w-full h-full rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.236842997967!2d-84.50669982410395!3d38.041567371919385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88424522fafce13d%3A0xfec16cb4172a8bfd!2sThe%20Cornerstone!5e0!3m2!1sen!2sus!4v1691424457551!5m2!1sen!2sus"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
