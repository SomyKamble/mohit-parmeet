// import React from "react";

// const Table = () => {
//   return (
//     <div className="table-news">
//       <div className="header">
//         <div className="col">Date</div>
//         <div className="col">Ticker</div>
//         <div className="col col-lg">Heading</div>
//       </div>

//       <div className="rows">
//         <div className="row">
//           <div className="col">2022-02-15</div>
//           <div className="col">HDFC</div>
//           <div className="col col-lg">Lorem Ipsum</div>
//         </div>
//         <div className="row">
//           <div className="col">2022-02-15</div>
//           <div className="col">Axis</div>
//           <div className="col col-lg">Lorem Ipsum</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Table;



import React, { useContext } from "react";
import { NewsContext } from "../../NewsContext";
import NewsArticle from "./NewsArticle";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;
