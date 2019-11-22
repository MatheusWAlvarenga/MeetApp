 module.exports = {
   dialect: 'postgres',
   host: 'localhost',
   username:'postgres',
   password:'docker',
   database:'MeetApp',
   define: {
     timestamps: true,
     underscored: true,
     underscoredAll: true,
   }
 }
