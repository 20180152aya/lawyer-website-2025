import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import BuildImg from "../../assets/تاسيس الشركة.jpeg";
import familyIMg from "../../assets/الاسرة.jpeg";
import ecomm from "../../assets/قضاياالتجارية.jpeg";
import house from "../../assets/العقارات.jpeg";
import contract from "../../assets/عقود.jpeg";
import Gan from "../../assets/جنائية.jpeg";
import { useNavigate } from "react-router-dom";

function ServiceSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const servicesRow1 = [
    { icon: BuildImg, title: "تأسيس الشركات", text: "تقديم كافة الخدمات القانونية لتأسيس الشركات وفتح فروع للشركات الأجنبية." },
    { icon: ecomm, title: "القضايا التجارية", text: "متابعة وحل القضايا التجارية وفق القوانين المصرية بكفاءة واحترافية." },
    { icon: familyIMg, title: "قضايا الأسرة", text: "معالجة كافة قضايا الأحوال الشخصية والأسرة مع تقديم المشورة القانونية الدقيقة." },
  ];

  const servicesRow2 = [
    { icon: house, title: "قضايا العقارات", text: "حل كافة القضايا العقارية ومتابعة المستندات القانونية بدقة." },
    { icon: Gan, title: "القضايا الجنائية", text: "تمثيل موكلي المكتب أمام المحاكم الجنائية بكفاءة عالية." },
    { icon: contract, title: "صياغة العقود", text: "صياغة عقود قانونية متوافقة مع القانون المصري واحتياجات العملاء." },
  ];
   const navigate = useNavigate();

  return (
    <Container className="ser_container py-5">
      <h2 data-aos="fade-down" className="text-center mb-3">الخدمات التى يقدمها المكتب</h2>
      <p data-aos="fade-up" className="text-center mb-5">
        نقوم بتقديم كافة الخدمات القانونية داخل جمهورية مصر العربية طبقا للقانون
        المصرى بكافة فروعه: تأسيس الشركات في مصر، فتح فرع شركة أجنبية فى مصر،
        قضايا العقارات، القضايا التجارية، القضايا المدنية، القضايا الجنائية،
        قضايا الأحوال الشخصية وقضايا الأسرة، وقضايا التحكيم الدولي، وقضايا
        الإيجارات، وقضايا العمال، صياغة العقود.
      </p>

      <div className="row mb-4">
        {servicesRow1.map((service, idx) => (
          <ServiceCard key={idx} {...service} aosDelay={idx * 100} />
        ))}
      </div>

      <div className="row mb-4">
        {servicesRow2.map((service, idx) => (
          <ServiceCard key={idx} {...service} aosDelay={idx * 100} />
        ))}
      </div>

      <div className="text-center mt-4">
        <Button className="button" data-aos="zoom-in"  onClick={() => navigate("/services")} >المزيد من الخدمات الاخرى</Button>
      </div>
    </Container>
  );
}

function ServiceCard({ icon, title, text, aosDelay }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={aosDelay}>
      <div className="service-card text-center p-3 shadow-sm rounded">
        <div className="service-icon-wrapper mb-3">
          <img src={icon} alt={title} className="service-icon img-fluid" />
        </div>
        <h5 className="mt-3">{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ServiceSection;
