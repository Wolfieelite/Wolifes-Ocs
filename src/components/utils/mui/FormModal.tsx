import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  submitModal: () => void;
  data: Object;
}

export default function FormModal({ showModal, closeModal, submitModal, data}: ModalProps) {
  return (
    <Dialog className="flex flex-col bg-black" open={showModal} onClose={closeModal} maxWidth="xs" fullWidth={true}>
      <DialogTitle>Create new character</DialogTitle>
      <Divider />
      <DialogContent>
        <FormControl onChange={() => console.log(data)}>
          <TextField className="w-full" type="text" helperText="Name of your character" placeholder="character name..." />
          <FormLabel id="formTypeLable">Species</FormLabel>
          <RadioGroup name="form-type" aria-labelledby="form-type-buttons" defaultValue="human">
            <FormControlLabel value="human" control={<Radio />} label="Human" />
            <FormControlLabel value="wolf" control={<Radio />} label="Wolf" />
            <FormControlLabel value="anthro" control={<Radio />} label="Anthro" />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Close</Button>
        <Button onClick={submitModal}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
