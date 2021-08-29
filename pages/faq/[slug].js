import React from 'react';
import FAQQuestionScreen from '../../src/components/screens/FAQQuestionScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

const FAQInternaScreen = ({ category, question }) => (
  <FAQQuestionScreen
    question={question}
    category={category}
  />
);

FAQInternaScreen.propTypes = FAQQuestionScreen.propTypes;

export default websitePageHOC(FAQInternaScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Pergunta X',
    },
  },
});

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      category: {
        questions: [],
      },
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
