import ComboBox from '../../components/combobox/combobox'
import React from 'react';
import {useState} from 'react';

const Blogs = () => {

    const [isHidden, setIsHidden] = useState(false);

    function toggleIsHidden() {
        setIsHidden(isHidden => !isHidden);
    }
    const serviceList = [{id: 1,
                          value: "Car"
                         },
                         {id: 2,
                          value: "Truck"
                         },
                         {id: 3,
                          value: "Plane"
                         },
                         {id: 4,
                          value: "Train"
                         },

                        ]

    const programList = [{id: 1,
                          value: "Prime"
                         },
                         
                         ]
    const ratingPreferenceList = [{id: 1,
                          value: "Traditional"
                         },
                         {id: 2,
                          value: "Item Level"
                         },
                         ]




    return (
        <div>
            <h1>This is Blogs!</h1>
            {!isHidden && <button id="btn_add" onClick={toggleIsHidden}>Add</button>}
            {isHidden &&  
            <div className="blog__add">
              <ComboBox 
                name = "Service"
                serviceList = {serviceList}/>
              <ComboBox 
                name = "Program"
                serviceList = {programList}/>
              <ComboBox 
                name = "Rating"
                serviceList = {ratingPreferenceList}/>
              <br />
                <button id="btn_save" onClick={toggleIsHidden}>Save</button>
            </div>
        }

        </div>
    )
};

export default Blogs;