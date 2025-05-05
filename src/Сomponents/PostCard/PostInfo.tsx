import * as React from "react";
import type {IData_SnippetNews} from "./Types/post_intefaces.ts";
import {parseDate, formatTrafficData, formatNumber} from "../../Utils/Utils.ts";
import { GrStatusInfo,  GrStatusPlaceholder} from "react-icons/gr";

interface Props {
    data: IData_SnippetNews
}

export const PostInfo: React.FC<Props> = ({data}) => {
    return (
        <div className="post-info">
            <div className={`post-info-left`}>
                <div className={`dp info-item`}><p className="day">{parseDate(data.DP).day}</p> {parseDate(data.DP).month} {parseDate(data.DP).year}</div>
                <div className={`reach info-item`}><p className="count">{formatNumber(data.REACH)}</p>Reach</div>
                <div className={`traffic info-item`}>
                    {data.TRAFFIC.length > 0 ?
                        (<>Top Traffic: {data.TRAFFIC.map((traffic, index) =>
                    (
                        <div key={index} className={`traffic-item`}>
                            <p>{formatTrafficData(traffic).value}</p>
                            <p className="count">{formatTrafficData(traffic).count}</p>
                        </div>
                    ))}</>
                ): null
                    }
                </div>
            </div>
            <div className={`post-info-right info-item`}>
                {data.SENT !== " " ?
                <div className={`sent ${data.SENT === "negative" ? 'negative' : 'positive'}`}>{data.SENT === "negative" ? "Negative" : "Positive"}</div>
                : null}
                <GrStatusInfo className={`status status-ico`}/>
                <GrStatusPlaceholder className={`status-ico`}/>
            </div>
        </div>
    );
};
