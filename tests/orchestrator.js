import retry from "async-retry";

async function waitAllServices() {
  await waitForWebServer();

  async function waitForWebServer() {
    return retry(fetchStatusPage, { retries: 100, maxTimeout: 1000 });

    async function fetchStatusPage() {
      const responde = await fetch("http://localhost:3000/api/v1/status");

      if (responde.status !== 200) {
        throw Error();
      }
    }
  }
}

const orchestrator = {
  waitAllServices,
};

export default orchestrator;
