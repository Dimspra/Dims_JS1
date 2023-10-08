console.log('external JS')

var bulan = 10;

if (bulan === 1) {
    console.log("Januari");
} else if (bulan === 2) {
    console.log("Februari");
} else if (bulan === 3) {
    console.log("Maret");
} else if (bulan === 4) {
    console.log("April");
} else if (bulan === 5) {
    console.log("Mei");
} else if (bulan === 6) {
    console.log("Juni");
} else if (bulan === 7) {
    console.log("Juli");
} else if (bulan === 8) {
    console.log("Agustus");
} else if (bulan === 9) {
    console.log("September");
} else if (bulan === 10) {
    console.log("Oktober");
} else if (bulan === 11) {
    console.log("November");
} else if (bulan === 12) {
    console.log("Desember");
} else {
    console.log("Bulan tidak valid");
}

// Nested if
if (bulan >= 1 && bulan <= 12) {
    if (bulan === 1) {
        console.log("Ini adalah bulan Januari");
    } else if (bulan === 2) {
        console.log("Ini adalah bulan Februari");
    } else if (bulan === 3) {
        console.log("Ini adalah bulan Maret");
    } else if (bulan === 4) {
        console.log("Ini adalah bulan April");
    } else if (bulan === 5) {
        console.log("Ini adalah bulan Mei");
    } else if (bulan === 6) {
        console.log("Ini adalah bulan Juni");
    } else if (bulan === 7) {
        console.log("Ini adalah bulan Juli");
    } else if (bulan === 8) {
        console.log("Ini adalah bulan Agustus");
    } else if (bulan === 9) {
        console.log("Ini adalah bulan September");
    } else if (bulan === 10) {
        console.log("Ini adalah bulan Oktober");
    } else if (bulan === 11) {
        console.log("Ini adalah bulan November");
    } else if (bulan === 12) {
        console.log("Ini adalah bulan Desember");
    } else {
        console.log("Ini adalah bulan lain dalam kalender");
    }
}

var bulan = 10;
var namaBulan;

switch (bulan) {
    case 1:
        namaBulan = "Januari";
        break;
    case 2:
        namaBulan = "Februari";
        break;
    case 3:
        namaBulan = "Maret";
        break;
    case 4:
        namaBulan = "April";
        break;
    case 5:
        namaBulan = "Mei";
        break;
    case 6:
        namaBulan = "Juni";
        break;
    case 7:
        namaBulan = "Juli";
        break;
    case 8:
        namaBulan = "Agustus";
        break;
    case 9:
        namaBulan = "September";
        break;
    case 10:
        namaBulan = "Oktober";
        break;
    case 11:
        namaBulan = "November";
        break;
    case 12:
        namaBulan = "Desember";
        break;
    default:
        namaBulan = "Bulan tidak valid";
}

console.log("Bulan ini adalah " + namaBulan);

var namaBulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

for (var i = 0; i < namaBulan.length; i++) {
    console.log(namaBulan[i]);
}

var i = 0;

while (i < namaBulan.length) {
    console.log(namaBulan[i]);
    i++;
}

var j = 0;

do {
    console.log(namaBulan[j]);
    j++;
} while (j < namaBulan.length);

function namaBulanKalender(bulan) {
    var namaBulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    if (bulan >= 1 && bulan <= 12) {
        return namaBulan[bulan - 1];
    } else {
        return "Bulan tidak valid";
    }
}

var bulanIni = 10;
console.log("Bulan ini adalah " + namaBulanKalender(bulanIni));
