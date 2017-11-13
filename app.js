const parser=require("body-parser");
const app=require("express")();

app.use(parser.urlencoded({extended: false}));
app.use(parser.json())

const user=require("./routes/user");
app.use("/api",user);

app.listen(3000,()=>{
    console.log("Listenning on port 3000");
});
