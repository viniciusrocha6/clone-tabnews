import retry from "async-retry";

async function waitAllServices() {
  await waitForWebServer();

  async function waitForWebServer() {
    return retry(fetchStatusPage, { retries: 100 });

    async function fetchStatusPage() {
      const responde = await fetch("http://localhost:3000/api/v1/status");
      const responseBody = await responde.json();
    }
  }
}

export default {
  waitAllServices,
};
