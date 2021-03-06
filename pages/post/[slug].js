import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Layout from '../../components/layouts/article';

export async function getStaticPaths() {
    const files = fs.readdirSync('posts');
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', '')
        }
    })) 

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug }}) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content
        }
    }
}

const PostPage = ({ frontmatter, content }) => {
    return (
        <Layout title={frontmatter.title}>
            <div className='prose'>
                <h1>{frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: md().render(content) }}></div>
            </div>
        </Layout>
    
    )   
}

export default PostPage;