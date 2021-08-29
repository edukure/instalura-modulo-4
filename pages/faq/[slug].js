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

export const getStaticPaths = async () => {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then(async (respostaDoServer) => {
      const resposta = await respostaDoServer.json();
      return resposta.data;
    });

  const paths = faqCategories.reduce((valorAcumulado, faqCategory) => {
    const questionsPaths = faqCategory.questions.map((question) => {
      const questionSlug = question.slug;
      return { params: { slug: questionSlug } };
    });

    return [
      ...valorAcumulado,
      ...questionsPaths,
    ];
  }, []);

  return {
    paths,
    fallback: false,
  };
};
