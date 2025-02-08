import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

export default function Profile() {
  useAuthRedirect();
  const { user, setUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState<string>(user?.name ?? "");
  const [emailInput, setEmailInput] = useState<string>(user?.email ?? "");

  const handleEdit = () => {
    setUser({ name: nameInput, email: emailInput });
    setIsEditing(true);
  };

  const handleSave = () => {
    setUser({ name: nameInput, email: emailInput });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="70vh"
    >
      <Card sx={{ width: 400, p: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Profile
          </Typography>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            disabled={!isEditing}
          />

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            disabled={!isEditing}
          />

          <Box mt={2} display="flex" justifyContent="space-between">
            {isEditing ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                >
                  Save
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button variant="contained" onClick={handleEdit}>
                Edit Profile
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
