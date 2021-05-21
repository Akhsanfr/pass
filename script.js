function letterToNum(letter, key){
    let hasil = "";
    switch (letter){
        case "a": hasil = key[9]+key[0]; break;
        case "b": hasil = key[9]+key[1]; break;
        case "c": hasil = key[9]+key[2]; break;
        case "d": hasil = key[9]+key[3]; break;
        case "e": hasil = key[9]+key[4]; break;
        case "f": hasil = key[9]+key[5]; break;
        case "g": hasil = key[9]+key[6]; break;
        case "h": hasil = key[9]+key[7]; break;
        case "i": hasil = key[9]+key[8]; break;
        case "j": hasil = key[0]+key[9]; break;
        case "k": hasil = key[0]+key[0]; break;
        case "l": hasil = key[0]+key[1]; break;
        case "m": hasil = key[0]+key[2]; break;
        case "n": hasil = key[0]+key[3]; break;
        case "o": hasil = key[0]+key[4]; break;
        case "p": hasil = key[0]+key[5]; break;
        case "q": hasil = key[0]+key[6]; break;
        case "r": hasil = key[0]+key[7]; break;
        case "s": hasil = key[0]+key[8]; break;
        case "t": hasil = key[1]+key[9]; break;
        case "u": hasil = key[1]+key[0]; break;
        case "v": hasil = key[1]+key[1]; break;
        case "w": hasil = key[1]+key[2]; break;
        case "x": hasil = key[1]+key[3]; break;
        case "y": hasil = key[1]+key[4]; break;
        case "z": hasil = key[1]+key[5]; break;
        default : hasil = key[1]+key[6]; break;
    }
    return hasil;
}
const app = {
    data(){
        return{
            masuk: "",
            kunci: "",
            keluara: "",
            keluarb: "",
        }
    },
    watch:{
        masuk(){
            this.ubah();
        },
        kunci(){
            this.ubah();
        },
    },
    methods:{
        ubah(){
            this.keluar = ""
            let arr = this.masuk.split("");
            key = [];
            if(this.kunci.length != 10){
                key = ["*","%","!","^","!","&","*","!","*","!",];
            } else {
                key = this.kunci.split("");
            }
            let hasil = []
            arr.forEach(e => {
                hasil.push(letterToNum(e, key));
            });
            this.keluara = hasil.join("");
            this.keluarb = hasil.reverse().join("");
        }
    }
};

Vue.createApp(app).mount('#app');