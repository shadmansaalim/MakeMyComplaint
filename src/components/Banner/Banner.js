import React, { useState } from 'react';
import './Banner.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css'
import { Fragment } from 'react-is';
import { Form } from 'react-bootstrap';
import {
    Typeahead,
} from 'react-bootstrap-typeahead';


const Banner = ({ stores }) => {
    const [singleSelections, setSingleSelections] = useState([]);

    const options = [];
    stores.forEach(store => options.push(store.name + ", " + store.location));

    return (
        <div className="mb-5">
            <div className="banner-img d-flex justify-content-center align-items-center" >
                <Fragment>
                    <Form.Group>
                        <h2 className="text-white fw-bold mb-4" style={{
                            textShadow: "1px 1px black"
                        }}>The #1 Site For Sharing Your Buying Experience</h2>
                        <Typeahead
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

