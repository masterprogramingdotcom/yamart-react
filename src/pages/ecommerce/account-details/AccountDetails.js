import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Link} from "react-router-dom";
import ECommerceLayout from "../../../components/layouts/ECommerceLayout";
import AccountdetailsTabs from "./AccountDetailsTabs";
const OrderDetails = () => {
	return (
		<ECommerceLayout>
			<div className="pt-4 max-w-6xl mx-auto mb-10">
				<Link to="/orders" className="flex items-center mb-12 gap-2 text-gray-600 cursor-pointer">
					<FontAwesomeIcon icon={faArrowLeft} />
					<h3 className=" font-sans-pro text-3xl font-semibold">Complete Account Details</h3>
				</Link>
				
				<div className="mt-8 pb-10">
					<AccountdetailsTabs />
				</div>
			</div>
		</ECommerceLayout>
	);
};

export default OrderDetails;
