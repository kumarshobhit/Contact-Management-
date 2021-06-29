
import 'antd/dist/antd.css'
import './App.css';
import {Button} from 'antd'
import {PlusSquareFilled } from '@ant-design/icons';
import AddDrawer from './AddDrawer';
import { useState } from 'react';

function App() {

  const[showDrawer,setShowDrawer]=useState(false)
  const[values,setValues]=useState({})
  const[errorInfo,setErrorInfo]=useState("")

  const handleFormOnFinish=values=>{
    setValues(values)
  }

  const handleFormOnFinishFailed=errorInfo=>{
    setErrorInfo(errorInfo)
  }

  console.log('values are ', values)
  console.log('erros are',errorInfo)
  
  return (
    <div className="App">
    <h1>Create a new contact</h1>
      <Button style={{float:'left'}} type="primary" onClick={() => setShowDrawer(true)}  icon={<PlusSquareFilled/>}>Click me !</Button>
      <AddDrawer 
      show={showDrawer}
       handleOnClose={()=>setShowDrawer(false)}
       handleOnFinish={handleFormOnFinish}
       handleOnFinishFailed={handleFormOnFinishFailed}
      >
      </AddDrawer>
    </div>
  );
}

export default App;
