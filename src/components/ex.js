import { ReactExcel, readFile, generateObjects } from '@ramonak/react-excel';
 
const App = () => {
  const [inexamtt, setinexamtt] = useState(undefined);
  const [examtt, setexamtt] = useState({});
 
  const examUpload = (event) => {
    const file = event.target.files[0];
    //read excel file
    readFile(file)
      .then((readedData) => setinexamtt(readedData))
      .catch((error) => console.error(error));
  };
 
  const save = () => {
    const result = generateObjects(examtt);
    //save array of objects to backend
  };
 
  return (
    <>
      <input
        type='file'
        accept='.xlsx'
        onChange={examUpload}
      />
      <ReactExcel
        inexamtt={inexamtt}
        onSheetUpdate={(examtt) => setexamtt(examtt)}
        activeSheetClassName='active-sheet'
        reactExcelClassName='react-excel'
      />
      <button onClick={save}>
          Save to API
      </button>
    </>
  );
}