import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import useModal from "../hooks/useModal";
import ModalRecord from "./ModalRecord";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
import { useState } from "react";

export default function TableDetails({ platform }) {
  const { open, handleClose, handleOpen } = useModal();
  const [currentSensorId, setCurrentSensorId] = useState();

  function openModal(id) {
    setCurrentSensorId(id);
    handleOpen();
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Tipo</TableCell>{" "}
            <TableCell align="right">Records</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {platform?.sensors?.map((sensor) => (
            <>
              <TableRow
                key={sensor.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {sensor.name}
                </TableCell>
                <TableCell align="right">{sensor.id}</TableCell>
                <TableCell align="right">{sensor.type}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => openModal(sensor.id)}>
                    <MoreVertTwoToneIcon />
                  </Button>
                </TableCell>
              </TableRow>
            </>
          ))}
          <ModalRecord
            id={currentSensorId}
            open={open}
            handleClose={handleClose}
          />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
