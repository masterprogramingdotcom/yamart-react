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
import { accountpatch } from "../../../api/account";
import { toast } from "react-toastify";


const AccountDetails = () => {
	const [isLoading, setIsLoading] = useState(false);
	const token = useSelector((state) => state.auth.token);
	const [gstdata, setgstdata] = useState()
	const items = JSON.parse(localStorage.getItem('gstdata'));
			console.log(items)
	const accountDetailsFormik = useFormik({
		enableReinitialize: true,
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
			accountDetailsFormik.setFieldValue(`gstin`,items.gstin );
			accountDetailsFormik.setFieldValue(`business_type`,items.dty );
			accountDetailsFormik.setFieldValue(`business_name`,items.lgmn);
			accountDetailsFormik.setFieldValue(`business_address`,items.pradr?.adr );
			setIsLoading(true);
			const res = await accountpatch(values, token);
			console.log(res);
		
			if (res?.status === 206) {
				setIsLoading(false);
			  toast.success("Profile Data Updated Successful!");
			}
		
			if (res?.code === "ERR_BAD_REQUEST") {
			  toast.error("Some Error! please try again!");
			}
		  };
	return (
		<ECommerceLayout>
			<div className="pt-4 max-w-6xl mx-auto mb-10">
				<Link to="/orders" className="flex items-center mb-3 gap-2 text-gray-600 cursor-pointer">
					<FontAwesomeIcon icon={faArrowLeft} />
					<h3 className=" font-sans-pro text-3xl font-semibold">Complete Account Details</h3>
				</Link>
				<div className="flex justify-end">
				<button
              onClick={accountDetailsFormik.handleSubmit}
     className="bg-primary hover:bg-indigo-500 duration-300 text-white h-[40px] justify-end px-6 rounded-full items-center gap-2 text-sm"
            >
              <span>Save</span>
            </button>
			</div>
				<div className="mt-8 pb-10">
					<AccountdetailsTabs formik={accountDetailsFormik}/>
				</div>
			</div>
		</ECommerceLayout>
	);
};

export default AccountDetails;
