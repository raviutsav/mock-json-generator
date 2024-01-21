const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const primitiveDataType = require('./data-type.js')['primitiveDataType'];

const userGeneratedModels = {
    'sampleModel' : {
        'schhool' : "sentence",
        'schhool code' : "integer",
        'fee' : "decimal"
    }
}

generateFakeWords = (metaAttribute) => {


    let type = typeof metaAttribute;

    if(type === "string") {

        let dataType = metaAttribute;
        if(dataType in primitiveDataType) {
            
            let temp = primitiveDataType[dataType].getFakeValue();
            console.log(temp);
            return temp;
        }

    } else if(Array.isArray(metaAttribute)) {

        let dataType = metaAttribute[0];
        let desiredLength = metaAttribute[1];

        return primitiveDataType[dataType].getFakeValue(desiredLength);

    }
    return generateFakeData(userGeneratedModels[metaAttribute]);
    
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
        'age' : "integer",
        'myschooling' : "sampleModel"
    }))
    res.send('Yeah! Its Workin\n');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});