import { Button } from '../src/components/commons/Button';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import { Grid } from '../src/components/foundation/layout/Grid';
import Text from '../src/components/foundation/Text';

export default function Home() {
  return (
    <div
      style={{
        flex: '1',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <Menu />

      <Grid.Container>
        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 5 }} offset={{ xs: 0, md: 1 }}>
            Textos
          </Grid.Col>

          <Grid.Col value={{ xs: 12, md: 6 }}>
            <img src="http://placehold.it/400x400" />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <div>
        <Text
          variant="title"
          tag="h1"
          // textAlign={'center'}
          textAlign={{
            xs: 'center',
            md: 'left',
          }}>
          Compartilhe momentos e conecte-se com amigos
        </Text>

        <Text
          variant="paragraph1"
          tag="p"
          textAlign={{
            xs: 'center',
            md: 'left',
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industrys standard dummy text ever since the 1500s.
        </Text>

        <Button
          variant="primary.main"
          margin={{
            xs: 'auto',
            md: 'initial',
          }}
          display="block">
          Cadastrar
        </Button>
      </div>

      <Footer />
    </div>
  );
}
