import { useEffect, useState } from "react"
import "./WorkItemTable.css"

function WorkItemTable() {
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
                    <tr key={task.id}>
                        <td>{task.order}</td>
                        <td>Task</td>
                        <td>{task.title}</td>
                        <td>{task.status}</td>
                        <td>{task.effort ?? "-"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        
    )
}

export default WorkItemTable;