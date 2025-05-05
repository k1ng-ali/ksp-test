import * as React from "react";
import type {IData_SnippetNews} from "./Types/post_intefaces.ts";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import {extractKeywords} from "../../Utils/Utils.ts";

interface Props {
    data: IData_SnippetNews
}

export const Content: React.FC<Props> = ({data}) => {
    const [collapsed, setCollapsed] = React.useState(false);

    const handleToggleCollapse = () => {
        setCollapsed(!collapsed);
    }
    const higlights = extractKeywords(data.HIGHLIGHTS)
    return (
        <div className="content">
            {collapsed ? (
                <p className="ab">{data.AB}</p>
                ):(
                <p className="higlights-text"
                   dangerouslySetInnerHTML={{ __html: higlights}}/>
            )}
            <button onClick={handleToggleCollapse} className={`btn`}>{collapsed ? "Show less" :"Show more"} {collapsed ? <FaCaretUp /> : <FaCaretDown />}</button>
        </div>

    );
};
