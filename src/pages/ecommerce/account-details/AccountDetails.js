import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import ECommerceLayout from "../../../components/layouts/ECommerceLayout";
import AccountdetailsTabs from "./AccountDetailsTabs";
import axios from "axios"
import { useState } from "react";
const OrderDetails = () => {
	const [gstdata, setgstdata] = useState()
	useEffect(() => {
		fetchData();
	 },[]);
	  const fetchData = async() => {
		await axios.get(`http://sheet.gstincheck.co.in/check/64d333211e76355dbfafcb4a4d3f6a68/27AAACU2414K3ZD/`,)
			 .then((response = response.json()) => {
				console.log(response)
		  console.log(response?.data?.data)
		  setgstdata(response?.data?.data)
				})
		}
	return (
		<ECommerceLayout>
			<div className="pt-4 max-w-6xl mx-auto mb-10">
				<Link to="/orders" className="flex items-center mb-12 gap-2 text-gray-600 cursor-pointer">
					<FontAwesomeIcon icon={faArrowLeft} />
					<h3 className=" font-sans-pro text-3xl font-semibold">Complete Account Details</h3>
				</Link>
				
				<div className="mt-8 pb-10">
					<AccountdetailsTabs gstalldata={gstdata} />
				</div>
			</div>
		</ECommerceLayout>
	);
};

export default OrderDetails;
