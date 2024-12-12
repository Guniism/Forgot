import {useState, useRef} from "react";
import ToggleSwitch from "./toggle"
import converter from "../script/script";

function WorkHeader({passMode2App}){
    const handleReload = () => {
        window.location.reload();
    };

    function setPass(num){
        passMode2App(num);
    }

    return (
        <div className="h-2/6 flex justify-between items-center">
                <img src="./favicon.png" className="hidden md:flex h-16 hover:cursor-pointer hover:-rotate-12" onClick={handleReload}/>
                <div className="flex flex-col space-y-2 mx-auto w-full items-center">
                    <div className="flex flex-row justify-between">
                        <img src="./favicon.png" className="md:hidden h-16 hover:cursor-pointer hover:-rotate-12" onClick={handleReload}/>
                        <h1 className="font-normal text-xl md:text-2xl">เปลี่ยนข้อความที่พิมพ์ผิด เมื่อ
                        <a onClick={handleReload} className="font-semibold text-2xl md:text-3xl hover:cursor-pointer">ลืม</a>..</h1>
                        <div className="md:hidden w-20"></div>
                    </div>
                    
                    <div className="justify-center">
                        <ToggleSwitch pass={setPass}/>
                    </div>
                </div>
            <div className="md:flex hidden w-20"></div>
            {/* <button className="border border-bd flex p-3 rounded-lg mx-2 bg-gray">
                <i className="material-icons" id="sync_alt">light_mode</i>
            </button> */}
        </div>
    )
}


function IOText({passText2App, output}){
    const inputRef = useRef();
    // const [inputValue, setInputValue] = useState("");

    function textChangeHandler(){
        // setInputValue(inputRef.current.value);
        passText2App(inputRef.current.value);
    }
    return (
        <div className="flex flex-col md:flex-row h-1/2 justify-between items-center">
            <textarea className="text-lg border p-4 border-bd w-full h-full rounded-xl bg-gray resize-none text-wht placeholder:text-ph" 
                placeholder="กรอกข้อความที่พิมพ์ผิด" 
                onChange={textChangeHandler} 
                ref={inputRef}
            />
            
            <button className="my-3 border border-bd flex p-2 rounded-lg mx-2 bg-gray hover:bg-swap ">
                <i className="material-icons" id="sync_alt">sync_alt</i>
            
            </button>

            <textarea value={output} readOnly className="text-lg outline-none shadow-none border p-4 border-bd w-full h-full rounded-xl bg-con resize-none text-wht" />
        </div>
    )
}


export default function Work(){
    const [modeNum, setModeNum] = useState(0);
    const [input, setInput] = useState(0);
    const [output, setOutput] = useState("");
    function setNum(num){
        // console.log("changeMode: " + num);
        setModeNum(num);
        
        // setOutput(num);//temp
        setOutput(converter(input, num));
    }
    function inputChangeHandler(textInput){
        // console.log("textChange");
        setInput(textInput);

        setOutput(textInput);//temp
        setOutput(converter(textInput, modeNum));
    }
    return (
        <div className=" bg-con border border-bd rounded-lg h-full md:h-5/6 lg:h-4/6 max-w-5xl w-full px-10 ">
            <WorkHeader passMode2App={setNum} />
            {/* <div className="flex md:hidden mb-7 justify-center"><ToggleSwitch /></div> */}
            <IOText passText2App={inputChangeHandler} output={output}/>
            {/* <h3>{modeNum}</h3>
            <h3>{input}</h3> */}
        </div>
        
    )
}