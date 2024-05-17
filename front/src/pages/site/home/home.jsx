
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
import Bannersec from '../../../components/Banner/Bannersec'
import MultiCardCarusel from '../../../components/multicardcarusel/MultiCardCarusel'
import Mailsection from '../../../components/mailsection/Mailsection'
    
    const Home = () => {
        const {data,setdata} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <main>
                    <Bannersec/>
                    <MultiCardCarusel data={data} cut={8}/>
                    <MultiCardCarusel data={data} cut={4}/>
                    <Mailsection/>
                </main>
        </>
        )
    }
    
    export default Home
        