import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';

export default function FAQPage() {
  const [faqCategories, setFaqCategories] = React.useState([]);

  React.useEffect(() => {
    fetch('https://instalura-api.vercel.app/api/content/faq')
      .then((respostaDoServer) => respostaDoServer.json())
      .then((respostaConvertida) => respostaConvertida.data)
      .then((resposta) => {
        setFaqCategories(resposta);
      });
  }, []);

  return (
    <FAQScreen faqCategories={faqCategories} />
  );
}
