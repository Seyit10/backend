var mongoose=require("mongoose");
var dbURI = 'mongodb://localhost/mekanbul';
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresindeki veritabanına bağlandı");
});
mongoose.connection.on("error",function(){
    console.log(" Bağlantı sağlanamadı");
});
mongoose.connection.on("disconnect",function(){
    console.log(" Bağlantınız kesildi");
});


process.on("SIGINT", function(){
    mongoose.connection.close();
    console.log("Baglantı kapatıldı.");
    process.exit(0);
});

require("./venue");


