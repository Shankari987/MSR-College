import React from 'react';
import { useFormik } from 'formik';
import useFirebase from '../../hooks/use-firebase';
import { registerSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';
import Link from 'next/link';
import { useState } from 'react';

const RegisterForm = () => {
    const [showPass, setShowPass] = useState(false);
    // register With Email Mobile
    const { registerWithEmailPassword } = useFirebase();
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
        initialValues: { name: '', email: '', mobile: '', terms: false },
        validationSchema: registerSchema,
        onSubmit: (values, { resetForm }) => {
            registerWithEmailPassword(values.email, values.mobile, values.name)
            resetForm()
        }
    })
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="reg-name">Name*</label>
                <input value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" name="name" id="reg-name" placeholder="Full name" />
                {touched.name && <ErrorMsg error={errors.name} />}
            </div>

            <div className="form-group">
                <label htmlFor="log-email">Email*</label>
                <input value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" name="email" id="log-email" placeholder="Email or username" />
                {touched.email && <ErrorMsg error={errors.email} />}
            </div>

            <div className="form-group">
                <label htmlFor="log-mobile">Mobile*</label>
                <input value={values.mobile} onChange={handleChange} onBlur={handleBlur} type='number' name="mobile" id="log-mobile" placeholder="Mobile" />
             
            </div>
            {touched.mobile && <ErrorMsg error={errors.mobile} />}

            <div className="form-group chekbox-area">
                <div className="edu-form-check">
                    <input value={values.terms} onChange={handleChange} onBlur={handleBlur} type="checkbox" name='terms' id="terms-condition" />
                    <label htmlFor="terms-condition">I agree the   <Link href="/terms-condition" legacyBehavior>
                            <a>Terms & Condition.</a>
                        </Link>
                    </label>
                </div>
            </div>
            <div className="form-group">
                Upload your Resume/CV<button type="submit" className="file edu-btn btn-large"><input type="file" className='border-0' name="file"/></button>
            </div>
            {touched.terms && <ErrorMsg error={errors.terms?.split('true,')[1]} />}
            
            <div className="form-group">
                <button type="submit" className="edu-btn btn-medium">Submit Application  <i className="icon-4"></i></button>
            </div>
        </form>
    )
}

export default RegisterForm;