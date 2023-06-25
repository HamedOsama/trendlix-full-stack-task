const { default: mongoose } = require("mongoose");

const connectBD=()=>{


return mongoose.connect(process.env.DBURI)
.then(r=>console.log('connected'))
.catch((e)=>{console.log("error");})}


module.exports =connectBD