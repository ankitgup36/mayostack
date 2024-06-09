const Subheader = () => {
  return (
    <div className="top-banner">
      <div className="container">
        <div className="banner-text flex gap-20 justify-end">
          <div className="flex gap-2">
            <img src="./assets/phone.png" className="contact-icon" />
            <p className=" text-gray-800 font-semibold">+91 8286168403</p>
          </div>
          <div className="flex gap-2">
            <img src="./assets/email.png" className="contact-icon" />
            <p className=" text-gray-800 font-semibold">contact@mayostack.in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subheader;
