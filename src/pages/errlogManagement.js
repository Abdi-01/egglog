import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { getErrlog } from '../actions'

const ManageErrlog = (props) => {

    const [stateKu, setStateKu] = useState({
        project: '',
        collect: 'egglog',
        proList: [
            { title: 'Egglog', value: 'egglog' },
            { title: 'WEBAPP-A007: Eteratrade', value: 'webapp-a007-eteratrade' }
        ]
    })

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getErrlog(stateKu.collect))
    // }, [])

    const { errlog } = useSelector(({ errlogReducers }) => {
        console.log("selector :", errlogReducers)
        return {
            errlog: errlogReducers.errlog
        }
    })

    const renderErrlog = () => {
        return errlog.map((val, index) => {
            return (
                <tr key={index}>
                    <th className="text-center">{index + 1}</th>
                    <td>{val.date}</td>
                    <td>{val.name}</td>
                    <td>{val.message}</td>
                    <td>{val.pesan}</td>
                    <td className="text-center">{val.status}</td>
                </tr>
            )
        })
    }

    return (
        <div className="container">
            <div className="row">
                <h2 className="col-10">Errlog Monitor</h2>
                <FormGroup className="col-2">
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Choose Project...</option>
                        {
                            stateKu.proList.map((e, i) => {
                                return <option value={e.value} onClick={()=> dispatch(getErrlog(e.value))}>{e.title}</option>
                            })
                        }
                    </Input>
                </FormGroup>
            </div>

            <Table bordered>
                <thead>
                    <tr style={{ textAlign: 'center' }}>
                        <th>No</th>
                        <th>Date</th>
                        <th style={{ width: '13vw' }}>Error Name</th>
                        <th style={{ width: '13vw' }}>Error Message</th>
                        <th>Pesan</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {renderErrlog()}
                </tbody>
            </Table>
        </div>
    )
}

export default ManageErrlog