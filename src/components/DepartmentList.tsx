import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
interface DepartmentData {
  department: string;
  sub_departments: string[];
}
const jsonPayload:DepartmentData []= [
	{
  	"department": "customer_service",
  	"sub_departments": [
    	"support",
    	"customer_success"
  	]
	},
	{
  	"department": "design",
  	"sub_departments": [
    	"graphic_design",
    	"product_design",
    	"web_design"
  	]
	}
  ]


export default function DepartmentList() {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label="Parent"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {jsonPayload.map((data:DepartmentData)=>(
         <FormControlLabel
         label={data.department}
         control={
           <Checkbox
             checked={checked[0] && checked[1]}
             indeterminate={checked[0] !== checked[1]}
             onChange={handleChange1}
           />
         }
       />
      ))}
    </div>
  )
}
