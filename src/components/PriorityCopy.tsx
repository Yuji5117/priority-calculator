import { useState } from "react";

import { HiClipboardCopy } from "react-icons/hi";
import { IconContext } from "react-icons";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@mui/material/Tooltip";

interface PropsType {
  generateFormatedTextAsMarkdown: () => string;
}

const PriorityCopy = ({ generateFormatedTextAsMarkdown }: PropsType) => {
  const [openTooltip, setOpenTooltip] = useState<boolean>(false);

  const handleTooltipOpen = () => {
    setOpenTooltip(true);
  };

  const handleTooltipClose = () => {
    setOpenTooltip(false);
  };

  const copyTextToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        title="コピーしました！"
        open={openTooltip}
        leaveDelay={1500}
        onClose={handleTooltipClose}
        disableFocusListener
        disableTouchListener
      >
        <IconButton
          onClick={() => copyTextToClipboard(generateFormatedTextAsMarkdown())}
        >
          <IconContext.Provider value={{ color: "#ffffff" }}>
            <HiClipboardCopy onClick={() => handleTooltipOpen()} size={25} />
          </IconContext.Provider>
        </IconButton>
      </Tooltip>
    </>
  );
};

export default PriorityCopy;
