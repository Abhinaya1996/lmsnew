//
import { Button, Form, Input, Select } from "antd";
import { Fragment, useState } from "react";
import AssignmentTable from "./AssignmentTable";
import { Outlet, useNavigate } from "react-router-dom";
import AssignmentForm from "./AssignmentForm";

function AdminPage() {

    const navigate = useNavigate();
    const [selected, setSelected] = useState("")
    const handleChange = (value) => {
        console.log("value is", value)
        setSelected(value)
        navigate("/admin/"+value)
    }
    const handleSubmit = (values) => {
        console.log(values.assignmentTitle, values.assignmentDescription, values.assignemntDueDate)
        alert(`Assignment Title: ${values.assignmentTitle} Assignment Description: ${values.assignmentDescription} Assignment Due Date: ${values.assignemntDueDate}`)
        // write logic to send this data to backend and insert in database
    }
    const courseForm = <Form onFinish={handleSubmit}>
        <Form.Item label="course title" name="courseTitle">
            <Input placeholder="please enter your course title" />
        </Form.Item >
        <Form.Item label="course description" name="courseDescription">
            <Input placeholder="please enter your course description" />
        </Form.Item>
        <Form.Item label="course start date" name="courseStartDate">
            <Input type="date" placeholder="please enter your course start date" />
        </Form.Item>
        <Form.Item label="course end date" name="courseEndDate">
            <Input type="date" placeholder="please enter your course end date" />
        </Form.Item>
        <Form.Item >
            <Button type="primary" htmlType="submit">Create Course</Button>
        </Form.Item>
    </Form>;

    const assignmentform = <Form onFinish={handleSubmit}>
        <Form.Item label="assignment title" name="assignmentTitle">
            <Input placeholder="please enter your assignment title" />
        </Form.Item>
        <Form.Item label="assignment description" name="assignmentDescription">
            <Input placeholder="please enter your assignment description" />
        </Form.Item>
        <Form.Item label="Assignment due date" name="assignemntDueDate">
            <Input type="date" placeholder="please enter your assignment due date" />
        </Form.Item>
        <Form.Item >
            <Button type="primary" htmlType="submit">Create Course</Button>
        </Form.Item>
    </Form>
    const demoJsx = <><h1>helloworld</h1><p>this is paragraph</p></>
    return (
        <div style={{display:"flex",gap:"20px"}}>
        <div style={{
            width: "30%",
            marginLeft: "50px",
            backgroundColor: "white",
            padding: "16px",
            marginTop: "10px"
        }}>
            <h1>Admin Page</h1>

            <Select style={{ minWidth: "100px", paddingBottom: "10px" }} onChange={handleChange}
                value={selected}>
                <Select.Option value="courses">Course</Select.Option>
                <Select.Option value="assignments">Assignment</Select.Option>
            </Select>
            {selected === "courses" ? courseForm : 
            selected === "assignments" ? <AssignmentForm/> : 
            selected =="3"? <p>please select any option above to continue</p> :
            <p>please select any option above to continue</p>}
        </div>
        <Outlet></Outlet>
        </div>
    )
}
export default AdminPage;