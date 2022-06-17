import Head from 'next/head';

const Layout = ({ children, title }) => {
    const t = `${title} - Qu1etboy's blog`
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <Head>
                {title && <title>{t}</title>}
            </Head>

            {children}
        </div>
    )
}

export default Layout;