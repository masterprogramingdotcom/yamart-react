import {
  faArrowLeft,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { productPatch } from "../../../api/product";
import { LoadingBtn } from "../../../components/AuthPageComponents";
import { menDummyImg } from "../../../components/ECommercePageComponents";
import ECommerceLayout from "../../../components/layouts/ECommerceLayout";
import ProductDetailsTabs from "./ProductDetailsTabs";
import { useParams } from "react-router-dom";
import axios from "axios";

const Productedit = () => {
  const baseUrl = "http://13.127.209.252/ecom/product/";
  const { id } = useParams();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [productdata, setproductdata] = useState()
  const handlePostProduct = async (values) => {
    setIsLoading(true);
    const res = await productPatch(values, token, id);
    console.log(res);
  
  /* Compare InitialValues and Onsubmit value */ 
    if (res?.status === 200) {
      toast.success("Product Updated Successful!");
      navigate("/products");
    }

    if (res?.code === "ERR_BAD_REQUEST") {
      toast.error("Some Error! please try again!");
    }
  };

  useEffect(() => {
    fetchData();
 },[id]);
  const fetchData = async() => {
		console.log(id)
    await axios.get(`${baseUrl}${id}/`,{
			headers: {
			  Authorization: `Bearer ${token}`,
			},
		  } )
		 .then((response = response.json()) => {
      console.log(response)
			setproductdata(response?.data?.slug)
			})
    }
    const getModifiedValues = (values, initialValues) => {
      let modifiedValues = {};
      if (values) {
        Object.entries(values).forEach((entry) => {
          let key = entry[0];
          let value = entry[1];
    
          if (value !== initialValues[key]) {
            modifiedValues[key] = value;
          }
        });
      }
    
      return modifiedValues;
    };
  const productDetailsFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: productdata?.title,
      availability: productdata?.total_available,
      description: productdata?.description,
      discount_price: productdata?.discount_price,
      price: productdata?.price,
      tax: "",
      total_available: productdata?.total_available,
      availablity: productdata?.availablity,
      tags: productdata?.tags,
      category: productdata?.category,
      image_1: productdata?.image_1,
      image_2: productdata?.image_2,
      image_3: productdata?.image_3,
      image_4: productdata?.image_4,
      image_5: productdata?.image_5,
      image_6: productdata?.image_6,
      image_7: productdata?.image_7,
      image_8: productdata?.image_8,
      image_9: productdata?.image_9,
      image_10: productdata?.image_10,
    },
    onSubmit: (values, action) => {
      console.log(values);
      const modifiedValues = getModifiedValues(values, productDetailsFormik.initialValues); 
       console.log(modifiedValues)
      handlePostProduct(modifiedValues);
    },
  }
  );
  console.log(productDetailsFormik)

  return (
    <ECommerceLayout>
      <div className="pt-4 max-w-6xl mx-auto mb-10">
        <Link
          to="/products"
          className="flex items-center gap-2 text-gray-600 cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <h4 className="font-sans-pro text-lg font-semibold">Products</h4>
        </Link>
        <div className="flex mt-6 gap-10 items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={menDummyImg}
              className="h-20 w-20 object-cover rounded-md border flex-shrink-0 "
              alt=""
            />
            <div>
              <h4 className="text-2xl font-bold font-sans-pro text-muted">
                Edit Product
              </h4>
              <p className="text-sm max-w-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                officia ullam animi, optio perferendis adipisci tempore
                doloribus. Veniam, fugit est!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* <button className="bg-red-800 hover:bg-rose-700 duration-300 text-white h-[40px]  px-6 rounded-full flex items-center gap-2 text-sm  ">
              <span>Remove</span>{" "}
              <FontAwesomeIcon className="" icon={faTrash} />
            </button> */}
            <button
              onClick={productDetailsFormik.handleSubmit}
              className="bg-primary hover:bg-indigo-500 duration-300 text-white h-[40px]  px-6 rounded-full flex items-center gap-2 text-sm  "
            >
              <span>Save</span> <FontAwesomeIcon className="" icon={faSave} />
            </button>
          </div>
        </div>
        <div className="mt-10 pb-10">
          {isLoading ? (
            <div className="w-full flex justify-center items-center h-full">
              <LoadingBtn />
            </div>
          ) : (
            <ProductDetailsTabs formik={productDetailsFormik} />
          )}
        </div>
      </div>
    </ECommerceLayout>
  );
};

export default Productedit;
