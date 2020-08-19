const app = require('./app');

const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('../client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

app.listen(port, function() {
  console.log('Server is running on port: ' + port);
});