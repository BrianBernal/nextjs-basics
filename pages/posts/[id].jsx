// libraries
import Head from "next/head";

// styles
import utilStyles from "../../styles/utils.module.css";

// components
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../utils/posts";

async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// params is taken from getStaticPaths return value
// and it is defined by the name of the module file [id].jsx
async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export default Post;
export { getStaticPaths, getStaticProps };
