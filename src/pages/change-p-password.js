import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Link} from "react-router-dom";
import ECommerceLayout from "../components/layouts/ECommerceLayout";
import { useSelector } from "react-redux";
import {
	FormCheckBox,
	FormInputComp,
	FormInputPasswordComp,
	FormLabel,
	FormSubmitButton,
	LoadingBtn,
  } from "../components/AuthPageComponents";
  import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
const ChangePPassword = () => {
	const token = useSelector((state) => state.auth.token);
	console.log(token)
	const [password, setpassword] = useState()
	const [confirm_password, setconfirm_password] = useState()
	const baseUrl = "http://13.127.209.252/auth";
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password===confirm_password) {
		  const res = await axios.post(`${baseUrl}/changepassword/`, {
			password:password,
			confirm_password:confirm_password
		  },{
			headers: {
			  Authorization: `Bearer ${token}`,
			},
		  })
		  if (res?.code === "ERR_BAD_REQUEST") {
			toast.error(res.response.data.message);
		  }
		  if (res?.response?.status === 400) {
			toast.error(res?.response?.data?.errors?.non_field_errors[0]);
		  }
		  if (res?.status === 200) {
			toast.success(res.data?.status);
		  }
		}
	   else {
		toast.error("Password Not Matching");
	   }
	}
	return (
		<ECommerceLayout>
			<div className="pt-4 max-w-6xl mx-auto mb-10 ">
				<Link to="/orders" className="flex items-center mb-12 gap-2 text-gray-600 cursor-pointer">
					<FontAwesomeIcon icon={faArrowLeft} />
					<h3 className=" font-sans-pro text-3xl font-semibold">Change Password</h3>
				</Link>
				
				<div className="w-96 mx-auto mt-40 pb-10">
				<form onSubmit={handleSubmit} className="space-y-4 ">
      
      
      <div>
        <FormLabel text={"Enter Password"} />
        <FormInputComp
          type="password"
          name="password"
		  onChange={(e) => setpassword(e.target.value)}
          value={password}
          placeholder="Enter Password"
        />
      </div>
	  <div>
        <FormLabel text={"Confirm Password"} />
        <FormInputComp
          type="password"
          name="password"
		  onChange={(e) => setconfirm_password(e.target.value)}
          value={confirm_password}
          placeholder="Confirm Password"
        />
      </div>
      <div className="flex items-center gap-2 text-sm text-muted tracking-wide">
      </div>
      <div className="pt-2">
       <FormSubmitButton text="Submit" />
      </div>
    </form>
				</div>
			</div>
		</ECommerceLayout>
	);
};

export default ChangePPassword;
