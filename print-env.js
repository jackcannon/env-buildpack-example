const printKeys = ['NGINX_ROOT', 'EXAMPLE_ENV_1', 'EXAMPLE_ENV_2', 'EXAMPLE_ENV_3'];

const trimmedEnv = Object.fromEntries(
  Object.entries(process.env)
    .filter(([key]) => printKeys.includes(key)) // Filter keys
    .map(([key, value]) => [key, (value ?? '').substring(0, 50)]) // Trim values
);
console.table(trimmedEnv);

module.exports = null;
