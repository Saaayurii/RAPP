import { useRef } from "react";
import { Cropper, ReactCropperElement } from "react-cropper";
import { DialogContent, DialogFooter, DialogHeader, Dialog, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import "cropperjs/dist/cropper.css"

interface CropImageDialogProps {
  src: string;
  cropAspectRatio: number;
  onCropped: (blob: Blob | null) => void;
  onClose: () => void;
}

export default function CropImageDialog({
  src,
  cropAspectRatio,
  onCropped,
  onClose,
}: CropImageDialogProps) {
  const cropperRef = useRef<ReactCropperElement>(null);

  function crop() {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;
    cropper.getCroppedCanvas().toBlob((blob) => onCropped(blob), "image/webp");
    onClose();
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader><DialogTitle>Обрезать изображение</DialogTitle></DialogHeader>
        <Cropper
          src={src}
          aspectRatio={cropAspectRatio}
          guides={false}
          zoomable={false}
          ref={cropperRef}
          className="mx-auto size-fit"
        ></Cropper>
        <DialogFooter>
          <Button variant="secondary" onClick={onClose}>
            Закрыть
          </Button>
          <Button onClick={crop}>Обрезать</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
