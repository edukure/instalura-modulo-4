import React from 'react';

const FAQInternaPage = (props) => (
  <div>
    Olá
    {JSON.stringify(props, null, 4)}
  </div>
);

export default FAQInternaPage;

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      question: {
        title: 'titulo',
        slug: params.slug,
        description: 'lorem ipsum blabla',
      },
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: { slug: 'qual-e-a' },
      },
    ],
    fallback: false,
  };
};
