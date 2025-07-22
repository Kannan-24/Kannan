import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "../assets/contact.svg"; // Your contact illustration image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button during submission

    toast.info("Sending your message...", {
      position: "top-right",
      autoClose: 3000,
    });

    try {
      const response = await fetch(
        "https://kannna-backend.onrender.com/send-email", // Backend API endpoint
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success(
          "Message sent successfully! We'll get back to you soon.",
          {
            position: "top-right",
            autoClose: 3000,
          }
        );
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        toast.error(
          result.message || "Failed to send your message. Please try again.",
          {
            position: "top-right",
            autoClose: 3000,
          }
        );
      }
    } catch (error) {
      toast.error(
        "An unexpected error occurred. Please check your connection and try again.",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <section className="py-5 text-white" id="contact">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row>
          <Col lg={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write your message"
                  required
                />
              </Form.Group>

              <Button
                type="submit"
                className="btn btn-outline-accent"
                disabled={isSubmitting} // Disable button during submission
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </Form>
          </Col>
          <Col
            lg={6}
            className="d-none d-lg-flex align-items-center justify-content-center illustration"
            style={{ width: "400px", height: "400px", margin: "0 auto" }}
          >
            <img
              src={Image}
              alt="Illustration"
              className="img-fluid hero-image"
            />
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </section>
  );
};

export default Contact;
