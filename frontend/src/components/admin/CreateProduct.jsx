import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton } from "./CommonStyled";
import { productsCreate } from "../../slices/productsSlice";
import { registerUser } from "../../slices/authSlice";
import { toast } from "react-toastify";
import axios from "axios";
import { url } from "../../slices/api";
const CreateProduct = () => {
  const dispatch = useDispatch();
  const { createStatus } = useSelector((state) => state.products);

  const [user, setUser] = useState({
    role:"",
    name: "",
    desc:"",
    email: "",
    password: "",
  });
  const [skill, setSkill] = useState({
    skill1:"",
    skill2: "",
    skill3:"",
    skill4: "",
  });

  // const handleProductImageUpload = (e) => {
  //   const file = e.target.files[0];

  //   TransformFileData(file);
  // };

  // const TransformFileData = (file) => {
  //   const reader = new FileReader();

  //   if (file) {
  //     reader.readAsDataURL(file);
  //     reader.onloadend = () => {
  //       setProductImg(reader.result);
  //     };
  //   } else {
  //     setProductImg("");
  //   }
  // };
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    console.log(user);

    dispatch(registerUser(user));

    const pushskill = async () =>{
      try {
        const token = await axios.post(`${url}/allrequest/skills`, {
             skill
        });
      } catch (error) {
        console.log('skill error');
      }
    }
    pushskill()
    toast.success("Client Added", { position: "top-right" });
    // navigate('/Home.js')
  };

  return (
    <StyledCreateProduct>
      <StyledForm onSubmit={handleSubmit}>
        <h3>Create a Client</h3>
      
        <select onChange={(e) => setUser({ ...user, role: e.target.value })}>
          <option value="">Select Role</option>
          <option value="TPO">TPO</option>
          <option value="Company">Company</option>
          {/* // <option value="xiomi">Xiomi</option> */}
        </select>
       
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="desc"
          onChange={(e) => setUser({ ...user, desc: e.target.value })}
        />

        {/* ........skill............... */}
        
        <input
          type="text"
          placeholder="Add first skill"
          onChange={(e) => setSkill({ ...skill, skill1: e.target.value })}
        />
         <input
          type="text"
          placeholder="Add second skill"
          onChange={(e) => setSkill({ ...skill, skill2: e.target.value })}
        />
        
        
        {/* ............skill............... */}
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
          <input
          type="password"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <PrimaryButton type="submit">
          {createStatus === "pending" ? "Submitting" : "Submit"}
        </PrimaryButton>
      </StyledForm>
      {/* <ImagePreview>
        {productImg ? (
          <>
            <img src={productImg} alt="error!" />
          </>
        ) : (
          <p>Product image upload preview will appear here!</p>
        )}
      </ImagePreview> */}
    </StyledCreateProduct>
  );
};

export default CreateProduct;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;

  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;

    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }

  select {
    color: rgb(95, 95, 95);
  }
`;

const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgb(78, 78, 78);

  img {
    max-width: 100%;
  }
`;
