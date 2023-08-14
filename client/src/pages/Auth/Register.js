import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    // Form Function
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
          const res = await axios.post("/api/v1/auth/register", {
            name, email, password, phone, address,answer,
          });
          if (res && res.data.success) {
            toast.success(res.data && res.data.message);
            navigate("/login");
          } else {
            toast.error(res.data.message);
          }
        }
        catch(error){
          console.log(error);
          toast.error("something went wrong");
        }
    };
  return (
    <Layout title="Register - Khush ChromaCloth">
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
  <div className="mb-3">
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder='Name' required/>
  </div>
  <div className="mb-3">
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder='Email' required/>
  </div>

  <div className="mb-3">
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder='Password' required/>
  </div>
  <div className="mb-3">
    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="phone" placeholder='Phone' required/>
  </div>
  <div className="mb-3">
    <input type="text" value={address}  onChange={(e) => setAddress(e.target.value)}className="form-control" id="address" placeholder='Address' required/>
  </div>
  <div className="mb-3">
    <input type="text" value={answer}  onChange={(e) => setAnswer(e.target.value)}className="form-control" id="answer" placeholder='Mother`s maiden name.' required/>
  </div>

  <button type="submit" className="btn btn-primary">REGISTER</button>
</form>

        </div>
    </Layout>
  )
}

export default Register;