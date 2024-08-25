//
import { Button, Form, Input, Select } from "antd";
import { useState } from "react";

function AdminPage() {


    const [selected, setSelected] = useState("")
    const handleChange = (value) => {
        console.log("value is", value)
        setSelected(value)
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
    return (
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
                <Select.Option value="1">Course</Select.Option>
                <Select.Option value="2">Assignment</Select.Option>
            </Select>
            {selected === "1" ? courseForm : 
            selected === "2" ? assignmentform : 
            selected =="3"? <p>please select any option above to continue</p> :
            <p>please select any option above to continue</p>}
        </div>
    )
}
export default AdminPage;