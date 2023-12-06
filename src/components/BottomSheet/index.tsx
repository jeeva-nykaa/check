import { useRef } from 'react';
import { IoIosClose } from 'react-icons/io';
import type { SheetRef } from 'react-modal-sheet';
import Sheet from 'react-modal-sheet';

interface BottomSheetProps {
  children: React.ReactNode;
  open: boolean;
  onDismiss: () => void;
  showHeader: boolean;
  showCloseButton: boolean;
  heading?: string;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  children,
  open,
  onDismiss,
  showHeader,
  showCloseButton,
  heading,
}) => {
  const ref = useRef<SheetRef>();
  return (
    <Sheet
      isOpen={open}
      onClose={onDismiss}
      ref={ref}
      snapPoints={[600, 400, 100, 0]}
      initialSnap={1}
      detent="content-height"
    >
      <Sheet.Container>
        {showHeader && <Sheet.Header />}
        <Sheet.Content>
          <div className="p-12">
            {!showHeader && showCloseButton ? (
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-lightBg">
                <IoIosClose onClick={onDismiss} />
              </div>
            ) : null}
            {heading && (
              <div className="my-20 text-20 font-semibold text-textColor">
                {heading}
              </div>
            )}
            {children}
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={onDismiss} />
    </Sheet>
  );
};

export default BottomSheet;
