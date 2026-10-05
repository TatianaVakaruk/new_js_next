const getRandomNumber = (from, to) => 
    from + Math.random() * (to - from);

const request = url => new Promise((resolve) => {
    const randomDelay = getRandomNumber(1000, 300);
setTimeout(() => {
resolve({
    userData : {
    name: 'Tom',
    age: 17
    },
    source: url,
    })
    }, randomDelay)

})

const servers = [
'https://server/us',
'https://server/eu',
'https://server/au'
]
    
const getUserASAP = (userId) => {
const userUrls = servers.map(serverUrl => `${serverUrl}/users/${userId}`);

const requests = userUrls.map(userUrl => request(userUrl));

return Promise.race(requests);
}

getUserASAP('user-1')
.then(res => console.log(res));