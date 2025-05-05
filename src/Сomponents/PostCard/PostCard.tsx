import * as React from "react";
import {DuplicatePost} from "./DuplicatePost.tsx";
import {AuthorInfo} from "./AuthorInfo.tsx";
import type {IData_SnippetNews} from "./Types/post_intefaces";
import {PostInfo} from "./PostInfo";
import "./PostStyle.css"
import {Content} from "./Content.tsx";
import { FaChevronDown } from "react-icons/fa6";

interface Props {
    data: IData_SnippetNews
}

const PostCard: React.FC<Props> = ({data}) => {
    return (
        <div className={`PostCard`}>
            <PostInfo data={data}/>
            <p className={'title'}>{data.TI}</p>
            <AuthorInfo data={data}/>
            <Content data={data}/>
            <div className={'kw-container'}>
                {data.KW.map((item, i) => (
                    <div className={'kw'} key={i}>
                        <p className={`kw-item`}>{item.value}</p>
                        <p className={`count kw-item`}>{item.count}</p>
                    </div>
                ))}
            </div>
            <a href={data.URL}>
                <div className={`source`}>Original Source</div>
            </a>
            <div className={`duplicate-info`}>
                <p className={`duplicates`}>Duplicates: <p className={`count`}> 1 </p></p>
                <button className={`btn sort-btn`}>By Relative {<FaChevronDown />}</button>
            </div>
            <DuplicatePost  data={data}/>
            <button className={`more-duplicates`}>{<FaChevronDown className={`ico`}/>}View Duplicates</button>
        </div>
    );
};
export default PostCard;