const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT || 8000,()=> {
    console.log(`Server is running on port ${PORT}`);
});