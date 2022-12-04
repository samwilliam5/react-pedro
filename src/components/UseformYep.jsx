import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  fullName: yup.string().required("Your Full Name is required"),
  email: yup.string().email().required(),
  age: yup.number().positive().min(19).max(60).required(),
  password: yup.string().min(8).max(20).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")])
    .required(),
});

const UseformYep = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Register</h3>

        <div className="form-group">
          <label>Full name</label>
        </div>
        <input
          type="text"
          className="form-control  w-25 mx-auto my-3"
          placeholder="Full name"
          {...register("fullName")}
        />
        <div className="form-group">
          <p className="text-danger">{errors.fullName?.message}</p>
          <label>Email</label>
        </div>

        <input
          type="email"
          className="form-control w-25 mx-auto my-3"
          placeholder="Enter email"
          {...register("email")}
        />
        <div className="form-group">
          <p className="text-danger">{errors.email?.message}</p>
          <label>Age</label>
          <input
            type="number"
            className="form-control w-25 mx-auto my-3"
            placeholder="Age"
            {...register("age")}
          />
          <p className="text-danger">{errors.age?.message}</p>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control w-25 mx-auto my-3"
            placeholder="Enter password"
            {...register("password")}
          />
          <p className="text-danger">{errors.password?.message}</p>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control w-25 mx-auto my-3"
            placeholder="Confirm password"
            {...register("confirmPassword")}
          />
          <p className="text-danger">{errors.confirmPassword?.message}</p>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
        <p className="forgot-password text-right">
          Already registered <Link to="/">log in?</Link>
        </p>
      </form>
    </div>
  );
};

export default UseformYep;
