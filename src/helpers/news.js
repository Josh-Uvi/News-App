import {
  api_key,
  articles_url,
  country_code,
  language_code,
  sources_url,
} from './keys';

export async function fetchArticles(category = 'general') {
  try {
    let articles = await fetch(
      `${articles_url}?country=${country_code}&category=${category}`,
      {
        headers: {
          'X-API-KEY': api_key,
        },
      }
    );
    let news = await articles.json();
    articles = null;
    return news.articles;
  } catch (error) {
    throw error;
  }
}

export async function fetchSource() {
  try {
    let sources = await fetch(`${sources_url}?language=${language_code}`, {
      headers: {
        'X-API-KEY': api_key,
      },
    });
    let news = await sources.json();
    // console.log(news);
    sources = null;
    return news.sources;
  } catch (error) {
    throw error;
  }
}
