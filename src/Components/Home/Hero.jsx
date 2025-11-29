import React from "react";
import "./Hero.css";
import "../../App.css";
import { Button } from "react-bootstrap";
import heroImage from "../../assets/h1_hero1.jpg.webp";
import { useNavigate } from "react-router-dom";

function Hero() {
   const navigate = useNavigate();
  return (
    <>
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
            <h1>المحامية بسمة جمال</h1>
          <h1>حقوقك أولويتنا.. نسعى لإظهار الحقيقة وتحقيق العدالة.</h1>
          <Button className="button" onClick={()=>navigate("/contact")}>احجز استشارة الآن</Button>
        </div>
      </div>
    </>
  );
}

export default Hero;
