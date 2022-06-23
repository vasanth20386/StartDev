import React, { useState, useEffect, } from 'react';
import './Startups.scss'
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { Card } from 'primereact/card';
import Footer from '../Footer/Footer';
import photoData from './tweeklabs.png';
import photData_1 from './tweek.jpg';
import StartUpDetail from './StartUpDetail';
import data from './data.json'
import data1 from './data1.json'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import photoData_1 from './q1.png';
export default function Startups() {


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const [startupButton, setStartupButton] = useState(false);
    const [details, setDetails] = useState(null);

    const header1 = (
        <img alt="Card" src=
        {photoData_1} onError={(e) => e.target.src = 'https://picsum.photos/id/1/200'} />
    );
    const header2 = (
        <img alt="Card" src={photoData_1} onError={(e) => e.target.src = 'https://picsum.photos/id/1/200'} />
    );
    console.log(data.data)
    useEffect(() => {

    }, [startupButton])


    return (
        <>

            {
                startupButton ? (<StartUpDetail butt={setStartupButton} details={details}/>) : (
                    <div className='main'>
                        <h1>StartUps</h1>
                        <h6>Discover and invest in curated startups.<br></br>Get access to exclusive allocations and build investment portfolio.</h6>
                        <div className='row search-bar' >
                            <div className='col-11'>
                                <div className="field col-12 md:col-12">
                                    <div className="p-inputgroup">
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-search"></i>
                                        </span>
                                        <span className="p-float-label">
                                            <InputText id="inputgroup" type="text" />
                                            <label htmlFor="inputgroup">Search</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-1'>
                                <Button label="Sort By" icon="pi pi-angle-down" iconPos="right" />

                            </div>
                        </div>

                        <div className='cards-css'>
                            {
                                data1.data.map((item, idx) => {
                                    return (
                                        <>
                                            <div onClick={() => { setStartupButton(true); setDetails(item) }}>
                                                <Card className="mr-4 ml-4 mt-4 mb-4" title={item?.startupName}  style={{ width: '25em' }} header={header1}>
                                                    <p className="m-0" style={{ lineHeight: '1.5' }}>{item?.starupInfo} </p>
                                                </Card>
                                            </div>
                                        </>

                                    );
                                })
                            }
                        </div>

                        <div className='cards-css'>
                        {
                                data.data.map((item, idx) => {
                                    return (
                                        <>
                                            <div onClick={() => { setStartupButton(true);setDetails(item) }}>
                                                <Card className="mr-4 ml-4 mt-4 mb-4" title={item?.startupName}  style={{ width: '25em' }} header={header1}>
                                                    <p className="m-0" style={{ lineHeight: '1.5' }}>{item?.starupInfo} </p>
                                                </Card>
                                            </div>
                                        </>

                                    );
                                })
                            }
                        </div>


                    </div>
                )
            }


            <Footer />
        </>
    )
}
