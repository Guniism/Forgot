export default function converter(input, mode){
    const capsOnArr = "%+๑๒๓๔ู฿๕๖๗๘๙๐\"ฎฑธํ๊ณฯญฐ,ฅฤฆฏโฌ็๋ษศซ.()ฉฮฺ์?ฒฬฦqwertyuiopasdfghjklzxcvbnm".split("");
    const capsOffArr = "_ๅ/-ภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝQWERTYUIOPASDFGHJKLZXCVBNM".split("");
    let result = "";

    const inputArr = input.split("");



    if(mode == 0){
        result = "LANGUAGE MODE (NOT FINISH)"
    }
    else if(mode == 1){
        for (let i = 0; i < inputArr.length; i++) {
            if (capsOnArr.includes(inputArr[i])) {
                let capsOnIndex = capsOnArr.indexOf(inputArr[i]);
                result += capsOffArr[capsOnIndex];
            }
            else if (capsOffArr.includes(inputArr[i])) {
                let capsOffIndex = capsOffArr.indexOf(inputArr[i]);
                result += capsOnArr[capsOffIndex];
            }
            else {
                result += inputArr[i];
            }
            
        }
    }


    return result;
}