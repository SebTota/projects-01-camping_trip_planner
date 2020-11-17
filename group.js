async function sendGroupInvitePost(data) {
    const response = await fetch(serverAddress + '/inviteUser', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:5000',
            'CORS_SUPPORTS_CREDENTIALS': 'true',
            'Access-Control-Allow-Credentials': 'true'
        },
        credentials: 'include',
        body: JSON.stringify(data)
    });
    return await response.json();
}

function sendGroupInvite() {
    const urlParams = new URLSearchParams(window.location.search);
    const groupUuid = urlParams.get('group-uuid');
    const inviteEmail = document.getElementById('input_inviteEmail').value;

    sendGroupInvitePost({
        'group-uuid': groupUuid,
        'invite-user-email': inviteEmail
    }).then(ret => {
        console.log(ret);
        location.reload(true);
    })
}