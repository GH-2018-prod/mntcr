import React, { useEffect } from "react";
import { useFormik } from "formik"
//import { Navigation, Footer } from "../"
import  useSubmit  from "../../hooks/useSubmit";

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import { useAlertContext } from "../../context/alertContext";

export const FormContent = () => {

const { isLoading, response, submit } = useSubmit()
const { onOpen } = useAlertContext()

  const formik = useFormik({
    initialValues:{
      firstName: "",
      email: "",
      comment: "",
    },
    onSubmit:(values) => {
      submit('https://john.com/contactme', values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Este campo es requerido(Nombre)"),
      email: Yup.string().email("correo invalido").required("Este campo es requerido(correo)"),
      comment:Yup.string()
        .min(25, "Favor revisar tu comentario. Minimo 25 caracteres")
        .required("Este campo es requerido")
    })
  })

  useEffect(() => {
    if(response){
      onOpen(response.type, response.message)
      if(response.type === 'success'){
        formik.resetForm()
      }
    }
  }, [response])
  
  return (
    <>
        <VStack w="100%" p={32} bg="#3574a5c7">
          <Heading color="#ffffff" fontSize={54}>
            Contact me
          </Heading>
          <Box p={6} minW="700px">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={8}>
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName" color="#ffffff" fontSize={20}>Nombre</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email" color="#ffffff" fontSize={20}>Email</FormLabel>
                <Input
                  id="email"
                  name="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment" color="#ffffff" fontSize={20}>Su mensaje</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                colorScheme="purple"
                width="full"
              >
                Enviar
              </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
    </>
  );
};