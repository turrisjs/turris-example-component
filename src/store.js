import postal from 'postal';

const turrisExampleChannel = postal.channel('generated');

turrisExampleChannel.subscribe('request', ({request}) => {
    if (request === 'test') {
        turrisExampleChannel.publish('response', {data: 'ok!'});
    }
});

export default turrisExampleChannel;
