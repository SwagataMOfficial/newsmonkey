import React, { Component } from 'react';

export class Spinner extends Component {
    render() {
        return (
            <div className='container'>

                <div className='container'>
                    <div className='container'>
                        <div className="my-3 d-flex align-items-center justify-content-center">
                            <div className="spinner-border text-warning" role="status"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Spinner;
