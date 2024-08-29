import { Button, Table } from "antd";

function CourseTable(){
    const columns=[
        {
            key: 'sno',
            title: 'S.No',
            dataIndex: 'course'
        },
        {
            key: 'courseTitle',
            title: 'Course Title',
            dataIndex: 'courseTitle'
        },
        {
            key: 'courseDescription',
            title: 'Course Description',
            dataIndex: 'courseDescription'
        },
        {
            key: 'courseStartDate',
            title: 'Course Start Date',
            dataIndex: 'courseStartDate'
        },
        {
            key: 'courseEndDate',
            title: 'Course End Date',
            dataIndex: 'courseEndDate'
        },
        {
            key: 'actions',
            title: 'Actions',
            dataIndex: 'actions',
            render:()=>{
                return <div style={{display:"flex",gap:"10px"}}>
                    <Button type="primary">Edit</Button>
                    <Button type="primary" danger>Delete</Button>
                </div>
            }
        }
    ]
    const data=[
        {
            course: 1,
            courseTitle: 'Course 1',
            courseDescription: 'This is the first course',
            courseStartDate: '2022-12-12',
            courseEndDate: '2022-12-12',
        },
        {
            course: 2,
            courseTitle: 'Course 2',
            courseDescription: 'This is the second course',
            courseStartDate: '2022-12-12',
            courseEndDate: '2022-12-12',
        },
        {
            course: 3,
            courseTitle: 'Course 3',
            courseDescription: 'This is the third course',
            courseStartDate: '2022-12-12',
            courseEndDate: '2022-12-12'
        }
    ]
    return(<Table style={{marginTop:"10px"}} columns={columns} dataSource={data}></Table>)
}
export default CourseTable;