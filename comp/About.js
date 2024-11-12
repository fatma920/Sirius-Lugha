// components/About.js
import React from 'react';
import './About.css';

const About = React.forwardRef((props, ref) => (
  <section ref={ref} id="about" className="about-section">
    <p className="about-description">
    من نحن؟<br/>
      شركة [سيريوس] متخصصة في مجال الابتكار وريادة الأعمال، الشركة متخصصة في إيجاد حلول مبتكرة للمشاكل من مختلف القطاعات على مده لا تتعدى شهر.
      أحد اهم مبادئ الشركة أن كل الحلول مبتكرة ولا يوجد لها مشابه في السوق. استهدف الشركة فئة الصم والبكم، من خلال ابتكار منتج [لغة] 
      حيث يبني جسر التواصل بينهم وبين باقي فئات المجتمع. رؤيتنا: نهدف من خلال منتج لغة ان نكون حافز ايجابي في حياة كل فرد من فئة الصم والبكم، 
      حيث تتولد فيهم الثقة والولاء للمنتج. مهمتنا: تحديد ومعالجة الاحتياجات غير ملباة من خلال الاستفادة من الإبداع والابتكار وتطوير المنتجات والخدمات.
    </p>
    <div className="contact-info">
      <a href="https://www.instagram.com/om.sirius?igsh=M3l4YWhrbm54cGR6" target="_blank" rel="noopener noreferrer" className="social-link">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="social-icon" />
        @om.sirius
      </a>
    </div>
  </section>
));

export default About;
