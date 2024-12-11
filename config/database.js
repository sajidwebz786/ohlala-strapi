const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', 'db/data.db')),
    },
    useNullAsDefault: true,
  },
});

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'), // Default: localhost
//       port: env.int('DATABASE_PORT', 5432),   // Default PostgreSQL port
//       database: env('DATABASE_NAME', 'ohlala-data'), // Your database name
//       user: env('DATABASE_USERNAME', 'postgres'),    // Your username
//       password: env('DATABASE_PASSWORD', 'cognifo'), // Your password
//       ssl: env.bool('DATABASE_SSL', false),          // Set true if SSL is required
//     },
//     debug: false, // Set true to enable debugging logs
//   },
// });

