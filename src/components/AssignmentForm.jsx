import { Button, Form, Input } from "antd";


function AssignmentForm(){
    const handleSubmit = (values) => {
        console.log(values.assignmentTitle, values.assignmentDescription, values.assignemntDueDate)
        alert(`Assignment Title: ${values.assignmentTitle} Assignment Description: ${values.assignmentDescription} Assignment Due Date: ${values.assignemntDueDate}`)
        // write logic to send this data to backend and insert in database
    }
    return <Form onFinish={handleSubmit}>
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
        <Button type="primary" htmlType="submit">Create Assignment</Button>
    </Form.Item>
</Form>
}
export default AssignmentForm;