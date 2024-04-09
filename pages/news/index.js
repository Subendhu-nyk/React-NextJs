import { Fragment } from "react"
import Link from 'next/link';

const NewsPage = () => {  
    return (
      <Fragment>
        <h1>Newspage</h1>
        <ul>
          {/* <li><a href="news/next">Next Js News</a></li> */}
          <li><Link href="news/next">Next Js News</Link></li>
          <li>React Js News</li> 
        </ul>
      </Fragment>      
    )
  }
  
  export default NewsPage