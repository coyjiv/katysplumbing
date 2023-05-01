import { useFormik } from 'formik';
import { createAlert } from '../services/alert';
import DropdownBusiness from './buttons/DropdownBusiness';
import { validationSchema } from '../constants/validationSchema';
import DropdownServices from './buttons/DropdownServices';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

export const ApplyForm = () => {
  // EmailJS + Formik
  const form = useRef();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      emailjs
        .send(
          'service_nn8mdci', // Service ID
          'template_9e7vc0q', // Template ID
          values,
          'L5OhLziPBcP0IJ5WN' // Public key
        )
        .then((result, error) => {
          createAlert({
            type: 'success',
            text: 'Message sent successfully , we will contact you shortly',
          });
          console.log('Result text', result);
          console.log('Result text', error.text);
        })
        .catch((error) => {
          createAlert({ text: error.text, type: 'error' });
          console.log('Error', error);
        });
      formik.handleReset();
    },
  });
  return (
    <section className='bg-bg pt-20' id='form1'>
      <h1 className='text-center text-white text-3xl mb-10 lg:text-5xl font-bold lg:mb-20'>
        Client application
      </h1>

      <div className='blya flex justify-between'>
       <div className='h-40'>
          <img
            src='https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_3x2.jpg'
            alt=''
            className='w-1/2 mx-0 object-cover'
          />
       </div>
        <form
          ref={form}
          onSubmit={formik.handleSubmit}
          className='flex justify-between lg:items-end items-center lg:pr-24 flex-col w-1/2 '
          id='apply-form'
        >
          {/* // first name */}

          <div className='first-row lg:flex justify-between  gap-4 w-4/5'>
            <div className='rounded-md px-3 pt-2.5 pb-1.5 mb-4 lg:mb-0 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-ultraViolet lg:w-1/2'>
              <label
                htmlFor='name'
                className='block text-xs font-medium text-darkBrown-100'
              >
                First Name *
              </label>
              <input
                onChange={(e) =>
                  formik.setFieldValue('firstName', e.target.value)
                }
                value={formik.values.firstName}
                type='text'
                name='firstName'
                id='name'
                className='block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='Alex'
              />
              {formik.errors.firstName && (
                <span className='text-red-600 text-sm'>
                  {formik.errors.firstName}
                </span>
              )}
            </div>
            {/* // last name */}

            <div className='rounded-md px-3 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-ultraViolet  lg:w-1/2 mb-4 lg:mb-0'>
              <label
                htmlFor='surname'
                className='block text-xs font-medium text-darkBrown-100'
              >
                Last Name *
              </label>
              <input
                onChange={(e) =>
                  formik.setFieldValue('lastName', e.target.value)
                }
                type='text'
                name='lastName'
                value={formik.values.lastName}
                id='surname'
                className='block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='Brown'
              />
              {formik.errors.lastName && (
                <span className='text-red-600 text-sm'>
                  {formik.errors.lastName}
                </span>
              )}
            </div>
          </div>

          {/* email */}

          <div className=' rounded-md px-3 pt-2.5 pb-1.5 mb-4 lg:mb-0 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-ultraViolet lg:w-2/4 lg:mt-4 w-4/5  '>
            <label
              htmlFor='email'
              className='block text-xs font-medium text-darkBrown-100'
            >
              Email *
            </label>

            <div className='relative'>
              <input
                onChange={(e) => formik.setFieldValue('email', e.target.value)}
                type='email'
                name='email'
                id='email'
                value={formik.values.email}
                className=' block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='alexbrown@example.com'
              />
              {formik.errors.email && (
                <span className='text-red-600 text-sm'>
                  {formik.errors.email}
                </span>
              )}
            </div>
          </div>

          {/* phone number */}
          <div className=' rounded-md px-3 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-ultraViolet lg:w-2/4 lg:mt-4 w-4/5  '>
            <label
              htmlFor='phone'
              className='block text-xs font-medium text-darkBrown-100'
            >
              Phone number *
            </label>

            <div className='relative'>
              <input
                onChange={(e) => formik.setFieldValue('phone', e.target.value)}
                value={formik.values.phone}
                type='text'
                name='phone'
                id='phone'
                className='block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='1XXX-XXX-XXXX'
              />
              {formik.errors.phone && (
                <span className='text-red-600 text-sm'>
                  {formik.errors.phone}
                </span>
              )}
            </div>
          </div>
          {/* additional info */}
          <div className=' rounded-md px-3 mt-4 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-ultraViolet lg:w-2/4 lg:mt-4 w-4/5  '>
            <label
              htmlFor='message'
              className='block text-xs font-medium text-darkBrown-100'
            >
              Additional information
            </label>

            <div className='relative'>
              <input
                onChange={(e) =>
                  formik.setFieldValue('message', e.target.value)
                }
                value={formik.values.message}
                type='text'
                name='message'
                id='message'
                className=' block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='Leave your message here '
              />
            </div>
          </div>
          <div className=' lg:flex justify-between mt-4 h-36 items-center lg:h-48 lg:w-2/4 gap-4 w-4/5'>
            <button
              value='Send'
              onClick={formik.handleSubmit}
              disabled={formik.isSubmitting}
              type='submit'
              className=' flex justify-center w-full text-center rounded-md text-lg bg-ultraViolet mx-auto lg:w-1/2 py-4  px-2.5 font-semibold text-white shadow-sm hover:bg-brightViolet duration-300 disabled:opacity-50 disabled:cursor-not-allowed '
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
