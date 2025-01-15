import Email from '@assets/icons/email.svg';
import MessageIcon from '@assets/icons/message.svg';
import './Support.scss';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { removeSpaces } from '@common/lib/utils/utils';
import { Loader } from '../../../common/ui/Loader/Loader';
import axios, { AxiosRequestConfig } from "axios";

type ApiPropsT = {
  method: "get" | "post";
  url: string;
  config?: AxiosRequestConfig;
  error_message?: string;
};

const api = async ({
  method,
  url,
  config,
  error_message,
}: ApiPropsT) => {
  try {
    const response =
      method === "get" ? await axios.get(url) : await axios.post(url, config);
    return response;
  } catch (error) {
    throw new Error(`${error_message}. Error: ${error}`);
  }
};

const BASE_URL = "http://localhost:8080";

export const Support = () => {
  const [isSubscribed, setIsSubscribed] = useState(
    Boolean(localStorage.getItem("isSubscribedToNews")),
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleFormSubmit = async (formData: FieldValues) => {
    const formattedData = removeSpaces(formData.email);

    try {
      setIsLoading(true);
      const result = await api({
        method: "post",
        url: `${BASE_URL}/email`,
        config: {
          headers: {
            "Content-Type": "application/json",
          },
          data: formattedData,
        },
      });
      if (result.status === 200) {
        setIsSubscribed(true);
        localStorage.setItem("isSubscribedToNews", "true");
      }
      reset();
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section className="support">
      <a href="#" className="support__link">
        Support
      </a>
      <h2 className="support__title">Subscribe Newsletter & get</h2>
      <h3 className="support__subtitle">Bank News</h3>
      {isSubscribed ? (
        <div>
          You are already subscribed to the bank's newsletter
        </div>
      ) : isLoading ? (
        <Loader />
      ) : isError ? (
        <div>Ошибка</div>
      ) : (
        <form onSubmit={handleSubmit(handleFormSubmit)} method="post" className="support__form">
          <label htmlFor="email" className='support__label'>
            <img className="support__icon" src={Email} alt="Mail Icon" />
          </label>
          <input
            type="email"
            id="email"
            className="support__input"
            placeholder="Your email"
            {...register("email", {
              required: "Enter email",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Incorrect email address",
              },
            })}
          />
          {errors.email && (
            <div className='error'>{`${errors.email.message}` || "Error"}</div>
          )}
          <button type='submit' className="support__button">
            <img className="support__button-icon" src={MessageIcon} alt="Message Icon" />
            Subscribe
          </button>
        </form>

      )
      }
    </section >
  );
}