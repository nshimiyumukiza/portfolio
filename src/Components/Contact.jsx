
import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
  FaSpinner
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    type: "",
    message: ""
  });
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const HandleSendMessage = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });

    // Simulate API call - replace with your actual implementation
    try {
      const response = await fetch("https://portfolio-backend-mqsl.onrender.com/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "nshimiyumukizaerneste99@gmail.com",
      href: "mailto:nshimiyumukizaerneste99@gmail.com",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: "Phone",
      value: "+250 794 650 639",
      href: "tel:+250794650639",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Location",
      value: "Gatsibo, Eastern Province, Rwanda",
      href: "#",
      color: "from-purple-400 to-pink-400"
    }
  ];

  const getStatusIcon = () => {
    switch (status.type) {
      case "loading":
        return <FaSpinner className="animate-spin" />;
      case "success":
        return <FaCheckCircle />;
      case "error":
        return <FaExclamationTriangle />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (status.type) {
      case "loading":
        return "text-blue-400";
      case "success":
        return "text-green-400";
      case "error":
        return "text-red-400";
      default:
        return "";
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 px-4 md:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Intro */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always open to discussing web development projects, partnership opportunities,
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <a
                    href={contact.href}
                    className="block p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 hover:scale-105"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-4 bg-gradient-to-r ${contact.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                        {contact.icon}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-medium">{contact.label}</p>
                        <p className="text-white text-lg font-semibold group-hover:text-cyan-300 transition-colors duration-300">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20">
              <h4 className="text-xl font-bold text-cyan-300 mb-3">Quick Response</h4>
              <p className="text-gray-300">
                I typically respond to messages within 24 hours. For urgent matters,
                feel free to call or send a follow-up email.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8">
                Send Message
              </h3>

              <div onSubmit={HandleSendMessage} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Enter your full name"
                      required
                      className={`w-full p-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 focus:bg-white/10 ${focusedField === "name" ? "border-cyan-400/50" : "border-white/20"}`}
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${focusedField === "name" ? "w-full" : "w-0"}`}></div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField("")}
                      placeholder="your.email@example.com"
                      required
                      className={`w-full p-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 focus:bg-white/10 ${focusedField === "email" ? "border-cyan-400/50" : "border-white/20"}`}
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${focusedField === "email" ? "w-full" : "w-0"}`}></div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Tell me about your project or just say hello..."
                      required
                      maxLength={1000}
                      rows={6}
                      className={`w-full p-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 focus:bg-white/10 resize-none ${focusedField === "message" ? "border-cyan-400/50" : "border-white/20"}`}
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${focusedField === "message" ? "w-full" : "w-0"}`}></div>
                    <div className="absolute bottom-2 right-4 text-xs text-gray-400">
                      {formData.message.length}/1000
                    </div>
                  </div>
                </div>

                {/* Status Message */}
                {status.message && (
                  <div className={`flex items-center gap-3 p-4 rounded-xl ${status.type === "success" ? "bg-green-500/10 border border-green-500/20" : status.type === "error" ? "bg-red-500/10 border border-red-500/20" : "bg-blue-500/10 border border-blue-500/20"}`}>
                    <span className={getStatusColor()}>
                      {getStatusIcon()}
                    </span>
                    <p className={`${getStatusColor()} font-medium`}>
                      {status.message}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={HandleSendMessage}
                  disabled={status.type === "loading"}
                  className="group relative w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="flex items-center justify-center gap-3">
                    {status.type === "loading" ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="p-8 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg rounded-2xl border border-white/10">
            <h4 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing Together</h4>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Whether you need a complete web application, want to discuss a collaboration,
              or just want to connect with a fellow developer, I'm here and ready to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
