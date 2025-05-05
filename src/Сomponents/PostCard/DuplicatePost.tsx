import React from 'react'
import {AuthorInfo} from "./AuthorInfo.tsx";
import {PostInfo} from "./PostInfo.tsx";
import type {IData_SnippetNews} from "./Types/post_intefaces.ts";

interface Props {
    data:IData_SnippetNews
}

export const DuplicatePost: React.FC<Props> = ({data}) => {
    const newdata = data
    newdata.TRAFFIC = []
    newdata.SENT = " "
    return (
        <div className={`duplicatePostCard`}>
            <PostInfo data={newdata}/>
            <p className={'title'}>{newdata.TI}</p>
            <AuthorInfo data={newdata}/>
        </div>
    )
}
