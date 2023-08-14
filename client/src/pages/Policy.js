import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
    <div className="row contactus dashboard ">
      <div className="col-md-6 ">
        <img
          src="/images/contactus.jpeg"
          alt="contactus"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-md-4">
      <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
        <p>At <b>Khush chromaclothes</b>, we are committed to protecting your privacy and ensuring the 
          security of your personal information. This Privacy Policy outlines how we collect, use, disclose, 
          and safeguard the data you provide while visiting our website and engaging with our services. By 
          accessing or using our website, you agree to the practices described in this policy.</p>
        <p><b>Data Security:</b><br></br>
        We implement security measures to protect your personal information from unauthorized access, 
        alteration, disclosure, or destruction. However, no method of transmission over the internet or 
        electronic storage is completely secure, and we cannot guarantee absolute security.</p>
      </div>
    </div>
  </Layout>
  );
};

export default Policy;