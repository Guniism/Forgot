export default function converter(input, mode){
    const capsOnArr = "%+๑๒๓๔ู฿๕๖๗๘๙๐\"ฎฑธํ๊ณฯญฐ,ฅฤฆฏโฌ็๋ษศซ.()ฉฮฺ์?ฒฬฦqwertyuiopasdfghjklzxcvbnm".split("");
    const capsOffArr = "_ๅ/-ภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝQWERTYUIOPASDFGHJKLZXCVBNM".split("");

    const ThaiCapsOn = "%+๑๒๓๔ู฿๕๖๗๘๙๐\"ฎฑธํ๊ณฯญฐ,ฅฤฆฏโฌ็๋ษศซ.()ฉฮฺ์?ฒฬฦ"; 
    const EngCapsOn = "~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>?";
    
    const ThaiCapsOff = "_ๅ/-ภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ"; 
    const EngCapsOff = "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./";
    
    const ThaiArr = (ThaiCapsOn + ThaiCapsOff).split("");
    const EngArr = (EngCapsOn + EngCapsOff).split("");

    // console.log("------------------------");
    // console.log(ThaiArr.length + " " + EngArr.length);
    // for(let i = 0; i < ThaiArr.length; i++){
    //     for(let j = 0; j < EngArr.length; j++){
    //         if(ThaiArr[i] == EngArr[j]){
    //             // console.log(i + " " + j + " " + ThaiArr[i]);
    //             // console.log("[\"" + ThaiArr[i] + "\", " + "[" + i +", "+ j + "]],")
    //             console.log("\"" + ThaiArr[i] + "\"");
    //         }
    //     }
    // }

    const sameArr = ["%", "+", "\"", ",", ".", "(", ")", "?", "_", "/", "-"];
    const sameMap = new Map([
        ["%", [0, 5]],
        ["+", [1, 12]],
        ["\"", [14, 36]],
        [",", [24, 91]],
        [".", [36, 92]],
        ["(", [37, 9]],
        [")", [38, 10]],
        ["?", [43, 46]],
        ["_", [47, 11]],
        ["/", [49, 93]],
        ["-", [50, 58]]
    ])


    const inputArr = input.split("");
    let result = "";


    if(mode == 0){
        //checkLang
        let nThai = 0;
        let nEng = 0;
        const loop = (inputArr.length >= 10) ? 10 : input.length;
        for(let i = 0; i < loop; i++){
            if(ThaiArr.includes(inputArr[i])) nThai++;
            else nEng++;
        }
        
        // if(nThai >= nEng) console.log("Thai");
        // else console.log("Thai");

        for(let i = 0; i< inputArr.length; i++){
            // same
            if(sameArr.includes(inputArr[i])){
                let pair = sameMap.get(inputArr[i]);
                if(nThai >= nEng){
                    result += EngArr[pair[0]];
                }
                else{
                    result += ThaiArr[pair[1]];
                }
            }
            // Thai input
            else if(ThaiArr.includes(inputArr[i])){
                const index = ThaiArr.indexOf(inputArr[i]);
                result += EngArr[index];
            }
            // Eng input
            else if(EngArr.includes(inputArr[i])){
                const index = EngArr.indexOf(inputArr[i]);
                result += ThaiArr[index];
            }
            else{
                result += inputArr[i];
            }

        }
    }
    else if(mode == 1){
        for (let i = 0; i < inputArr.length; i++){
            if(capsOnArr.includes(inputArr[i])){
                const capsOnIndex = capsOnArr.indexOf(inputArr[i]);
                result += capsOffArr[capsOnIndex];
            }
            else if(capsOffArr.includes(inputArr[i])){
                const capsOffIndex = capsOffArr.indexOf(inputArr[i]);
                result += capsOnArr[capsOffIndex];
            }
            else{
                result += inputArr[i];
            }
            
        }
    }

    return result;
}