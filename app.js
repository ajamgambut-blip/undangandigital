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

setInterval(()=>{

    const sekarang =
    new Date();

    const selisih =
    target - sekarang;

    const hari =
    Math.floor(
        selisih /
        (1000*60*60*24)
    );

    document
    .getElementById("timer")
    .innerText =
    hari + " Hari";

},1000);