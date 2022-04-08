import React, { useState } from 'react';
import banner from '../../images/banner.jpg';
import './Banner.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css'
import { Fragment } from 'react-is';
import { Form } from 'react-bootstrap';
import {
    Typeahead,
} from 'react-bootstrap-typeahead';


const Banner = () => {
    const [singleSelections, setSingleSelections] = useState([]);

    const options = ["Coles, Melbourne Central",
        "Woolworth, QV Market",
        "Seven Eleven, Swanston Street",
        "Big W, QV Market",
        "Coles, Melbourne Central",
        "Woolworth, QV Market",
        "Seven Eleven, Swanston Street",
        "Big W, QV Market",
    ];

    return (
        <div className="mb-5">
            <div className="banner-img d-flex justify-content-center align-items-center" >
                <Fragment>
                    <Form.Group>
                        <h2 className="text-white fw-bold mb-4" style={{
                            textShadow: "1px 1px black"
                        }}>The #1 Site For Sharing Your Buying Experience</h2>
                        <Typeahead
                            style={{
                                zIndex: 1000000000000
                            }}
                            id="basic-typeahead-single"
                            labelKey="name"
                            onChange={setSingleSelections}
                            options={options}
                            placeholder="Search for store"
                            selected={singleSelections}
                        />
                    </Form.Group>
                </Fragment>
            </div>

        </div>
    );
};

export default Banner;

