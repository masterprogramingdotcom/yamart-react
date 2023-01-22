import React, {useState} from "react";
import {Link} from "react-router-dom";
import { AuthPageTopInfo } from "../../components/AuthPageComponents";
import AuthPageLayout from "../../components/layouts/AuthPageLayout";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import {
	FormCheckBox,
	FormInputComp,
	FormInputPasswordComp,
	FormLabel,
	FormSubmitButton,
	LoadingBtn,
  } from "../../components/AuthPageComponents";
const ForgotPassword = () => {
	const [email, setemail] = useState()
	const baseUrl = "http://13.127.209.252/auth";
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (email) {
		  const res = await axios.post(`${baseUrl}/send-reset-password-email/`, {
			email:email
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
		}}
	
	return (
		<AuthPageLayout>
		<div className="flex items-center justify-center px-16 h-full w-full">
		  <div className="flex-1 flex justify-end">
			<div className=" max-w-xl mr-12 text-gray-400 ">
			  <h2 className="text-light text-5xl font-sans-pro font-bold">
				Welcome to <br /> our community
			  </h2>
			  <p className="mt-3 mb-5 ">
				Fuse helps developers to build organized and well coded dashboards
				full of beautiful and rich modules. Join us and start building
				your application today.
			  </p>
			  <p>More than 17k people joined us, it’s your turn</p>
			</div>
		  </div>
		  <div className="flex-1 ">
			<div className="max-w-sm ml-16  w-full">
			  <AuthPageTopInfo
				title={"Forget Password"}
				subtitle={"Already have an account? "}
				linkText="Sign in"
				path="/login"
			  />
			  <form onSubmit={handleSubmit} className="space-y-4 ">
      
      
      <div>
        <FormLabel text={"Email Address"} />
        <FormInputComp
          type="email"
          name="email"
		  onChange={(e) => setemail(e.target.value)}
          value={email}
          placeholder="Enter Email Address"
        />
      </div>
      <div className="flex items-center gap-2 text-sm text-muted tracking-wide">
      </div>
      <div className="pt-2">
        {isLoading ? <LoadingBtn /> : <FormSubmitButton text="Submit" />}
      </div>
    </form>
			</div>
		  </div>
		</div>
	  </AuthPageLayout>
	);
};

export default ForgotPassword;
