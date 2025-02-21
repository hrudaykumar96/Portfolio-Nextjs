"use client"

import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const ResetPasswordForm = () => {
  
  const router = useRouter();
  /* form validation */
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: yup.object({
      email: yup.string().required('Enter Email Address').email('Enter Valid Email'),
      password: yup.string().required('Enter New Password').min(8, 'Password should be atleast 8 characters').max(12,'Password should not exceed greater than 12 characters'),
      confirmPassword: yup
        .string()
        .required('Confirm Password is required')
        .oneOf([yup.ref('password'), null], 'Passwords must match')
    }),
    onSubmit: async(values) => {
      console.log(values)
    }
  });

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center overflow-hidden">
      <section className="w-full py-16 px-6 md:px-16 mt-24 flex justify-center items-center">
        <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-xl backdrop-blur-md">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-semibold text-teal-400">Reset Password</h2>
          </div>

          <form className="space-y-8 mt-8" onSubmit={formik.handleSubmit}>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300">Email</label>
              <div className="flex items-center bg-gray-700 rounded-lg mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`w-full p-4 rounded-lg bg-gray-700 text-white focus:ring-teal-500 focus:border-teal-500 
                    ${formik.touched.email && formik.errors.email ? 'border-2 border-red-500' : 'border border-transparent'}`}
                  placeholder="Your Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              )}
            </div>

            {/* New Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-300">New Password</label>
              <div className="flex items-center bg-gray-700 rounded-lg mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className={`w-full p-4 rounded-lg bg-gray-700 text-white focus:ring-teal-500 focus:border-teal-500 
                    ${formik.touched.password && formik.errors.password ? 'border-2 border-red-500' : 'border border-transparent'}`}
                  placeholder="New Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-300">Confirm Password</label>
              <div className="flex items-center bg-gray-700 rounded-lg mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className={`w-full p-4 rounded-lg bg-gray-700 text-white focus:ring-teal-500 focus:border-teal-500 
                    ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-2 border-red-500' : 'border border-transparent'}`}
                  placeholder="Confirm New Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
              </div>
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-all duration-300"
            >
              Reset Password
            </button>
          </form>

          {/* Back to Login Link */}
          <div className="text-center mt-6">
            <Link href="/login" className="text-teal-400 hover:underline">
              Back to Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResetPasswordForm;