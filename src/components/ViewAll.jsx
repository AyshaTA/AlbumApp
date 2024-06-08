import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data, setdata] = useState(
        [
            {"userId": 1,"id": 1, "title": "quidem molestiae enim" },
            {"userId": 1,"id": 2,"title": "sunt qui excepturi placeat culpa" },
            {"userId": 1,"id": 3,"title": "omnis laborum odio"},
            {"userId": 1,"id": 4,"title": "non esse culpa molestiae omnis sed optio"}

        ]

    )
    return (

        <div>
<Navbar/>
            
<div className="container">
                <div className="row">
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">USER-ID</th>
                                        <th scope="col">TITLE</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                            {
                                data.map(
                                    
                                    (value, index) => { return   <tr>
                                                <td>{value.id}</td>
                                                <td>{value.userId}</td>
                                                <td>{value.title}</td>
                                            </tr>
                                            
                                    }
                                )
                            }
                            </tbody>
                          </table>
                        </div>
                    </div>
                </div>
            </div>
            
         </div>
        
    )
}

export default ViewAll