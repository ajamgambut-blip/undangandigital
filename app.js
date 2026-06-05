// ===== NAMA TAMU DARI URL =====

const params =
new URLSearchParams(
window.location.search
);

const nama =
params.get("to");

if(nama){
    document.getElementById(
        "namaTamu"
    ).innerText = nama;
}

// ===== BUKA UNDANGAN =====

const btn =
document.getElementById(
    "btnBuka"
);

btn.addEventListener(
"click",
()=>{

    document
    .getElementById("cover")
    .style.display="none";

    document
    .getElementById("utama")
    .classList.remove("hidden");

    document
    .getElementById("musik")
    .play();

}
);

// ===== COUNTDOWN =====

const target =
new Date(
"2026-12-12 09:00:00"
);

function updateCountdown(){

    const sekarang =
    new Date();

    const selisih =
    target - sekarang;

    if(selisih <= 0){

        document
        .getElementById("timer")
        .innerHTML =
        "Acara Sedang Berlangsung 🎉";

        return;
    }

    const hari =
    Math.floor(
        selisih /
        (1000*60*60*24)
    );

    const jam =
    Math.floor(
        (selisih %
        (1000*60*60*24))
        /
        (1000*60*60)
    );

    const menit =
    Math.floor(
        (selisih %
        (1000*60*60))
        /
        (1000*60)
    );

    const detik =
    Math.floor(
        (selisih %
        (1000*60))
        /
        1000
    );

    document
    .getElementById("timer")
    .innerHTML =
    `
    ${hari} Hari<br>
    ${jam} Jam<br>
    ${menit} Menit<br>
    ${detik} Detik
    `;
}

updateCountdown();

setInterval(
updateCountdown,
1000
);