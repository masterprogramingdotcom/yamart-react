import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import ECommerceLayout from "../../../components/layouts/ECommerceLayout";
import AccountdetailsTabs from "./AccountDetailsTabs";
import { useSelector } from "react-redux";
import axios from "axios"
import { useState } from "react";
import { useFormik } from "formik";
import { Orderget } from "../../../api/orders";
import { toast } from "react-toastify";


const AccountDetails = () => {
	const [isLoading, setIsLoading] = useState(false);
	const token = useSelector((state) => state.auth.token);
	const [gstdata, setgstdata] = useState()
	const accountDetailsFormik = useFormik({
		initialValues: {
		  gstin: "",
		  gst_verify:"true",
		  business_type: "",
		  business_name: "",
		  business_address: "",
		  pan_number: "",
		  address_1: "",
		  address_2: "",
		  pincode: "",
		  city: "",
		  state: "",
		  account_number: "",
		  ifsc_code: "",
		  bank_image: "",
		  store_name: "",
		  full_name: "",
		},
		onSubmit: (values, action) => {
			console.log(values);
			handlePostProduct(values);
		  },
		});
	    const handlePostProduct = async (values) => {
			setIsLoading(true);
			const res = await Orderget(values, token);
			console.log(res);
		
			if (res?.status === 201) {
				setIsLoading(false);
			  toast.success("Product Created!");
			}
		
			if (res?.code === "ERR_BAD_REQUEST") {
			  toast.error("Some Error! please try again!");
			}
		  };
	return (
		<ECommerceLayout>
			<div className="pt-4 max-w-6xl mx-auto mb-10">
				<Link to="/orders" className="flex items-center mb-12 gap-2 text-gray-600 cursor-pointer">
					<FontAwesomeIcon icon={faArrowLeft} />
					<h3 className=" font-sans-pro text-3xl font-semibold">Complete Account Details</h3>
				</Link>
				
				<div className="mt-8 pb-10">
					<AccountdetailsTabs formik={accountDetailsFormik}/>
				</div>
			</div>
		</ECommerceLayout>
	);
};

export default AccountDetails;
