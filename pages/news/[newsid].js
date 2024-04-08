// Dynamic pages route - file name must be inclosed within square bracket ex-[newsid].js
// To extract the concrete values entered in the url,when the page is loaded,Next js gives us a special hook which we can use.A special react hook used in functional component.

import {useRouter} from 'next/router'; 
// its react hook but customised by next team 

const DetailPage = () => {
    const router=useRouter();
    const newsid=router.query.newsid;
    console.log(newsid)
    // newsid-its nothing but the dynamic page file name
  return (
    <h1>Detail Page</h1>
  )
}

export default DetailPage