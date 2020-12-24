urls = [
    ['История создания', 'history.html'],
    ['Первый шаг', 'first_step.html']
]

function next() {
    theme = document.getElementById('them').innerText;
    let result = urls.find(function(item, index, array) {

        if (item[0] == theme) {
            let next_url = array[index + 1]
            document.getElementById('them').innerText = next_url[0]
            console.log(window.frames)
        }   

    });
}