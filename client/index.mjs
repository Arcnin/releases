/** Read a public Arcnin API resource using Node.js 18 or later. */
export async function getArcninInformation(resource) {
  if (!['health', 'product', 'pricing', 'downloads'].includes(resource)) {
    throw new TypeError('Choose health, product, pricing, or downloads.');
  }
  const response = await fetch('https://arcnin.com/api/v1/' + resource, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) throw new Error('HTTP ' + response.status);
  return response.json();
}
