import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "cityName", headerName: "City Name", width: 130 },
  { field: "cityLatitude", headerName: "Latitude", width: 130 },
  { field: "cityLongitude", headerName: "Longitude", width: 130 },
];

const rows = [
  { id: 1, cityName: "Snow", cityLongitude: "43.2", cityLatitude: "43.2" },
  { id: 2, cityName: "Snow", cityLongitude: "43.2", cityLatitude: "43.2" },
  { id: 3, cityName: "Snow", cityLongitude: "43.2", cityLatitude: "43.2" },
  { id: 4, cityName: "Snow", cityLongitude: "43.2", cityLatitude: "43.2" },
  { id: 5, cityName: "Snow", cityLongitude: "43.2", cityLatitude: "43.2" },
  { id: 6, cityName: "Snow", cityLongitude: "43.2", cityLatitude: "43.2" },
  { id: 7, cityName: "Snow", cityLongitude: "43.2", cityLatitude: "43.2" },
  { id: 8, cityName: "Snow", cityLongitude: "43.2", cityLatitude: "43.2" },
  { id: 9, cityName: "Snow", cityLongitude: "43.2", cityLatitude: "43.2" },
  { id: 10, cityName: "Snow", cityLongitude: "43.2", cityLatitude: "43.2" },
];

export default function DataTable() {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "bold", marginLeft: "1%" }}>
        View Hotels
      </h1>
      <div
        style={{
          height: 400,
          width: "50%",
          marginTop: "20px",
          marginLeft: "20%",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </div>
  );
}
