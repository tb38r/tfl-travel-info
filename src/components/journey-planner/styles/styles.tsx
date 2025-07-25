import type { TooltipProps } from "@mui/material";
import { Tooltip, styled, tooltipClasses } from "@mui/material";


export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#1976D2",
    boxShadow: theme.shadows[1],
    fontSize: 13,
  },
}));
