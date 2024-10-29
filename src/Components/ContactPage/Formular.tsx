import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

function Formular() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    nombreCompleto: yup.string().required("Nombre completo es obligatorio"),
    telefono: yup.string().required("Teléfono es obligatorio"),
    correo: yup.string().email("Correo inválido").required("Correo electrónico es obligatorio"),
    empresa: yup.string().optional(),
    asunto: yup.string().optional(),
    mensaje: yup.string().required("Mensaje es obligatorio"),
    terms: yup.bool().required().oneOf([true], "Debes aceptar los términos y condiciones"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}
      initialValues={{
        nombreCompleto: 'Nombres y Apellidos',
        telefono: '',
        correo: '',
        empresa: '',
        asunto: '',
        mensaje: '',
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} xs="12" controlId="validationFormikNombreCompleto">
              <Form.Label style={{color:'white'}} >Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                name="nombreCompleto"
                value={values.nombreCompleto}
                onChange={handleChange}
                isInvalid={!!errors.nombreCompleto && touched.nombreCompleto}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nombreCompleto}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormikTelefono">
              <Form.Label style={{color:'white'}}>Teléfono</Form.Label>
              <Form.Control
                type="text"
                name="telefono"
                value={values.telefono}
                onChange={handleChange}
                isInvalid={!!errors.telefono && touched.telefono}
              />
              <Form.Control.Feedback type="invalid">
                {errors.telefono}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormikCorreo">
              <Form.Label style={{color:'white'}}>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                name="correo"
                value={values.correo}
                onChange={handleChange}
                isInvalid={!!errors.correo && touched.correo}
              />
              <Form.Control.Feedback type="invalid">
                {errors.correo}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormikEmpresa">
              <Form.Label style={{color:'white'}}>Empresa</Form.Label>
              <Form.Control
                type="text"
                name="empresa"
                value={values.empresa}
                onChange={handleChange}
                isInvalid={!!errors.empresa && touched.empresa}
              />
              <Form.Control.Feedback type="invalid">
                {errors.empresa}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormikAsunto">
              <Form.Label style={{color:'white'}}>Asunto</Form.Label>
              <Form.Control
                type="text"
                name="asunto"
                value={values.asunto}
                onChange={handleChange}
                isInvalid={!!errors.asunto && touched.asunto}
              />
              <Form.Control.Feedback type="invalid">
                {errors.asunto}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Acepto los términos y condiciones"
              onChange={handleChange}
              isInvalid={!!errors.terms && touched.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormikTerms"
            />
          </Form.Group>
          
          <Row className="mb-3">
            <Form.Group as={Col} xs="12" controlId="validationFormikMensaje">
              <Form.Label style={{color:'white'}}>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="mensaje"
                value={values.mensaje}
                onChange={handleChange}
                isInvalid={!!errors.mensaje && touched.mensaje}
              />
              <Form.Control.Feedback type="invalid">
                {errors.mensaje}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          
          <Button type="submit">Enviar</Button>
        </Form>
      )}
    </Formik>
  );
}

export default Formular;
