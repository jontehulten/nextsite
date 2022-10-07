import Link from 'next/link'
import { useEffect } from 'react';
import { Router, useRouter } from 'next/router';
const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 4000)
    }, [])
    return ( 
        <div className="not-found">
        <h1>Ojdå, vad har du gjort?</h1>
        <h2>Du har spränkt sidan i luften..</h2>
        <p>För att laga sidan <Link href="/"><a>TRYCK HÄR!</a></Link></p>
        </div>
     );
}
 
export default NotFound;