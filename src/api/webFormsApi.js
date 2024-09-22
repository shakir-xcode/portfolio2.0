
export const sendMessage = data => {
    data.access_key = process.env.REACT_APP_WEB_FORMS_ACCESS_KEY;
    const jsonData = JSON.stringify(data);
    // console.log(jsonData)
    return fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: jsonData,
    });
}

