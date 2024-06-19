import { LucideMail, LucidePhone } from "lucide-react";

const Subheader = () => {
  const phoneNumber = "+91 8286168403";
  const email = "contact@mayostack.in";

  return (
    <div className="top-banner">
      <div className="container">
        <div className="banner-text flex gap-20 justify-end">
          <div className="flex gap-2">
            <LucidePhone />
            <p className="text-white font-semibold">{phoneNumber}</p>
          </div>
          <div className="flex gap-2">
            <LucideMail />
            <p className="text-white font-semibold">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subheader;
