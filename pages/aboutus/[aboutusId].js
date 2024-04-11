import {useRouter} from 'next/router'; 
import { Fragment } from 'react';

const DeveloperDetail=()=>{
 const details = [
        { id : 1, name: 'Kunal', role: 'Senior Developer'},
        
        { id : 2, name: 'Sam', role: 'Backend Developer'},
        
        { id : 3, name: 'Sheetal', role: 'Frontend Developer'}       
        ]
    const router=useRouter();
    const developerid=router.query.aboutusId;
    console.log("developerid>>>",developerid) 
    const developer = details.find(data => parseInt(data.id) ===  parseInt(developerid));
return (
    <>
    {developer ? (
        <Fragment key={developer.id}>
          <h1>{developer.name}</h1>
          <h2>{developer.role}</h2>
        </Fragment>
      ) : (
        <h1>Developer doesn't exist</h1>
      )}
    </>
)
}
export default DeveloperDetail;