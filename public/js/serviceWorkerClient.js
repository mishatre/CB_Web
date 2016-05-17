
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceWorkerBackground.js').then(() => {
        alert('well done');
        console.log('Register complete')
    }, () => {
        alert('error');
        console.log('Register error')
    })
} else {
    window.location.href = '/notSupported';
    console.log('Not supported!')
}