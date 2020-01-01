let biodata = {
    nama : "Moch Noor Alvan Octavian Anwar",
    naPang : "Alvan",
    umur : 23,
    Alamat : {
        Jalan : "Ada Ada Aja 10",
        Kota : "Malang",
        Provinsi : "Jawa Timur"
    },
    Akademi :{
        SD : {
            NamaSekolah : "SDN Girimoyo 01",
            Alamat : {
                Jalan : "Diponegoro No. 68",
                Kota : "Malang",
                Provinsi : "Jawa Timur"
            },
            Tahun :{
                Masuk : "2002/2003",
                Keluar : "2003/2009"
            }
        },
        SMP : {
            NamaSekolah : "SDN Girimoyo 01",
            Alamat : {
                Jalan : "Diponegoro No. 68",
                Kota : "Malang",
                Provinsi : "Jawa Timur"
            },
            Tahun :{
                Masuk : "2002/2003",
                Keluar : "2003/2009"
            }
        }
    },
    skills : ['PHP', 'JS', 'CSS3', 'HTML5']
}

console.log(biodata.Akademi.SD);