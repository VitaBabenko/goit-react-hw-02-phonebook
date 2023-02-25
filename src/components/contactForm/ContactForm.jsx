import { Formik, Form, Field } from 'formik';

export const ContactForm = () => {
    return <Formik
        initialValues={{
            name: "",
            number: ""
        }}
        onSubmit={values => {console.log(values)}}>
        <Form>
            <label>
                Name
                <Field name="name" type="text"/>
            </label>
            <label>
                Number
                <Field name="number" type="tel"/>
            </label>
            <button type="submit">Add contact</button>
        </Form>
    </Formik>
}