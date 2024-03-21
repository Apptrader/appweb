import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const esmConfig = await import('./ecosystem.config.mjs');
const { default: appsConfig } = esmConfig;

module.exports = appsConfig;