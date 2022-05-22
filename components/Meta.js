import Head from 'next/head';
import favicon from '../images/favicon.ico';

const Meta = ({ title, description }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name='keywords' content='news, information, latest news' />
      <meta name='description' content={description} />
      <link rel="icon" href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'NewsInc - Latest News',
  description: 'Get all the latest news.'
}

export default Meta