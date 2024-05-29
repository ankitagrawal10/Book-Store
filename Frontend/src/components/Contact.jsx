import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center ">
        <h3 className="font-bold text-lg">Contact Us</h3>
        <form onSubmit={handleSubmit(onSubmit)} method="dialog " className="">
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your Full Name"
              className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="mt-4 space-y-2">
            <span>Message</span>
            <br />
            <textarea
              rows="4"
              cols="35"
              className="border-[2px] px-3 py-1 rounded-md outline-none dark:bg-slate-900 dark:text-white"
              placeholder="Type your Message"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
            <br />
            <button className=" bg-blue-500 text-white cursor-pointer rounded-md p-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
