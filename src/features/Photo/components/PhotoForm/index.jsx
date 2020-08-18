import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import { Form, Formik } from "formik";
import React from "react";
import { FormGroup } from "reactstrap";

PhotoForm.propTypes = {};

function PhotoForm(props) {
    const initialValues={
title: "",
cateforyId: null
    };

  return (
    <Formik initialValues={initialValues}>
        
    </Formik>
      {(formikProps) => {
        <Form>
          <FormGroup>
            <label>Title<label>
                <input></input>
          </FormGroup>
          <FormGroup>
            <label>Title<label>
                <Select id="cateforyId" name="categoryId" placeholder="What's your photo category?" options={PHOTO_CATEGORY_OPTIONS}>

                </Select>
          </FormGroup>
        </Form>;
      }
      }
    </Formik>
  );
}

export default PhotoForm;
