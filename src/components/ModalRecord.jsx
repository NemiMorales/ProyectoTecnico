import Box from "@mui/material/Box";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { fetchRecords } from "../api/fetchData";
import { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: " rgba(34,34,34,0.75)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalRecord({ id, open, handleClose }) {
  const [records, setRecords] = useState();
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    async function getRecords() {
      const response = await fetchRecords(token, id);
      setRecords(response.data);
    }
    getRecords();
  }, [id]);
  console.log(id);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Ts</TableCell> <TableCell>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {records?.map((record) => (
                  <TableRow
                    key={record.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{record.ts}</TableCell>
                    <TableCell>{record.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  );
}
