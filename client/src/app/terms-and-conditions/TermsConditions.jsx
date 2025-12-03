import React from "react";
import { Mail, Globe, MapPin } from "lucide-react";

export default function TermsConditions() {
  return (
    <section className="common-section lg:mx-[100px]">
      <h2 className="dual-section-heading mb-8">Terms & Conditions</h2>

      <p className="content-section mb-5">
        Welcome to PPS Energy Solutions. By accessing or using our website
        (ppsenergy.in) and our services, you agree to comply with the following
        Terms & Conditions. Please read them carefully before using our site or
        submitting any enquiries.
      </p>

      {/* 1 */}
      <h3 className="contact-heading mt-2">1. Acceptance of Terms</h3>
      <p className="content-section mb-5">
        By using our website or submitting the Quick Enquiry form, you agree to
        be bound by these Terms & Conditions. If you do not agree, please
        discontinue the use of our website.
      </p>

      {/* 2 */}
      <h3 className="contact-heading mt-7">2. Use of Website</h3>
      <p className="content">You agree not to misuse the website, including:</p>
      <ul className="content-section space-y-1 list-disc list-inside mb-5">
        <li>Submitting false or misleading information</li>
        <li>Attempting unauthorized access to systems or data</li>
        <li>Engaging in activities that disrupt website functionality</li>
        <li>Copying or reusing content without permission</li>
      </ul>

      {/* 3 */}
      <h3 className="contact-heading mt-7">3. Services and Information</h3>
      <p className="content-section mb-5">
        PPS Energy Solutions provides consultancy, audits, and related services
        in the energy sector. Information provided on our website is for general
        purposes and may be updated periodically. We do not guarantee that all
        content is always accurate or up to date.
      </p>

      {/* 4 */}
      <h3 className="contact-heading mt-7">4. Submissions Through Quick Enquiry</h3>
      <p className="content-section mb-5">
        By submitting the Quick Enquiry form, you consent to us contacting you
        regarding your request. All information submitted must be accurate and
        belong to you. Misuse or spamming through the form may lead to access
        restrictions.
      </p>

      {/* 5 */}
      <h3 className="contact-heading mt-7">5. Intellectual Property Rights</h3>
      <p className="content-section mb-5">
        All website content—including text, images, graphics, and branding—is
        the property of PPS Energy Solutions. You may not copy, reproduce, or
        distribute any content for commercial purposes without written
        permission.
      </p>

      {/* 6 */}
      <h3 className="contact-heading mt-7">6. Limitation of Liability</h3>
      <p className="content-section mb-5">
        PPS Energy Solutions is not liable for any direct, indirect, or
        incidental damages resulting from:
        <br />
        • Use of our website  
        • Reliance on provided information  
        • Delays or interruptions in website accessibility  
      </p>

      {/* 7 */}
      <h3 className="contact-heading mt-7">7. Third-Party Links</h3>
      <p className="content-section mb-5">
        Our website may contain links to third-party websites. We are not
        responsible for the content, privacy practices, or accuracy of these
        external sites.
      </p>

      {/* 8 */}
      <h3 className="contact-heading mt-7">8. Privacy Policy</h3>
      <p className="content-section mb-5">
        Your submission through the Quick Enquiry form and general use of our
        website is also governed by our Privacy Policy. Please review it to
        understand how we handle your personal data.
      </p>

      {/* 9 */}
      <h3 className="contact-heading mt-7">
        9. Modifications to Terms & Conditions
      </h3>
      <p className="content-section mb-5">
        We may update or modify these Terms & Conditions at any time. Updated
        versions will be posted on this page with a new effective date. We
        encourage you to review this policy periodically.
      </p>

      {/* 10 */}
      <h3 className="contact-heading mt-7">10. Contact Us</h3>
      <p className="content-section">
        For any enquiries regarding these Terms & Conditions, contact:
        <br />
        PPS Energy Solutions
        <br />
        <Mail className="inline w-5 h-5 mr-1" /> Email: office@ppsenergy.in
        <br />
        <Globe className="inline w-5 h-5 mr-1" /> Website: https://ppsenergy.in
        <br />
        <MapPin className="inline w-5 h-5 mr-1" /> Address: 18, 3rd Floor,
        Ashirwad Building, Girish Society, Warje – 411058, Pune, India
      </p>
    </section>
  );
}
