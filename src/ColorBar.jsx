import Paper from "@mui/material/Paper";

import { CardContent,Card } from "@mui/material";

export  function ColorsList() {
    const data = [
      {
        id: 1,
        title: "Primary",
        value: "#1cc88a",
      },
      {
        id: 2,
        title: "Success",
        value: "#4e73df",
      },
      {
        id: 3,
        title: "Info",
        value: "#36b9cc",
      },
      {
        id: 4,
        title: "Danger",
        value: "#e74a3b",
      },
      {
        id: 5,
        title: "Secondary",
        value: "#858796",
      },
      {
        id: 6,
        title: "Light",
        value: "#f8f9fc",
    },
      {
        id: 7,
        title: "Warning",
        value: "#f6c23e",
      },
      {
        id: 8,
        title: "Dark",
        value: "#5a5c69",
      },
    ];
  
    return (
      <div className="list-1">
      <div className="color-list">
        {data.map((data, index) => (
         
          <ColorBar data={data} key={index} />
         
        ))}
      </div>
      </div>
    );
  }
  
function ColorBar({ data }) {
  return (
    <div>
     <Card>
      <Paper
        elevation={3}
        sx={{
          width: "300px",
          paddingLeft: "10px",
          backgroundColor: `${data.value}`,
          margin:"5px",
        }}
      >
        <CardContent>
        <h3>{data.title} </h3>
        <p>{data.value}</p>
        </CardContent>
      </Paper>
      </Card>
    </div>
  );
}


