import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init(){
    Sentry.init({
        dsn: "https://4436adc926c344a98addeacfda2b0f3c@o1075333.ingest.sentry.io/6075865",
        integrations: [new Integrations.BrowserTracing()],
      
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
      });
}
function log(e){
    Sentry.captureException(e)
}

const logger = {
    init,
    log
}
export default logger;