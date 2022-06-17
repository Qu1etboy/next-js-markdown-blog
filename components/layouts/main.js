import Head from 'next/head';
import Sidebar from '../sidebar';

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <meta charSet='UTF-8'/>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='desciption' content="Qu1etboy's blog" />
                <title>Qu1etboy's blog</title>
            </Head>
            <style jsx global>{`
                body {
                    background-color: white;
                }
            `
            }</style>
            <Sidebar />

            {children}
        
        </div>
    )
}

export default Layout;