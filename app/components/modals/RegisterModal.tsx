"use client";

import React, { useState } from "react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("api/register", data)
      .then(() => registerModal.onClose())
      .catch((error) => toast.error("Something went wrong"))
      .finally(() => setIsLoading(false));
  };

  const BodyContent = () => {
    return (
      <div className="flex flex-col gap-4">
        <Heading title="Welcome to Airbnb" subtitle="Create an account! " />
        <Input
          id="name"
          label="Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="email"
          label="Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="password"
          label="Password"
          type="password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account! " />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const FooterContent = () => {
    return (
      <div className="flex flex-col gap-4 mt-3">
        <hr />
        <Button
          outline
          label="Continue with Google"
          Icon={FcGoogle}
          onClick={() => {}}
        />
        <Button
          outline
          label="Continue with GitHub"
          Icon={AiFillGithub}
          onClick={() => {}}
        />
        <div className="text-neutral-500 text-center font-light mt-2">
          <div className="flex flex-row justify-center items-center gap-2 ">
            <div>Already have an account?</div>
            <div
              onClick={registerModal.onClose}
              className="text-neutral-800 font-semibold cursor-pointer hover:underline"
            >
              Login
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Modal
      disabled={isLoading}
      title="Register"
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="Continue"
      body={<BodyContent />}
      // body={bodyContent}
      footer={<FooterContent />}
    />
  );
};

export default RegisterModal;
