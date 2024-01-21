const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const primitiveDataType = require('./data-type.js')['primitiveDataType'];

generateFakeWords = (dataType) => {
    let type = typeof dataType;

    if(type === "string") {
        return primitiveDataType[dataType].getFakeValue();
    } else {
        return generateFakeData(userGeneratedModels[dataType]);
    }
}

generateFakeData = (format) => {
    data = {};

    for(let key in format) {
        data[key] = generateFakeWords(format[key]);
    }

    return data;
}

app.get('/', (req, res) => {
    console.log(generateFakeData({
        'name': "word",
        'address': "paragraph",
        'age' : "integer"
    }))
    res.send('Yeah! Its Workin\n');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});