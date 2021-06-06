import * as Sentry from '@sentry/browser';
import { Integrations } from '@sentry/tracing';

// process.env.SENTRY_API_KEY
Sentry.init({
  dsn: 'https://d5fa791beeda48fcaa141dc31eaa8d8f@o175652.ingest.sentry.io/5596864',
  // To set your release version
  release: `chendachao.github.io@${process.env.VERSION}-${process.env.GIT_SHA1}`,
  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 1.0,
});
