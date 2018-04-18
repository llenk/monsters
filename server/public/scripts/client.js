$(document).ready(onReady);

function onReady() {
    $.ajax({
        type: 'GET',
        url: '/monsters'
    }).then(displayMonsters);
}

function displayMonsters(response) {
    let displayString = formatMonsters(response);
    $('#MONSTERS').html(displayString);
}

function formatMonsters(response) {
    let monsterString = '<ul>';
    for (let monster of response) {
        monsterString += '<li>' + monster + '</li>';
    }
    monsterString += '</ul>';
    return monsterString;
}