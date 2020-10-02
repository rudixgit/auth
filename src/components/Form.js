import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        id="first-name"
        className="ant-input"
        name="firstName"
        placeholder="first name"
        ref={register({ required: true, maxLength: 20 })}
      />

      {errors.firstName && 'First name is required'}

      <input
        className="ant-input"
        placeholder="email"
        name="email"
        ref={register({
          required: true,
          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
        })}
      />
      {errors.email && 'not valid email adress'}

      <button type="submit" className="ant-btn ant-btn-primary ant-btn-lg">
        Add Record
      </button>
    </form>
  );
};
export default Form;
