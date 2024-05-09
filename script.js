function main() {
    let confirm = document.getElementById('mainResult').innerHTML;

    if (confirm == 'You Lost !!!')
    {
        alert("Game over ! Please restart the game ...");
    } else {
        let x;
        do {
            x = Math.floor(Math.random() * 100 / 7.6);
        } while (x==0);

        let currentTotal = parseInt(document.getElementById('result').innerHTML);
        let total = currentTotal + x;
        document.getElementById('result').innerHTML = total;

        if (total < 21 ) {
            document.getElementById('mainResult').innerHTML = "Generate another card ..." ;
        } else if (total == 21) {
            document.getElementById('mainResult').innerHTML = " You've won !!!" ;
            alert("Congratulations ...");
            document.getElementById('btn-res').style.display = "block";          
        } else {
            document.getElementById('mainResult').innerHTML = " You Lost !!!" ;
            alert("Lost :( Click restart to play again ...");
            document.getElementById('btn-res').style.display = "block";          
        }

        var img = document.createElement("img");
        img.src = "Image/" + x + ".png";
        img.height = 180;
        document.body.appendChild(img);
    }
}

function restart() {
    location.reload();
}