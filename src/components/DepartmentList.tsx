import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface DepartmentData {
  department: string;
  sub_departments: string[];
}

const jsonPayload: DepartmentData[] = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

export default function DepartmentList() {
  const [checkedItems, setCheckedItems] = React.useState<boolean[][]>(
    jsonPayload.map(() => [false])
  );

  const handleDepartmentChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = [
      event.target.checked,
      ...Array(jsonPayload[index].sub_departments.length).fill(
        event.target.checked
      ),
    ];
    setCheckedItems(newCheckedItems);
  };

  const handleSubDepartmentChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    departmentIndex: number,
    subDepartmentIndex: number
  ) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[departmentIndex][subDepartmentIndex + 1] =
      event.target.checked;
    newCheckedItems[departmentIndex][0] =
      newCheckedItems[departmentIndex].slice(1).every(Boolean);
    setCheckedItems(newCheckedItems);
  };

  return (
    
    <div>
      {jsonPayload.map((data, index) => (
        <div key={data.department}>
          <FormControlLabel
            label={data.department}
            control={
              <Checkbox
                checked={checkedItems[index][0]}
                indeterminate={
                  checkedItems[index].slice(1).some(Boolean) &&
                  !checkedItems[index].slice(1).every(Boolean)
                }
                onChange={(event) => handleDepartmentChange(event, index)}
              />
            }
          />
          {data.sub_departments.map((subDepartment, subIndex) => (
            <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }} key={subDepartment}>
              <FormControlLabel
                label={subDepartment}
                control={
                  <Checkbox
                    checked={checkedItems[index][subIndex + 1]}
                    onChange={(event) =>
                      handleSubDepartmentChange(event, index, subIndex)
                    }
                  />
                }
              />
            </Box>
          ))}
        </div>
      ))}
    </div>
    
  );
}
