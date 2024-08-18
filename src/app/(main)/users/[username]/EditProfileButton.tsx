"use client";

import { Button } from "@/components/ui/button";
import { UserData } from "@/lib/types";
import { useState } from "react";
import EditProfileDialog from "./EditProfileDialog";

interface EditProfileButtonProps {
  user: UserData;
}

export default function EditProfileButton({ user }: EditProfileButtonProps) {
  const {0:showDialog, 1:setShowDialog} = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setShowDialog(true)}>
        Изменить профиль
      </Button>

      <EditProfileDialog
        user={user}
        onOpenChange={setShowDialog}
        open={showDialog}
      ></EditProfileDialog>
    </>
  );
}
