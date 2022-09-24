import React from "react";
import Platform from "platform";

function Contact() {
  async function ajax(method, url, data) {
    let formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.status === 200) {
        let status = document.getElementById("status");
        status.innerHTML = "Message Sent Successfully.";
        setTimeout(() => {
          status.innerHTML = "";
        }, 5000);
      } else {
        let status = document.getElementById("status");
        status.innerHTML = "Message Failed to Send.";
        setTimeout(() => {
          status.innerHTML = "";
        }, 5000);
      }
    };
    xhr.send(formData);
  }
  let contactFormSubmit = () => {
    let form = document.getElementById("contactForm");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;
      let data = {
        name: name,
        email: email,
        message: message,
        url: window.location.href,
        device_description: Platform.description,
      };
      await ajax("POST", "https://formspree.io/f/xknerrjv", data);
      form.reset();
    });
  };
  return (
    <div className="contactPage container">
      <h2>
        <div className="svg"></div> Contact me
      </h2>
      <p>
        I'm currently looking for a new opportunity, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to
        get back to you!
      </p>
      <form id="contactForm">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name..."
            id="name"
            pattern="[A-Za-z ]{3,}"
            title="Please enter at least 3 characters"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email..."
            id="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Please enter a valid email address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            placeholder="Enter your message..."
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            contactFormSubmit();
          }}
        >
          Submit
        </button>
        <div
          id="status"
          style={{
            color: "var(--color-primary)",
            transition: "all 0.15s ease",
          }}
        ></div>
      </form>
    </div>
  );
}

export default Contact;
