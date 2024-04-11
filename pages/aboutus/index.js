import Link from 'next/link';
const Developer=()=>{
    const details = [
        { id : 1, name: 'Kunal', role: 'Senior Developer'},
        
        { id : 2, name: 'Sam', role: 'Backend Developer'},
        
        { id : 3, name: 'Sheetal', role: 'Frontend Developer'}       
        ]

return (<>{details.map((data)=>{
    return(<ul key={data.id}>
        <li><Link href={`/aboutus/${data.id}`}>{data.name}</Link></li>
    </ul>)
})}</>)
}

export default Developer;