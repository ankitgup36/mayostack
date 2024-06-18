import Image from "next/image";

const Subheader = () => {
  const phoneNumber = "+91 8286168403";
  const email = "contact@mayostack.in";

  return (
    <div className="top-banner">
      <div className="container">
        <div className="banner-text flex gap-20 justify-end">
          <div className="flex gap-2">
            <Image
              src="/assets/icons8-phone-30.png"
              className="contact-icon"
              alt="Phone icon"
              width={100}
              height={100}
            />
            <p className="text-white font-semibold">{phoneNumber}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons8-email-50.png"
              className="contact-icon"
              alt="Email icon"
              width={100}
              height={100}
            />
            <p className="text-white font-semibold">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subheader;
