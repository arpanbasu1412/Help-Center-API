import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Service = () => {
    const [search, setSearch] = useState('');
    const [services, setServices] = useState([]);

    //   const getServiceData = async () => {
    //     try {
    //       const response = await fetch("http://localhost:5000/api/cards", {
    //         method: "GET",
    //       });

    //       if (response.ok) {
    //         const data = await response.json();
    //         if(data>0)setServices(data.allProducts);
    // console.log(services);
    //         console.log(data.allProducts);

    //       }
    //     } catch (error) {
    //       console.error(`services frontend error: ${error}`);
    //     }
    //   };

    //   useEffect(() => {
    //     getServiceData();
    //   }, [services]);

    useEffect(() => {
        fetch('http://localhost:5000/cards')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                // console.log(data);
                setServices(data);
            });
    }, []);

    return (
        <><br />
            <div className="container py-5">

                <h1 className='text-center'>Help Center</h1>
                <br />
                <Form>
                    <InputGroup >

                        {/* onChange for search */}
                        <Form.Control
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Search Title'
                        />
                    </InputGroup>
                </Form>
                
                {/* Cards */}
                {/* <div className="row row-cols-2">
                        {services
                            .filter((service) => {
                                return search.toLowerCase() === ''
                                    ? service
                                    : service.title.toLowerCase().includes(search);
                            })
                            .map((service, index) => (
                                <div className="card col" key={index}>
                                    <div className="card-body">

                                        <h5 className="card-title">{service.title}</h5>
                                        <p className="card-text">{service.description}</p>
                                        <a href="#" className="card-link">More</a>

                                    </div>
                                </div>
                            ))}
                    </div> */}


                <div class="container py-5">
                    
                    <h1 class="text-center">Services</h1>
                    <div class="row row-cols-1 row-cols-md-2 g-4 py-5">
                        {services
                            .filter((service) => {
                                return search.toLowerCase() === ''
                                    ? service
                                    : service.title.toLowerCase().includes(search);
                            })
                            .map((service, index) => (
                                <div class="col" key={index}>
                                    <div class="card">
                                        <br />
                                        <div class="card-body">
                                            <h5 class="card-title">{service.title}</h5>
                                            <p class="card-text">{service.description}</p>
                                        </div>
                                        <div class="mb-5 d-flex justify-content-around">
                                            <button class="btn btn-primary">Know More</button>
                                        </div>
                                    </div>
                                </div>
                            ))}



                    </div>
                </div>


            </div>

        </>
    );
};