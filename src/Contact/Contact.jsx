import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Components/Header/Header";
import Navs from "../Components/Header/Navbar";
import Hero from "../Components/Home/Hero";
import Footer from "../Components/Footer/Footer";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
      <Header />
      <Navs />
      <Hero />
      <Container className="py-5 contact-page">
        <Row>
          <Col md={6} data-aos="fade-right">
            <div style={{ width: "100%", minHeight: "600px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.024332013436!2d31.326562425362717!3d30.093489474898945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e27a50e6955%3A0xe22bcb987b48bf3c!2z2KfZhNit2LHZitipINmF2YjZhA!5e0!3m2!1sar!2seg!4v1764443667371!5m2!1sar!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="office-map"
              ></iframe>
            </div>
          </Col>

          <Col md={6} data-aos="fade-left">
            <h2 className="mb-4" style={{ color: "#2e0000" }}>
              تواصل معنا
            </h2>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>الاسم</Form.Label>
                <Form.Control type="text" placeholder="ادخل اسمك" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>البريد الإلكتروني</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ادخل بريدك الإلكتروني"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>الموضوع</Form.Label>
                <Form.Control type="text" placeholder="الموضوع" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>الرسالة</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="اكتب رسالتك هنا"
                />
              </Form.Group>

              <Button
                type="submit"
                style={{
                  backgroundColor: "#2e0000",
                  border: "none",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.opacity = 0.8)}
                onMouseOut={(e) => (e.target.style.opacity = 1)}
              >
                أرسل الرسالة
              </Button>
            </Form>

            <div className="mt-5">
              <h4 style={{ color: "#2e0000" }}>مكتب بسمة جمال</h4>
              <p>العنوان: 123 شارع القانون، القاهرة، مصر</p>
              <p>الهاتف: 01273805398</p>
              <p>البريد الإلكتروني: info@example.com</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
