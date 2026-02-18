import "./WorkItem.css"
import document from "../../../../assets/icons/document.svg"
import bug from "../../../../assets/icons/bug.svg"
import bookMark from "../../../../assets/icons/bookmark.svg"
import square from "../../../../assets/icons/square.svg"
import filledSquare from "../../../../assets/icons/contained-square.svg"
import { Image } from "../../../../components/ui/image/Image"

const ICON_MAP = {
    document: document,
    story: bookMark,
    task: square,
    epic: filledSquare,
    bug: bug
};

export const WorkItem = ({work}) => {

    // const {order, title, desc, type, status="new", effort=0} = props;

    const icon = ICON_MAP[work.type] || document;

    return(
        <tr className="work-item">
            <td className="order-number">{work.order}</td>
            <td className="work-item-type">{work.type}</td>
            <td className="work-item-title">
                <Image source={icon} alternate={work.type}></Image>
                <h2>{work.title}</h2>
            </td>
            <td className="work-item-status">
                <h3>{work.status}</h3>
            </td>
            <td>{work.effort}</td>
        </tr>
    )
}