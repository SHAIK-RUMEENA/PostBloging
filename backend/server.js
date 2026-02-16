const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const PostRoutes = require('./router/PostRouter.js');
const authRoutes = require('./router/authRouter.js');
//const {errorHandler} = require('./middleware/errorMiddleware.js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());
app.use('/api/posts', PostRoutes);
console.log("🚀 Post routes mounted at /api/posts");
app.use('/api/auth', authRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Error handler middleware
const errorhandler = require('./middleware/errorhandler');
app.use(errorhandler);

console.log('Using DATABASE_URI =', process.env.DATABASE_URI);

(async () => {
  const configuredUri = process.env.DATABASE_URI;
  try {
    await mongoose.connect(configuredUri);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.log("❌ Error connecting to MongoDB:", err);
    console.log('Attempting to start an in-memory MongoDB for development fallback...');
    try {
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongod = await MongoMemoryServer.create();
      const memUri = mongod.getUri();
      await mongoose.connect(memUri);
      console.log('✅ Connected to in-memory MongoDB');
    } catch (memErr) {
      console.log('❌ Failed to start in-memory MongoDB:', memErr);
    }
  }
})();

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
