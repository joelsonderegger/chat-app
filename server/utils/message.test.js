var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Joel';
        var text = 'Hello from the other side!';

        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toEqual(from);
        expect(message.text).toEqual(text);
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Joel';
        var lat = 15;
        var long = 19;
        var url = 'https://www.google.ch/maps?q=15,19'
        

        var location = generateLocationMessage(from, lat, long);

        expect(typeof location.createdAt).toBe('number');
        expect(location.from).toEqual(from);
        expect(location.url).toEqual(url);
    });
})
