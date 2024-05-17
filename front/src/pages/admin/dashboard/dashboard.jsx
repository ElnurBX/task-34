import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import MainContext from '../../../context/context';
import axios from 'axios';
import { Formik } from 'formik';
import '../add/add.scss';
const Dashboard = () => {
    const { data, setdata } = useContext(MainContext);

    const deleteItem = (id) => {
        axios.delete(`http://localhost:8080/api/Product/${id}`).then((res) => {
            setdata(res.data);
        });
    };


    return (
        <>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Image</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.title}</td>
                            <td>
                                <img src={item.image} height="100px" width="100px" alt="" />
                            </td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteItem(item._id)}>Delete</button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#exampleModal_${item._id}`}>Edit</button>
                            </td>

                            <div className="modal fade" id={`exampleModal_${item._id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">{item.title}</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body add">
                                        <Formik
                                            initialValues={{ title: item.title,image:item.image ,description:item.description,price:item.price}}
                                            validate={values => {
                                            }}
                                            onSubmit={(values) => {
                                                axios.put(`http://localhost:8080/api/Product/${item._id}`,values).then(
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
                                                /* and other goodies */
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
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Dashboard;
