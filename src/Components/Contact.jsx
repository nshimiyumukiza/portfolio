import { Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
const { TextArea } = Input;
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    type: "", message: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const HandleSendMessage = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "sending message..." })
    try {
      const response = await axios.post("https://portfolio-backend-mqsl.onrender.com/user", formData);
      setStatus({ type: "success", message: "Message Sent Successfuly!" })
      setFormData({ name: "", email: "", message: "" })
      console.log(response.data.message)
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message. Try again." })
    }

  };
  return (
    <div className="bg-black text-white md:py-16 md:px-16 px-4 py-4 ">
      <div className="md:mx-auto py-8 md:px-16 grid grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold mb-20 text-center text-green-400">
            Contact with me
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center md:space-x-12">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                let's talk
              </h1>
              <p>
                I'm open descussing web projects or parternship opportunities
              </p>
              <div className="mb-4 mt-8">
                <FaEnvelope className="text-green-400" />
                <a href="">nshimiyumukizaerneste99@gmail.com</a>
              </div>
              <div className="mb-4 mt-8">
                <FaPhone className="text-green-400" />
                <span>+0794650639</span>
              </div>
              <div className="mb-4 mt-8">
                <FaMapMarkedAlt className="text-green-400" />
                <span>Rwanda ,east ,Gatsibo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full mt-16 md:mt-32">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            Message
          </h1>
          <form action="submit" onSubmit={HandleSendMessage}>
            <div>
              <label className="text-xl font-semibold" htmlFor="name">
                Name
              </label>
              <Input
                placeholder="Enter Your Name"
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                
              />
            </div>
            <div>
              <label className="text-xl font-semibold" htmlFor="email">
                Email
              </label>
              <Input
                placeholder="Enter Your Email "
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-xl font-semibold" htmlFor="message">
                Message
              </label>
              <TextArea
                showCount
                maxLength={1000}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Message" 
                required
                style={{
                  height: 120,
                  resize: "none",
                }}
              />
          {status.message && (
        <p className={`mt-4 text-lg ${status.type === "success" ? "text-green-500" : "text-red-500"}`}>
          {status.message}
        </p>
      )}

      <button type="submit"
        className="w-full mt-4 bg-gradient-to-r from-pink-400 to-blue-500 text-white py-2 rounded">
        {status.type === "loading" ? "Sending..." : "Send"}
      </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
