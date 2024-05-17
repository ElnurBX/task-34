
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
    import { Formik } from 'formik';
    import axios from 'axios';
    import './add.scss'
    const Add = () => {
        const {data,setdata} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Add</title>
                </Helmet>
                <div className='add'>
                <Formik
                    initialValues={{ title: '',image:'' ,description:'',price:''}}
                    validate={values => {
                    }}
                    onSubmit={(values) => {
                        axios.post('http://localhost:8080/api/Product',values).then(
                            (res) => {
                                console.log(res.data)
                                setdata([...data,...res.data])
                            
                            }
                        )
                    }}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form className="form__add" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            placeholder='title'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        {errors.title && touched.title && errors.title}
                        <input
                            type="text"
                            name="image"
                            placeholder='image'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.image}
                        />
                        {errors.image && touched.image && errors.image}
                        <input
                            type="text"
                            name="description"
                            placeholder='description'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                        />
                        {errors.description && touched.description && errors.description}
                        <input
                            type="number"
                            name="price"
                            placeholder='price'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                        />
                        {errors.price && touched.price && errors.price}
                        <button className='btn btn-success' type="submit" >
                            Submit
                        </button>
                        </form>
                    )}
                    </Formik>
                </div>
        </>
        )
    }
    
    export default Add
        