import './App.css'
import {useEffect, useState} from "react";
import type {IData_SnippetNews} from "./Сomponents/PostCard/Types/post_intefaces.ts";
import PostCard from "./Сomponents/PostCard/PostCard";

const App: React.FC = () => {
  const [data, setData] = useState<IData_SnippetNews | null>(null);

  useEffect(() => {
      fetch("./data/data.json")
          .then(res => res.json())
          .then((data : IData_SnippetNews) => setData(data))
          .catch((err : Error) => console.log(err));
  }, [])

  return (
    <>
        <div className={`wrapper`}>
            {data ? <PostCard data={data} /> : <p>Загрузка...</p>}
        </div>
    </>
  )
}

export default App
