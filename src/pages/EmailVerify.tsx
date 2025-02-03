import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const EmailVerify = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center min-vh-100 bg-light"
    >
      <Card className="text-center p-4 shadow-lg rounded-4" style={{ maxWidth: "450px" }}>
        {/* Envelope Icon */}
        <div className="d-flex justify-content-center mb-3">
          <div className="bg-light p-3 rounded-circle">
            <img
              src="https://cdn-icons-png.flaticon.com/128/732/732200.png" // Replace with your email icon
              alt="Email Icon"
              width="60"
              height="60"
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="fw-bold text-dark">Check your inbox, please!</h3>

        {/* Description */}
        <p className="text-muted px-3">
          Hey Joy, to start using <strong>invoiceflow</strong>, we need to verify your email.
          We've already sent out the verification link. Please check it and confirm it's really you.
        </p>

        {/* Action Button */}
        <Button variant="primary" className="w-100 py-2 rounded-pill">
          Sure!
        </Button>

        {/* Resend Email */}
        <p className="mt-3 text-muted">
          Didn’t get an email?{" "}
          <a href="#" className="text-primary fw-bold text-decoration-none">
            Send it again
          </a>
        </p>
      </Card>
    </Container>
  );
};

export default EmailVerify;
