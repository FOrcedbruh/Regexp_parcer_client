import { useState, useRef } from "react";
import { motion } from "framer-motion";




const App: React.FC = () => {

    const filePicker: React.MutableRefObject<null | HTMLInputElement> = useRef(null);

    const [file, setFile] = useState<File | null>(null);

    const fileHandler = () => {
        filePicker.current?.click();
    }

    const onChange = (e: any) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);


    }

    
    // post request

    const confirmHandler = () => {
        if (file) {
            return;
        }
    }

    return (
        <main className='container'>
            <input type="file" ref={filePicker} className="hidden" accept=".txt, .cvs, .xlsx, .docx, .json" onChange={onChange}/>
            <motion.h1 initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }}>Выберите файл</motion.h1>
            <div>
                <motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.2 }} className="Btn" onClick={fileHandler}>Выбрать</motion.button>
            </div>
            {file && <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0}} className='selectedFiles'>
                <h5>Выбранные файлы</h5>
                <p>{file.name}</p>
                <motion.button whileTap={{ backgroundColor: '#c4c4c4'}} className="confirmBtn" onClick={confirmHandler}>Подтвердить</motion.button>
            </motion.div>}
        </main>
    )
}

export default App;