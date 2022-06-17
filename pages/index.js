import Layout from "../components/layouts/article";
import Link from 'next/link';
import matter from 'gray-matter';
import fs from 'fs';
import Image from 'next/image'

export async function getStaticProps() {
    const files = fs.readdirSync('posts');
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);
        return {
            slug,
            frontmatter
        };
    });

    return {
        props: {
            posts
        }
    }
}

export default function Home({ posts }) {
  console.log(posts);
  return (
    <Layout>
      <h1 className="font-bold text-3xl text-center">Welcome to my personal blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-5">
          {posts?.map(({ slug, frontmatter }) => (
            <div key={slug} className='my-5 shadow-lg rounded-md overflow-hidden'>
                            <Link href={`/post/${slug}`}>
                                <a>
                                  <Image src={frontmatter.thumbnail} width={325} height={225} />
                                  <div className="p-5 font-semibold">{frontmatter.title}</div>
                                </a>
                            </Link>
                        </div>
                    ))}
        </div>
    </Layout>
  )
}
