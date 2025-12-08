
import { Helmet } from "react-helmet";
import AboutSection from "./About";
import Hero from "./Hero";
import ServiceSection from "./Services";
import WhyChooseUs from "./WhyChose";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>مكتب بسمة جمال للمحاماة | الصفحة الرئيسية</title>
        <meta
          name="description"
          content="مكتب العدل للمحاماة والاستشارات القانونية بإدارة المحامية بسمة جمال. خبرة في القضايا الجنائية، المدني، التجاري، الأحوال الشخصية، قضايا الأموال العامة، والنقد الأجنبي، وتأسيس الشركات. اتصل بنا الآن للحصول على استشارة قانونية موثوقة."
        />

        <meta
          name="keywords"
          content="المحامية بسمة جمال, مكتب محاماة, محامي جنائي, محامي أحوال شخصية, قضايا أموال عامة, قضايا النقد الأجنبي, محامي مدني, محامي تجاري, تأسيس شركات, استشارات قانونية, أفضل محامي في القاهرة, محامي في الجيزة"
        />
      </Helmet>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <WhyChooseUs />
    </>
  );
}

export default  HomePage;
