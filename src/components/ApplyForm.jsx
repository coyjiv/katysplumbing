import { useFormik } from "formik";
import { createAlert } from "../services/alert";
import DropdownBusiness from "./buttons/DropdownBusiness";
import { validationSchema } from "../constants/validationSchema";
import DropdownServices from "./buttons/DropdownServices";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export const ApplyForm = () => {
  // EmailJS + Formik
  const form = useRef();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    licenseNumber: "",
    phoneNumber: "",
    additionalInformation: "",
    services: "",
    businessType: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      emailjs
        .send(
          "service_gnpclny", // Service ID
          "template_cfw4dja", // Template ID
          values,
          "r2sy_1k4kc53UiLwG" // Public key
        )
        .then((result, error) => {
          createAlert({
            type: "success",
            text: "Message sent successfully , we will contact you shortly",
          });
          console.log("Result text", result);
          console.log("Result text", error.text);
        })
        .catch((error) => {
          createAlert({ text: error.text, type: "error" });
          console.log("Error", error);
        });
      formik.handleReset();
    },
  });
  return (
    <div className="bg-[#D4A96E] pt-20">
      <h1 className="text-center text-darkBrown-100 text-3xl mb-10 lg:text-5xl font-bold lg:mb-20">
        Client application
      </h1>

      <form
        ref={form}
        onSubmit={formik.handleSubmit}
        className="flex justify-center items-center flex-col "
        id="apply-form"
      >
        {/* // first name */}

        <div className="first-row lg:flex justify-between lg:w-2/3 gap-4 w-4/5">
          <div className="rounded-md px-3 pt-2.5 pb-1.5 mb-4 lg:mb-0 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f] lg:w-1/2">
            <label
              htmlFor="name"
              className="block text-xs font-medium text-darkBrown-100"
            >
              First Name *
            </label>
            <input
              onChange={(e) =>
                formik.setFieldValue("firstName", e.target.value)
              }
              value={formik.values.firstName}
              type="text"
              name="firstName"
              id="name"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Alex"
            />
            {formik.errors.firstName && (
              <span className="text-red-600 text-sm">
                {formik.errors.firstName}
              </span>
            )}
          </div>
          {/* // last name */}

          <div className="rounded-md px-3 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f]  lg:w-1/2 mb-4 lg:mb-0">
            <label
              htmlFor="surname"
              className="block text-xs font-medium text-darkBrown-100"
            >
              Last Name *
            </label>
            <input
              onChange={(e) => formik.setFieldValue("lastName", e.target.value)}
              type="text"
              name="lastName"
              value={formik.values.lastName}
              id="surname"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Brown"
            />
            {formik.errors.lastName && (
              <span className="text-red-600 text-sm">
                {formik.errors.lastName}
              </span>
            )}
          </div>
        </div>

        {/* email */}

        <div className=" rounded-md px-3 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f] lg:w-2/3 lg:mt-4 w-4/5  ">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-darkBrown-100"
          >
            Email *
          </label>

          <div className="relative">
            <input
              onChange={(e) => formik.setFieldValue("email", e.target.value)}
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              className=" block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="alexbrown@example.com"
            />
            {formik.errors.email && (
              <span className="text-red-600 text-sm">
                {formik.errors.email}
              </span>
            )}
          </div>
        </div>

        {/* company name */}

        <div className="rounded-md px-3 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f] lg:w-2/3 mt-4 w-4/5  ">
          <label
            htmlFor="companyname"
            className="block text-xs font-medium text-darkBrown-100"
          >
            Company name (optional)
          </label>
          <input
            onChange={(e) =>
              formik.setFieldValue("companyName", e.target.value)
            }
            type="text"
            name="companyName"
            value={formik.values.companyName}
            id="companyName"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Example LLC"
          />
        </div>

        {/* license number */}

        <div className="rounded-md px-3 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f] lg:w-2/3 mt-4 w-4/5  ">
          <label
            htmlFor="license"
            className="block text-xs font-medium text-darkBrown-100"
          >
            License number (optional)
          </label>
          <input
            onChange={(e) =>
              formik.setFieldValue("licenseNumber", e.target.value)
            }
            type="text"
            value={formik.values.licenseNumber}
            name="licenseNumber"
            id="license"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="XXX-XXX-XXX"
          />
        </div>

        {/* business type and services type */}

        <div className="lg:flex justify-between lg:w-2/3 w-4/5 gap-4 my-4 lg:mt-4 lg:mb-0">
          <div className="lg:w-1/2 bg-white rounded-lg mb-4 lg:mb-0">
            <p className="text-center">Services type:</p>
            <DropdownServices
              onChange={(value) => formik.setFieldValue("services", value)}
            />
          </div>

          <div className="lg:w-1/2 bg-white rounded-lg">
            <p className="text-center">Business type:</p>
            <DropdownBusiness
              onChange={(value) => formik.setFieldValue("businessType", value)}
            />
          </div>
        </div>

        {/* phone number */}
        <div className=" rounded-md px-3 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f] lg:w-2/3 lg:mt-4 w-4/5  ">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-darkBrown-100"
          >
            Phone number *
          </label>

          <div className="relative">
            <input
              onChange={(e) =>
                formik.setFieldValue("phoneNumber", e.target.value)
              }
              value={formik.values.phoneNumber}
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="1XXX-XXX-XXXX"
            />
            {formik.errors.phoneNumber && (
              <span className="text-red-600 text-sm">
                {formik.errors.phoneNumber}
              </span>
            )}
          </div>
        </div>
        {/* additional info */}
        <div className=" rounded-md px-3 mt-4 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f] lg:w-2/3 lg:mt-4 w-4/5  ">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-darkBrown-100"
          >
            Additional information
          </label>

          <div className="relative">
            <input
              onChange={(e) =>
                formik.setFieldValue("additionalInformation", e.target.value)
              }
              value={formik.values.additionalInformation}
              type="text"
              name="additionalInformation"
              id="additionalInformation"
              className=" block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Leave your message here "
            />
          </div>
        </div>
        <div className=" lg:flex justify-between mt-4 h-36 items-center lg:h-48 lg:w-2/3 gap-4 w-4/5">
          <button
            value="Send"
            onClick={formik.handleSubmit}
            disabled={formik.isSubmitting}
            type="submit"
            className=" flex justify-center w-full text-center rounded-md text-lg bg-[#986235] mx-auto lg:w-1/2 py-4  px-2.5 font-semibold text-white shadow-sm hover:bg-[#a67651] duration-300 disabled:opacity-50 disabled:cursor-not-allowed "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};


