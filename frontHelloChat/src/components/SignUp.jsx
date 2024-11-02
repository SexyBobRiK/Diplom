import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import userSignIn from "../app/services/user/userSignIn";

import "../app/css/SignUp.css";

const signIn = yup.object().shape({
  userEmail: yup.string().email("Недопустимый формат").required("Данное поле обязательно!"),
  userPassword: yup.string().min(8, "Минимальная длина пароля 4 символа").max(21, "Максимальная длина пароля 21 символ").required("Данное поле обязательно!")
}) 

export default function SignUp() {

  const regUser = async (data) => {
    try {
        const res = await userSignIn(data);
        console.log(res);
    } catch (error) {
        console.log(error); // Логируем ошибку
    }
}

  useEffect(() => {
    document.title = "Sign Up";
  }, []);

  return (
    <>
      <div className="container-regis">
        <div className="main-regis">
          <h1 className="title-regis">Вход</h1>
          <Formik
            initialValues={{userEmail: "", userPassword: "",}}
            validationSchema={signIn}
            onSubmit={(values, { setSubmitting }) => {
              console.log(1);
              
              regUser(values).finally(() => setSubmitting(false))
            }}
          >
            {({isSubmitting})=> (
              <Form className="form-regis">
                <div className="email-regis">
              <Field
                className="email-regis-i"
                type="email"
                placeholder="E-mail"
                name="userEmail"
              />
              <ErrorMessage name="userEmail" component="div" className="err-msg" />
            </div>
            <div className="password-regis">
              <Field
                className="pass-regis"
                type="password"
                placeholder="Пароль"
                name="userPassword"
              />
              <ErrorMessage name="userPassword" component="div" className="err-msg"/>
            </div>
            <div className="submit-regis">
              <button type="submit" className="submit-btn"  disabled={isSubmitting} >Войти</button>
              <NavLink to={"/registration"}>
                <button className="reg-btn">Регистрация</button>
              </NavLink>
            </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
