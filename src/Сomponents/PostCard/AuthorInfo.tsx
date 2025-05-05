import * as React from "react";
import type {IData_SnippetNews} from "./Types/post_intefaces.ts";
import { LuGlobe, LuBookOpen} from "react-icons/lu";
import { RiUser3Line } from "react-icons/ri";
import {extractDomain} from "../../Utils/Utils.ts";

interface Props {
    data: IData_SnippetNews
}


export const AuthorInfo: React.FC<Props> = ({data}) => {
    const [icoIsloaded, setIcoIsloaded] = React.useState(true);

    const errorloadIco = () => {
        setIcoIsloaded(false);
    }

    return (
        <div className={`author-info`}>
            <a className={`url author-item`} href={data.URL}><LuGlobe className={`ico`}/> <p>{extractDomain(data.URL)}</p></a>
            <div className={`cntr author-item`}> {icoIsloaded ? <img src={data.FAV} onError={errorloadIco}/> : " "} <p>{data.CNTR}</p> </div>
            <div className={`lang author-item`}><LuBookOpen className={`ico`}/><p>{data.LANG}</p></div>
            {data.AU.length > 0 ?
            <div className={`autor author-item`}><RiUser3Line />
                {
                    data.AU.map((item, i) => (
                        <p key={i}>{item}</p>
                    ))
                }
            </div> : null
            }
        </div>
    );
};