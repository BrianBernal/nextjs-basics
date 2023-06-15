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
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

export default Post;
export { getStaticPaths, getStaticProps };
