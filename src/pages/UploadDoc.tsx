import React, { useState } from "react";
import "../App.css";
import { Container, Form, Button, Card } from "react-bootstrap";




const UploadDoc: React.FC = () => {
  const [formData, setFormData] = useState({
    bankName: "",
    transactionType: "",
    file: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Document Uploaded Successfully!");
  };
  return (
    <>

<Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "400px" }}>
        <Card.Header className="upload-doc text-white text-center">
          <h5>Upload Documents</h5>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Bank Name</Form.Label>
              <Form.Select name="bankName" value={formData.bankName} onChange={handleChange}>
                <option value="">Select</option>
                <option value="bank1">Bank 1</option>
                <option value="bank2">Bank 2</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Transaction Type</Form.Label>
              <Form.Select name="transactionType" value={formData.transactionType} onChange={handleChange}>
                <option value="">Select</option>
                <option value="deposit">Deposit</option>
                <option value="withdrawal">Withdrawal</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Upload File</Form.Label>
              <Form.Control type="file" name="file" onChange={handleFileChange} />
            </Form.Group>

            <Button type="submit" className="w-100 submit-btn">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>



    {/* <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="upload-doc">
            <h1>Upload Your Documents</h1>

          </div>
        </div>
      </div>
    </div> */}
    </>
  );
}

export default UploadDoc;