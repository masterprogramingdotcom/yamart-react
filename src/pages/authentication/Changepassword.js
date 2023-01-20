import React, {useState} from "react";
import {Link} from "react-router-dom";
import { AuthPageTopInfo } from "../../components/AuthPageComponents";
import AuthPageLayout from "../../components/layouts/AuthPageLayout";
import { useFormik } from "formik";

import {
	FormCheckBox,
	FormInputComp,
	FormInputPasswordComp,
	FormLabel,
	FormSubmitButton,
	LoadingBtn,
  } from "../../components/AuthPageComponents";
const Changepassword = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { values, errors, handleChange, handleSubmit } = useFormik({
		initialValues: {
		  name: "",
		  username: "",
		  password: "",
		  confirm_password: "",
		  email: "",
		},})
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
				title={"Change Password"}
			  />
			  <form onSubmit={handleSubmit} className="space-y-4 ">
      
      
      <div>
        <FormLabel text={"Enter Password"} />
        <FormInputComp
          type="password"
          name="password"
          onChange={handleChange}
          value={values.email}
          placeholder="Enter Password"
        />
        {errors && <p className="text-red-600 text-sm mt-2">{errors.email}</p>}
      </div>
      <div>
        <FormLabel text={"Confirm Password"} />
        <FormInputComp
          type="password"
          name="password"
          onChange={handleChange}
          value={values.email}
          placeholder="Confirm Password"
        />
        {errors && <p className="text-red-600 text-sm mt-2">{errors.email}</p>}
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

export default Changepassword;
