import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 300 }); // Cache items for 5 minutes
export default cache;
