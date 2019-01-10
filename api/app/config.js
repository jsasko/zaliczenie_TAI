const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://test:test123@ds026658.mlab.com:26658/test123',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
