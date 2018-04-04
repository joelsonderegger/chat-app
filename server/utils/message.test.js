var expect = require('expect');

var {generateMessage} = require('./message');

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