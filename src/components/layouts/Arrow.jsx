import React from "react";

export const Arrow = () => {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSeuT7xPsSp1SOeVi4Fv4rCrM8HrDOsLhBr-Cbeoedik-n7xrg/viewform"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[25px] right-[10px] md:bottom-[35px] md:right-[35px] z-[100] cursor-pointer arrow-font"
    >
      <div className="flex flex-col gap-2">
        <button className="bg-[#9DC16E] px-5 md:px-9 py-2 md:py-3 text-[#80272E] hover:bg-[#80272E] hover:text-[#9DC16E] border border-[#9DC16E] transition-colors duration-300 ease-in-out text-sm md:text-[20px] font-semibold rounded-[5px] mt-5">
          A New comer to Canada ?
        </button>
      </div>
    </a>
  );
};

// import React, { useState } from "react";
// import logo from "./../../assets/images/logo.png";

// export const Arrow = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [loading, setLoading] = useState(false);
//   const [responseMessage, setResponseMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResponseMessage("");

//     try {
//       const response = await fetch("https://backend.htincometax.com/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         setResponseMessage("Email sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setResponseMessage(result.error || "Failed to send email.");
//       }
//     } catch (error) {
//       setResponseMessage("An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Toggle Button */}
//       <div className="fixed bottom-[25px] right-[10px] md:bottom-[35px] md:right-[35px] z-[100] cursor-pointer">
//         <button
//           onClick={() => setIsPopupOpen(!isPopupOpen)}
//           className={`px-5 md:px-9 py-2 md:py-3 font-semibold rounded-[5px] transition-colors duration-300 ease-in-out text-sm md:text-[20px] border 
//             ${isPopupOpen ? "bg-[#E0E0E0] text-black hover:bg-[#80272E] hover:text-white border-gray-400" 
//             : "bg-[#9DC16E] text-[#80272E] hover:bg-[#80272E] hover:text-[#9DC16E] border-[#9DC16E]"}`}
//         >
//           {isPopupOpen ? "✖ Close" : "A Newcomer to Canada?"}
//         </button>
//       </div>

//       {/* Popup Modal */}
//       {isPopupOpen && (
//         <div className="fixed bottom-[100px] right-[20px] w-[320px] md:w-[350px] bg-white shadow-xl rounded-lg p-5 z-[101] border border-gray-300">
//           {/* Logo */}
//           <div className="flex justify-center mb-3">
//             <img src={logo} alt="Logo" className="w-[50px]" />
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="text-center">
//             <h2 className="text-lg font-semibold text-[#80272E] mb-3">
//               Hi! Let us know how we can help and we’ll respond shortly.
//             </h2>
//             <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name *" required className="w-full p-3 border rounded-md mb-3" />
//             <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required className="w-full p-3 border rounded-md mb-3" />
//             <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help? *" required className="w-full p-3 border rounded-md mb-3" rows="5" />
            
//             <button type="submit" className="w-full bg-[#9DC16E] text-[#80272E] hover:bg-[#80272E] hover:text-[#9DC16E] border border-[#9DC16E] transition duration-300 ease-in-out text-sm md:text-[16px] font-semibold rounded-md py-3" disabled={loading}>
//               {loading ? "Sending..." : "Submit"}
//             </button>

//             {responseMessage && <p className="text-sm mt-2">{responseMessage}</p>}
//           </form>
//         </div>
//       )}
//     </>
//   );
// };
