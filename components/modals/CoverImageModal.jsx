"use client";

import Upload from "@/app/(main)/_components/LiaraUpload";
import { useCoverImage } from "@/hooks/useCoverImage";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "../ui/dialog";
import { getCurrentUser } from "@/app/_lib/getCurrentUser";

const CoverImageModal = () => {
  const coverImage = useCoverImage();
  const [userImages, setUserImages] = useState([]);
  const [file, setFile] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const params = useParams();

  useEffect(() => {
    const getUserImages = async () => {
      const user = await getCurrentUser();
      // TODO: Get all cover urls uploaded by user
    };
  }, []);

  const onClose = () => {
    setFile(undefined);
    setIsSubmitting(false);
    coverImage.onClose();
  };

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover Image</h2>
        </DialogHeader>
        <DialogDescription>
          <p>Please choose your cover image</p>
        </DialogDescription>
        <Upload noteId={params.noteId} onClose={onClose} />
        <p>User images will be here</p>
      </DialogContent>
    </Dialog>
  );
};

export default CoverImageModal;
