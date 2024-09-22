export function getIPV4() {
    return fetch('https://api.ipify.org/')
        .then(response => response.text())
}

export function getIPV6() {
    return fetch('https://api6.ipify.org')
        .then(response => response.text())

} 