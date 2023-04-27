import styled from "styled-components";
import { Form as FormikForm, Field } from "formik";
import { HiSearch } from "react-icons/hi";

export const Form = styled(FormikForm)`
display: flex;
gap: 6px;
align-items: center;
`;

export const Input = styled(Field)`
font-size: 22px;
padding: 6px;
background-color: transparent;
border: none;
outline: none;
border-bottom: 1px solid #fff;
border-radius: 4px;
color: #fff;

::placeholder {
  color: #fff;
}
`;

export const Button = styled.button`
background-color: transparent;
border: none;
transition: transform 300ms linear;

:hover {
  transform: scale(1.2);
}
`;

export const Icon = styled(HiSearch)`
fill: #fff;
font-size: 38px;
`;