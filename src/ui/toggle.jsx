import { useState } from "react";

export default function ToggleSwitch({pass}){
    const [mode, setMode] = useState(false);
    function modeHandler(){
        setMode(!mode);
        if(!mode){
            //console.log('right');
            pass(1);
        }
        else{
            //console.log('left');
            pass(0);
        }
    }
    return (
    <div className="flex flex-col items-center justify-center">  
        <input onChange={modeHandler} type="checkbox" id="toggle" className="toggleCheckbox"/>
            <label htmlFor="toggle" className='toggleContainer'>
            <div className="no-drag font-medium text-base md:text-lg">เปลี่ยนภาษา</div>   
            <div className="no-drag font-medium text-base md:text-lg">ปิด Caps Lock</div>
        </label>
    </div>
    )
}