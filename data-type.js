const LoremIpsum = require('lorem-ipsum').LoremIpsum;

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

const primitiveDataType = {
    'sentence' : class sentence {
        static getFakeValue() {
            return lorem.generateSentences();
        }
    },
    'word' : class word {
        static getFakeValue() {
            return lorem.generateWords();
        }
    },
    'character' : class character {
        static getFakeValue() {
            let randomNumber = Math.floor(Math.random() * 26);
            return String.fromCharCode(randomNumber + 97);
        }
    },
    'boolean' : class boolean {
        static getFakeValue() {
            return Math.random < 0.5
        }
    },
    'integer' : class integer {
        static getFakeValue() {
            return Math.floor(Math.random() * 100);
        }
    },
    'decimal' : class decimal {
        static getFakeValue() {
            return Math.random();
        }
    },
    'paragraph' : class paragraph {
        static getFakeValue() {
            return lorem.generateParagraphs(1);
        }
    }    
};


exports.primitiveDataType = primitiveDataType;