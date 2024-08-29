import { Button, Modal, Table } from "antd";
import { useState } from "react";
import AssignmentForm from "./AssignmentForm";

function AssignmentTable(){
    const [isModalOpen, setIsModalOpen] = useState(false)
    const data=[{
        sno: 1,
        assignmentTitle: 'Assignment 1',
        assignmentDescription: 'This is the first assignment',
        assignmentdueDate: '2022-12-12',
    },
    {
        sno: 2,
        assignmentTitle: 'Assignment 2',
        assignmentDescription: 'This is the second assignment',
        assignmentdueDate: '2022-12-12',
    },
    {
        sno: 3,
        assignmentTitle: 'Assignment 3',
        assignmentDescription: 'This is the third assignment',
        assignmentdueDate: '2022-12-12'}]

    const [tableData, setTableData] = useState(data)
    const columns=[
        {
            key: 'sno',
            title: 'S.No',
            dataIndex: 'sno'
        },
        {
            key: 'assignmentTitle',
            title: 'Assignment Title',
            dataIndex: 'assignmentTitle'
        },
        {
            key: 'assignmentDescription',
            title: 'Assignment Description',
            dataIndex: 'assignmentDescription'
        },
        {
            key: 'assignmentdueDate',
            title: 'Assignment Due Date',
            dataIndex: 'assignmentdueDate'
        },
        {
            key: 'actions',
            title: 'Actions',
            dataIndex: 'actions',
            render:(_,record)=>{
                return <div style={{display:"flex",gap:"10px"}}>
                    <Button type="primary" onClick={handleEdit}>Edit</Button>
                    <Button type="primary" danger onClick={()=>handleDelete(record)}>Delete</Button>
                </div>
            }
        }
    ]
    const handleEdit = () => {
        setIsModalOpen(true)
    }
    
    const handleDelete = (record) => {
        ///send to db to delete
        const resultAfterDelete =  tableData.filter((item)=>item.sno !== record.sno);
        setTableData(resultAfterDelete)

    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }
    const modal = <Modal title="Update Assignment" open={isModalOpen} onCancel={handleCancel}>
       <AssignmentForm/>
    </Modal>
    return(<div>{modal}
    <Table style={{marginTop:"10px"}} columns={columns} dataSource={tableData}></Table></div>)
}
export default AssignmentTable;