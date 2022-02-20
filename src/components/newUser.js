import React, { useState, useRef } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'

import { CToast, CToastHeader, CToastBody, CButton, CToaster, CToastClose, CRow, CCol, CContainer, } from '@coreui/react'

function NewUser() {

    const date = new Date();
    const one = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();


    return (
        <>
            <CContainer>

                <CToast title="CoreUI for React.js" autohide={false} visible={true} style={{ width: '700px' }}>
                    <CToastBody>
                        <CRow>
                            <CCol sm={1}>
                                <CToastClose component={CButton} color="secondary" size="sm" className="ms-1">
                                    <AiFillCloseCircle />
                                </CToastClose>
                            </CCol>
                            <CCol sm={9}>
                                <b style={{ padding: '5px 10px', 'background-color': '#195', 'border-radius': '5px', color: 'white' }} > new user</b>
                                <br />
                                <b>Remark that depending on how y</b>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, veniam!
                                </p>
                                <b style={{ color: 'red' }}>Ism</b>
                            </CCol>
                            <CCol sm={2}>
                                <MdOutlineWatchLater />
                                <span style={{ padding: '0 5px' }}>{one}</span></CCol>
                        </CRow>
                    </CToastBody>

                </CToast>
            </CContainer>

        </>
    )

}




export default NewUser;