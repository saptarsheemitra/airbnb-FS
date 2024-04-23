"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged in");
        router.refresh();
        // reset();
        loginModal.onClose();
      } else if (callback?.error) {
        toast.error(callback.error);
      } else {
        toast.error("Something went wrong");
      }
    });
  };

  const toggleModal = ()=>{
    loginModal.onClose();
    registerModal.onOpen();
  }
  
  const BodyContent = () => {
    return (
      <div className="flex flex-col gap-4">
        <Heading title="Welcome back" subtitle="Login to your account! " />
        {/* <Input
          id="name"
          label="Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        /> */}
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

  const FooterContent = () => {
    return (
      <div className="flex flex-col gap-4 mt-3">
        <hr />
        <Button
          outline
          label="Continue with Google"
          Icon={FcGoogle}
          onClick={() => {signIn('google')}}
        />
        <Button
          outline
          label="Continue with GitHub"
          Icon={AiFillGithub}
          onClick={() => {signIn('github') }}
        />
        <div className="text-neutral-500 text-center font-light mt-2">
          <div className="flex flex-row justify-center items-center gap-2 ">
            <div>First time using Airbnb?</div>
            <div
              onClick={toggleModal}
              className="text-neutral-800 font-semibold cursor-pointer hover:underline"
            >
              Create an account
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Modal
      disabled={isLoading}
      title="Login"
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="Continue"
      body={<BodyContent />}
      // body={bodyContent}
      footer={<FooterContent />}
    />
  );
};

export default LoginModal;
