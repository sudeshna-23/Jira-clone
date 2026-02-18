import { useEffect, useState } from "react"
import "./WorkItemTable.css"
import { WorkItem } from "../work_item/WorkItem"

export const WorkItemTable = () => {
    const [workItems, setWorkItems] = useState([])

    useEffect(() => {
        const fetchedItem = async () => {
            try {
                const response = await fetch("http://localhost:5000/tasks");
                const data = await response.json();
                setWorkItems(data);
            } catch (error) {
                console.log("Error while fetching Item", error);
            }
        }
        fetchedItem();
    }, [])

    return (
        <div className="table-wrapper">
            <table>
            <thead>
                <tr>
                    <th>Order</th>
                    <th>Work Item Type</th>
                    <th>Title</th>
                    <th>State</th>
                    <th>Effort</th>
                </tr>
            </thead>
            <tbody>
                {workItems.map(task => (
                    <WorkItem key={task.id} work = {task}/>
                ))}
            </tbody>
        </table>
        </div>
        
    )
}