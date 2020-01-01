let biodata = {
    nama : "Moch Noor Alvan Octavian Anwar",
    naPang : "Alvan",
    umur : 23,
    Alamat : {
        Jalan : "Ada Ada Aja No. 10",
        Kecamatan: "Karangploso",
        Kota : "Malang",
        Provinsi : "Jawa Timur"
    },
    Akademi :{
        SD : {
            NamaSekolah : "SDN Girimoyo 01 Karangploso",
            Alamat : {
                Jalan : "Diponegoro No. 68",
                Kecamatan: "Karangploso",
                Kota: "Malang",
                Provinsi : "Jawa Timur"
            },
            Tahun :{
                Masuk : "2002/2003",
                Keluar : "2003/2009"
            }
        },
        SMP : {
            NamaSekolah: "Smp Islam Al ma\'arif 01 singosari",
            Alamat : {
                Jalan: "Ronggolawe No.19",
                Kecamatan : "Singosari",
                Kota : "Malang",
                Provinsi : "Jawa Timur"
            },
            Tahun :{
                Masuk : "2009/2010",
                Keluar : "2012/2013"
            }
        }
    },
    skills : ['PHP', 'JS', 'CSS3', 'HTML5']
}

console.log(biodata.Akademi.SMP);